#!/bin/bash

# BULLPOWER SSL Setup Script
# This script automates SSL certificate setup for bullpower.fun

echo "🐂 BULLPOWER SSL Setup Starting... 🚀"

# Configuration
DOMAIN="bullpower.fun"
WEBROOT="/home/omarnbwz/bullpower.fun/public_html"
EMAIL="admin@bullpower.fun"

# Create necessary directories
echo "📁 Creating directory structure..."
mkdir -p "$WEBROOT/.well-known/pki-validation"

# Set proper permissions
echo "🔐 Setting permissions..."
chmod 755 "$WEBROOT/.well-known"
chmod 755 "$WEBROOT/.well-known/pki-validation"

# Install certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing certbot..."
    sudo apt update
    sudo apt install -y certbot
fi

# Generate SSL certificate
echo "🔒 Generating SSL certificate for $DOMAIN..."
sudo certbot certonly \
    --webroot \
    --webroot-path="$WEBROOT" \
    --email="$EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d "$DOMAIN" \
    -d "www.$DOMAIN"

# Check if certificate was generated successfully
if [ $? -eq 0 ]; then
    echo "✅ SSL certificate generated successfully!"
    
    # Setup auto-renewal
    echo "🔄 Setting up auto-renewal..."
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
    
    echo "🎉 SSL setup complete! Your site is now secure!"
    echo "🌐 Visit: https://$DOMAIN"
else
    echo "❌ SSL certificate generation failed!"
    echo "🔧 Please check the error messages above and try again."
fi

echo "🐂 BULLPOWER SSL Setup Complete! TO THE MOON! 🚀"
