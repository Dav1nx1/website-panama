#!/bin/bash

# Script to add swap space to prevent OOM errors during Docker builds
# Run this on your server: sudo bash scripts/add-swap.sh

set -e

SWAP_SIZE=${1:-2G}  # Default to 2GB, can be overridden: sudo bash scripts/add-swap.sh 4G

echo "💾 Adding ${SWAP_SIZE} swap space..."

# Check if swap already exists
if [ -f /swapfile ]; then
    echo "⚠️  Swap file already exists at /swapfile"
    read -p "Do you want to remove it and create a new one? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sudo swapoff /swapfile 2>/dev/null || true
        sudo rm /swapfile
    else
        echo "Aborted."
        exit 1
    fi
fi

# Create swap file
echo "Creating swap file..."
sudo fallocate -l $SWAP_SIZE /swapfile

# Set correct permissions
sudo chmod 600 /swapfile

# Format as swap
echo "Formatting as swap..."
sudo mkswap /swapfile

# Enable swap
echo "Enabling swap..."
sudo swapon /swapfile

# Make it permanent
if ! grep -q "/swapfile" /etc/fstab; then
    echo "Making swap permanent..."
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
fi

# Verify
echo ""
echo "✅ Swap space added successfully!"
echo ""
echo "📊 Current swap status:"
free -h
echo ""
echo "💡 To verify it persists after reboot, run: sudo reboot"

