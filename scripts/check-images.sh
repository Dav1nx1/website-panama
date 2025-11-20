#!/bin/bash

# Script to check if images exist and are accessible
# Run this on your server: bash scripts/check-images.sh

echo "🔍 Checking for image files..."
echo ""

# Check if public folder exists
if [ ! -d "public" ]; then
    echo "❌ Public folder not found!"
    exit 1
fi

echo "✅ Public folder exists"
echo ""

# List all image files in public folder
echo "📸 Image files in public folder:"
find public -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.svg" \) | head -20

echo ""
echo "🔍 Checking for commonly referenced images:"

# Check for commonly referenced images
IMAGES=(
    "luxury-terrace-with-mountain-view.jpg"
    "modern-luxury-kitchen-with-dining-area-and-large-w.jpg"
    "luxury-modern-home-exterior-with-pool-and-lounge-c.jpg"
    "luxury-bedroom-with-ocean-view-and-modern-design.jpg"
    "madeira-island-map-with-locations.jpg"
    "woman-relaxing-on-lounge-chair-aerial-view.jpg"
    "luxury-villa-terrace-with-ocean-view.jpg"
    "infinity-pool-with-sunset-ocean-view.jpg"
)

MISSING=0
for img in "${IMAGES[@]}"; do
    if [ -f "public/$img" ]; then
        echo "  ✅ $img"
    else
        echo "  ❌ $img (MISSING)"
        MISSING=$((MISSING + 1))
    fi
done

echo ""
if [ $MISSING -gt 0 ]; then
    echo "⚠️  $MISSING image(s) are missing from the public folder"
    echo ""
    echo "💡 Solutions:"
    echo "   1. Add the missing image files to the public/ folder"
    echo "   2. Or update the code to use placeholder images"
    echo "   3. Or use external image URLs (CDN)"
else
    echo "✅ All checked images exist"
fi

echo ""
echo "🐳 Checking Docker container..."
if docker ps | grep -q measuna-website; then
    echo "✅ Container is running"
    echo ""
    echo "Checking if public folder exists in container:"
    docker exec measuna-website ls -la /app/public 2>/dev/null | head -10 || echo "❌ Cannot access container"
    
    echo ""
    echo "Testing image access:"
    docker exec measuna-website ls -la /app/public/*.jpg 2>/dev/null | head -5 || echo "⚠️  No .jpg files found in container's public folder"
else
    echo "⚠️  Container is not running"
fi

