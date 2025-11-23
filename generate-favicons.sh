#!/bin/bash

# Script to generate favicons from logo.png
# Requires ImageMagick to be installed: sudo apt-get install imagemagick

LOGO_PATH="src/assets/logo.png"
PUBLIC_DIR="public"

echo "Generating favicons from $LOGO_PATH..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first:"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "  macOS: brew install imagemagick"
    echo ""
    echo "Alternatively, use an online favicon generator:"
    echo "  - https://realfavicongenerator.net/"
    echo "  - https://favicon.io/"
    exit 1
fi

# Generate different sizes
convert "$LOGO_PATH" -resize 16x16 "$PUBLIC_DIR/favicon-16x16.png"
convert "$LOGO_PATH" -resize 32x32 "$PUBLIC_DIR/favicon-32x32.png"
convert "$LOGO_PATH" -resize 180x180 "$PUBLIC_DIR/apple-touch-icon.png"
convert "$LOGO_PATH" -resize 192x192 "$PUBLIC_DIR/favicon-192x192.png"
convert "$LOGO_PATH" -resize 512x512 "$PUBLIC_DIR/favicon-512x512.png"

# Create .ico file (multiple sizes in one file)
convert "$LOGO_PATH" -resize 16x16 \
        "$LOGO_PATH" -resize 32x32 \
        "$LOGO_PATH" -resize 48x48 \
        "$PUBLIC_DIR/favicon.ico"

echo "Favicons generated successfully!"
echo "Files created in $PUBLIC_DIR:"
ls -lh "$PUBLIC_DIR"/favicon* "$PUBLIC_DIR"/apple-touch-icon.png
