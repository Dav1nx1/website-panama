#!/bin/bash

# Server setup script for Digital Ocean
# Run this script on your Digital Ocean server to prepare it for deployment

set -e  # Exit on error

echo "🔧 Setting up Digital Ocean server for deployment..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt-get update
sudo apt-get upgrade -y

# Install required packages
echo "📥 Installing required packages..."
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    git \
    nginx

# Install Docker
echo "🐳 Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
    echo "✅ Docker installed successfully"
else
    echo "✅ Docker is already installed"
fi

# Install Docker Compose
echo "🐳 Installing Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    echo "✅ Docker Compose installed successfully"
else
    echo "✅ Docker Compose is already installed"
fi

# Create project directory
echo "📁 Creating project directory..."
sudo mkdir -p /var/www/measuna-website
sudo chown -R $USER:$USER /var/www/measuna-website

# Clone repository
echo "📥 Cloning repository..."
cd /var/www
if [ -d "measuna-website/.git" ]; then
    echo "✅ Repository already exists, pulling latest changes..."
    cd measuna-website
    git pull origin main
else
    echo "📥 Cloning repository for the first time..."
    read -p "Enter your GitHub repository URL: " REPO_URL
    git clone $REPO_URL measuna-website
    cd measuna-website
fi

# Create .env.production file
echo "📝 Creating .env.production file..."
if [ ! -f .env.production ]; then
    cat > .env.production << EOF
NODE_ENV=production
NEXT_PUBLIC_DOMAIN=https://oportunidadenislagrande.com
EOF
    echo "✅ .env.production created. Please update it with your values."
else
    echo "✅ .env.production already exists"
fi

# Install Certbot for Let's Encrypt
echo "🔒 Installing Certbot for SSL certificates..."
if ! command -v certbot &> /dev/null; then
    sudo apt-get install -y certbot python3-certbot-nginx
    echo "✅ Certbot installed successfully"
else
    echo "✅ Certbot is already installed"
fi

# Setup Nginx
echo "🌐 Setting up Nginx..."
sudo cp nginx/oportunidadenislagrande.conf /etc/nginx/sites-available/oportunidadenislagrande.conf

# Create a temporary HTTP-only config for initial SSL setup
echo "📝 Creating temporary Nginx configuration for SSL setup..."
sudo tee /etc/nginx/sites-available/oportunidadenislagrande-temp.conf > /dev/null << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name oportunidadenislagrande.com www.oportunidadenislagrande.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Create certbot directory
sudo mkdir -p /var/www/certbot

# Enable temporary site
sudo ln -sf /etc/nginx/sites-available/oportunidadenislagrande-temp.conf /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test and reload Nginx
sudo nginx -t
sudo systemctl restart nginx

echo ""
echo "🎉 Server setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Obtain SSL certificate:"
echo "   sudo certbot --nginx -d oportunidadenislagrande.com -d www.oportunidadenislagrande.com"
echo ""
echo "2. After SSL is obtained, enable the full Nginx config:"
echo "   sudo ln -sf /etc/nginx/sites-available/oportunidadenislagrande.conf /etc/nginx/sites-enabled/"
echo "   sudo rm /etc/nginx/sites-enabled/oportunidadenislagrande-temp.conf"
echo "   sudo nginx -t"
echo "   sudo systemctl restart nginx"
echo ""
echo "3. Set up GitHub Actions secrets in your repository:"
echo "   - DO_SSH_KEY: Your private SSH key"
echo "   - DO_HOST: Your server IP address"
echo "   - DO_USER: Your server username (usually 'root' or your user)"
echo ""
echo "4. Add your server's SSH public key to GitHub (for git pull):"
echo "   ssh-keygen -t ed25519 -C 'deployment@oportunidadenislagrande.com'"
echo "   cat ~/.ssh/id_ed25519.pub"
echo "   Add this key to your GitHub repository: Settings > Deploy keys"
echo ""
echo "5. Build and start the application:"
echo "   docker-compose build"
echo "   docker-compose up -d"
echo ""
echo "6. Set up automatic SSL renewal:"
echo "   sudo systemctl enable certbot.timer"
echo "   sudo systemctl start certbot.timer"
echo ""
echo "✅ Your server is now ready for deployment!"
