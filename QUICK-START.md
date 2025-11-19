# Quick Start Deployment Guide

This is a condensed guide for deploying to Digital Ocean. For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Prerequisites

- Digital Ocean server (Ubuntu 20.04/22.04)
- Domain: `oportunidadenislagrande.com` pointing to your server IP
- SSH access to your server

## Quick Setup (5 Steps)

### 1. Setup Your Server

SSH into your server and run:

```bash
cd /var/www
git clone YOUR_GITHUB_REPO_URL measuna-website
cd measuna-website
./scripts/setup-server.sh
```

### 2. Configure GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets → Actions):

- `DO_SSH_KEY`: Your local machine's private SSH key
- `DO_HOST`: Your server IP address
- `DO_USER`: Your SSH username (usually `root`)

### 3. Setup SSH Keys

**On your server:**
```bash
ssh-keygen -t ed25519 -C "deployment@oportunidadenislagrande.com"
cat ~/.ssh/id_ed25519.pub
```
Add this public key to GitHub (Settings → Deploy keys)

**On your local machine:**
```bash
cat ~/.ssh/id_ed25519.pub
```
Add this public key to server's `~/.ssh/authorized_keys`

### 4. Setup SSL

On your server:

```bash
sudo certbot --nginx -d oportunidadenislagrande.com -d www.oportunidadenislagrande.com
sudo ln -sf /etc/nginx/sites-available/oportunidadenislagrande.conf /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/oportunidadenislagrande-temp.conf
sudo nginx -t
sudo systemctl restart nginx
```

### 5. First Deployment

On your server:

```bash
cd /var/www/measuna-website
docker-compose build
docker-compose up -d
```

## Automatic Deployments

Push to `main` branch and GitHub Actions will deploy automatically:

```bash
git add .
git commit -m "Deploy changes"
git push origin main
```

## Common Commands

```bash
# View logs
docker-compose logs -f

# Restart application
docker-compose restart

# Manual deployment
./scripts/deploy.sh

# Check status
docker ps
curl https://oportunidadenislagrande.com
```

## Troubleshooting

**502 Bad Gateway?**
```bash
docker-compose logs
sudo systemctl status nginx
```

**Deployment failed?**
- Check GitHub Actions logs
- Verify GitHub Secrets are correct
- Ensure SSH keys are properly configured

For detailed troubleshooting, see [DEPLOYMENT.md](./DEPLOYMENT.md#troubleshooting)
