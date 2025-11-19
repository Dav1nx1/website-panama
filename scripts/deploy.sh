#!/bin/bash

# Deployment script for Mea Suna Madeira website
# This script is run on the Digital Ocean server to deploy the application

set -e  # Exit on error

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /var/www/measuna-website || exit 1

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git fetch origin main
git reset --hard origin/main

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Build new image
echo "🏗️  Building Docker image..."
docker-compose build --no-cache

# Start containers
echo "▶️  Starting containers..."
docker-compose up -d

# Clean up old images
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

# Wait for application to start
echo "⏳ Waiting for application to start..."
sleep 10

# Health check
echo "🏥 Running health check..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Deployment successful! Application is running."
else
    echo "❌ Deployment failed! Application is not responding."
    echo "📋 Container logs:"
    docker-compose logs --tail=50
    exit 1
fi

echo "🎉 Deployment completed successfully!"
