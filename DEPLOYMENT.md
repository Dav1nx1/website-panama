# Deployment Guide - Mea Suna Madeira Website

This guide provides step-by-step instructions for deploying the Next.js application to a Digital Ocean server using GitHub Actions, Docker, and Nginx with SSL.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Server Setup](#server-setup)
3. [GitHub Configuration](#github-configuration)
4. [SSL Certificate Setup](#ssl-certificate-setup)
5. [First Deployment](#first-deployment)
6. [Automatic Deployments](#automatic-deployments)
7. [Troubleshooting](#troubleshooting)
8. [Manual Deployment](#manual-deployment)
9. [Maintenance](#maintenance)

---

## Prerequisites

Before starting, ensure you have:

- A Digital Ocean droplet (Ubuntu 20.04/22.04 LTS recommended)
- Minimum 1GB RAM (2GB recommended for building Docker images)
- Domain `oportunidadenislagrande.com` pointing to your server's IP address
- SSH access to your server
- GitHub repository with the project code

---

## Server Setup

### Step 1: Connect to Your Server

```bash
ssh root@YOUR_SERVER_IP
```

### Step 2: Run the Automated Setup Script

```bash
# Download and run the setup script
curl -O https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/YOUR_REPO/main/scripts/setup-server.sh
chmod +x setup-server.sh
./setup-server.sh
```

Alternatively, run it directly from the cloned repository:

```bash
# Clone the repository
cd /var/www
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO.git measuna-website
cd measuna-website

# Run setup script
./scripts/setup-server.sh
```

The setup script will:
- Update system packages
- Install Docker and Docker Compose
- Install Nginx
- Install Certbot for SSL certificates
- Create project directory structure
- Set up initial Nginx configuration
- Create environment files

### Step 3: Manual Server Setup (Alternative)

If you prefer manual setup, follow these steps:

#### 3.1 Update System

```bash
sudo apt-get update
sudo apt-get upgrade -y
```

#### 3.2 Install Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

#### 3.3 Install Docker Compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### 3.4 Install Nginx

```bash
sudo apt-get install -y nginx
```

#### 3.5 Install Certbot

```bash
sudo apt-get install -y certbot python3-certbot-nginx
```

#### 3.6 Clone Repository

```bash
sudo mkdir -p /var/www/measuna-website
sudo chown -R $USER:$USER /var/www/measuna-website
cd /var/www
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO.git measuna-website
cd measuna-website
```

#### 3.7 Create Environment File

```bash
cp .env.example .env.production
nano .env.production
```

Edit the file with your production values:

```env
NODE_ENV=production
NEXT_PUBLIC_DOMAIN=https://oportunidadenislagrande.com
```

---

## GitHub Configuration

### Step 1: Generate SSH Key for Deployment

On your **Digital Ocean server**, generate an SSH key:

```bash
ssh-keygen -t ed25519 -C "deployment@oportunidadenislagrande.com"
```

Press Enter to accept the default location and optionally set a passphrase.

### Step 2: Add SSH Public Key to GitHub

Display your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Add this key to your GitHub repository:
1. Go to your GitHub repository
2. Navigate to **Settings** → **Deploy keys**
3. Click **Add deploy key**
4. Paste the public key
5. Give it a title like "Digital Ocean Deployment"
6. **Do NOT check** "Allow write access"
7. Click **Add key**

### Step 3: Configure GitHub Secrets

In your GitHub repository, add the following secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `DO_SSH_KEY` | Your **private** SSH key | The private key from your local machine (not the server) |
| `DO_HOST` | Your server IP address | Example: `123.456.789.012` |
| `DO_USER` | Your SSH username | Usually `root` or your user |

#### Getting Your Private SSH Key

On your **local machine** (not the server):

```bash
# Generate a new SSH key for GitHub Actions (if you don't have one)
ssh-keygen -t ed25519 -C "github-actions@oportunidadenislagrande.com"

# Display the private key
cat ~/.ssh/id_ed25519
```

Copy the **entire** private key (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`)

#### Add Public Key to Server

Copy the public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

On your **Digital Ocean server**, add this public key to authorized keys:

```bash
echo "YOUR_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys
```

Or manually edit:

```bash
nano ~/.ssh/authorized_keys
```

---

## SSL Certificate Setup

### Step 1: Ensure DNS is Configured

Verify your domain points to your server:

```bash
dig +short oportunidadenislagrande.com
dig +short www.oportunidadenislagrande.com
```

Both should return your server's IP address.

### Step 2: Obtain SSL Certificate

On your server:

```bash
sudo certbot --nginx -d oportunidadenislagrande.com -d www.oportunidadenislagrande.com
```

Follow the prompts:
- Enter your email address
- Agree to the Terms of Service
- Choose whether to redirect HTTP to HTTPS (recommended: Yes)

### Step 3: Enable Full Nginx Configuration

After SSL is obtained:

```bash
sudo ln -sf /etc/nginx/sites-available/oportunidadenislagrande.conf /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/oportunidadenislagrande-temp.conf
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: Enable Automatic SSL Renewal

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# Test renewal
sudo certbot renew --dry-run
```

---

## First Deployment

### Step 1: Build and Start the Application

On your server:

```bash
cd /var/www/measuna-website

# Build Docker image
docker-compose build

# Start the application
docker-compose up -d

# Check logs
docker-compose logs -f
```

### Step 2: Verify Deployment

```bash
# Check if container is running
docker ps

# Check application health
curl http://localhost:3000

# Check public URL
curl https://oportunidadenislagrande.com
```

### Step 3: Test in Browser

Open your browser and navigate to:
- https://oportunidadenislagrande.com

You should see your application running!

---

## Automatic Deployments

Once everything is configured, deployments are automatic:

1. Make changes to your code locally
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. GitHub Actions will automatically:
   - Connect to your server
   - Pull the latest code
   - Build the Docker image
   - Deploy the new version
   - Run health checks

### Monitor Deployment

1. Go to your GitHub repository
2. Click on **Actions** tab
3. Select the latest workflow run
4. Watch the deployment progress

---

## Troubleshooting

### Issue: GitHub Actions Can't Connect to Server

**Solution:**
1. Verify SSH key is correct in GitHub Secrets
2. Check that public key is in server's `~/.ssh/authorized_keys`
3. Verify server firewall allows SSH (port 22):
   ```bash
   sudo ufw allow 22
   ```

### Issue: Docker Build Fails

**Solution:**
1. Check server has enough memory (at least 1GB)
2. Check Docker logs:
   ```bash
   docker-compose logs
   ```
3. Try building manually:
   ```bash
   docker-compose build --no-cache
   ```

### Issue: Application Won't Start

**Solution:**
1. Check container logs:
   ```bash
   docker-compose logs web
   ```
2. Verify environment variables:
   ```bash
   cat .env.production
   ```
3. Check if port 3000 is available:
   ```bash
   sudo lsof -i :3000
   ```

### Issue: SSL Certificate Fails

**Solution:**
1. Ensure DNS is properly configured
2. Check Nginx is running:
   ```bash
   sudo systemctl status nginx
   ```
3. Verify firewall allows HTTP/HTTPS:
   ```bash
   sudo ufw allow 80
   sudo ufw allow 443
   ```
4. Try manual certificate:
   ```bash
   sudo certbot certonly --standalone -d oportunidadenislagrande.com
   ```

### Issue: 502 Bad Gateway

**Solution:**
1. Check if Docker container is running:
   ```bash
   docker ps
   ```
2. Check application logs:
   ```bash
   docker-compose logs -f
   ```
3. Verify Nginx can reach the application:
   ```bash
   curl http://localhost:3000
   ```
4. Restart services:
   ```bash
   docker-compose restart
   sudo systemctl restart nginx
   ```

---

## Manual Deployment

If you need to deploy manually without GitHub Actions:

### On Your Server

```bash
# Navigate to project directory
cd /var/www/measuna-website

# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Check logs
docker-compose logs -f
```

### Using the Deployment Script

```bash
cd /var/www/measuna-website
./scripts/deploy.sh
```

---

## Maintenance

### View Application Logs

```bash
# View all logs
docker-compose logs

# Follow logs in real-time
docker-compose logs -f

# View last 100 lines
docker-compose logs --tail=100
```

### Restart Application

```bash
docker-compose restart
```

### Stop Application

```bash
docker-compose down
```

### Update Application

```bash
cd /var/www/measuna-website
git pull origin main
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Clean Up Old Docker Images

```bash
# Remove unused images
docker image prune -f

# Remove all unused containers, networks, and images
docker system prune -a
```

### Check Disk Space

```bash
df -h
docker system df
```

### Backup

```bash
# Backup environment file
cp .env.production .env.production.backup

# Backup Nginx configuration
sudo cp /etc/nginx/sites-available/oportunidadenislagrande.conf ~/nginx-backup.conf
```

### Monitor Server Resources

```bash
# Check CPU and memory usage
htop

# Check Docker container resources
docker stats
```

---

## Production Checklist

Before going live, ensure:

- [ ] Domain DNS is configured correctly
- [ ] SSL certificate is installed and working
- [ ] Environment variables are set in `.env.production`
- [ ] GitHub Secrets are configured
- [ ] Firewall rules are set (ports 22, 80, 443)
- [ ] Automatic SSL renewal is enabled
- [ ] Application is accessible via HTTPS
- [ ] GitHub Actions workflow runs successfully
- [ ] Application logs show no errors
- [ ] Health check passes

---

## Architecture Overview

```
GitHub (main branch)
        ↓
  GitHub Actions
        ↓ (SSH)
Digital Ocean Server
        ↓
   Git Pull Latest Code
        ↓
Docker Build & Deploy
        ↓
  Docker Container (Port 3000)
        ↓
    Nginx Reverse Proxy
        ↓
    SSL/HTTPS (Port 443)
        ↓
  oportunidadenislagrande.com
```

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Check server logs: `docker-compose logs`
4. Review Nginx logs: `sudo tail -f /var/log/nginx/error.log`

---

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Last Updated:** 2025-01-19
