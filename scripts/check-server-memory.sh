#!/bin/bash

# Script to check server memory and suggest optimizations
# Run this on your server: bash scripts/check-server-memory.sh

echo "🔍 Checking server memory..."
echo ""

# Check total memory
TOTAL_MEM=$(free -m | awk 'NR==2{printf "%.0f", $2}')
echo "Total RAM: ${TOTAL_MEM}MB"

# Check available memory
AVAIL_MEM=$(free -m | awk 'NR==2{printf "%.0f", $7}')
echo "Available RAM: ${AVAIL_MEM}MB"

# Check swap
SWAP_TOTAL=$(free -m | awk 'NR==3{printf "%.0f", $2}')
SWAP_FREE=$(free -m | awk 'NR==3{printf "%.0f", $4}')
echo "Swap Total: ${SWAP_TOTAL}MB"
echo "Swap Free: ${SWAP_FREE}MB"

echo ""
echo "📊 Recommendations:"

if [ "$TOTAL_MEM" -lt 2048 ]; then
    echo "⚠️  WARNING: Server has less than 2GB RAM"
    echo "   Docker builds may fail with exit code 137 (out of memory)"
    echo ""
    echo "💡 Solutions:"
    echo "   1. Add swap space (recommended for 1GB servers):"
    echo "      sudo fallocate -l 2G /swapfile"
    echo "      sudo chmod 600 /swapfile"
    echo "      sudo mkswap /swapfile"
    echo "      sudo swapon /swapfile"
    echo "      echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab"
    echo ""
    echo "   2. Upgrade your server to at least 2GB RAM"
    echo ""
    echo "   3. Build on a machine with more RAM and push the image to a registry"
fi

if [ "$SWAP_TOTAL" -eq 0 ]; then
    echo "⚠️  No swap space detected"
    echo "   Adding swap can help prevent OOM errors during builds"
fi

echo ""
echo "🐳 Docker memory info:"
docker info 2>/dev/null | grep -i memory || echo "Docker not running or not accessible"

