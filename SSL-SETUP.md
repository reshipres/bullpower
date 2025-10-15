# SSL Setup Script for BULLPOWER

## 🚀 Quick SSL Setup

### Method 1: Let's Encrypt (Free SSL)

```bash
# SSH into your server
ssh your-username@your-server.com

# Install certbot
sudo apt update
sudo apt install certbot

# Generate SSL certificate
sudo certbot certonly --webroot -w /home/omarnbwz/bullpower.fun/public_html -d bullpower.fun -d www.bullpower.fun

# Auto-renewal setup
sudo crontab -e
# Add this line:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

### Method 2: cPanel SSL (Easiest)

1. **Login to cPanel**
2. **Go to "SSL/TLS"**
3. **Click "Let's Encrypt"**
4. **Add Domain**: `bullpower.fun`
5. **Click "Issue"**

### Method 3: Manual SSL File Upload

1. **Create validation directory**:
```bash
mkdir -p /home/omarnbwz/bullpower.fun/public_html/.well-known/pki-validation/
```

2. **Upload validation file**:
```bash
# Download validation file from Namecheap
# Upload to: /home/omarnbwz/bullpower.fun/public_html/.well-known/pki-validation/
```

3. **Test accessibility**:
```bash
curl http://bullpower.fun/.well-known/pki-validation/7DE489F9BB284B516CEB0C1D1D9A6E4B.txt
```

## 🔧 Troubleshooting

### If SSL validation fails:

1. **Check file permissions**:
```bash
chmod 644 /home/omarnbwz/bullpower.fun/public_html/.well-known/pki-validation/7DE489F9BB284B516CEB0C1D1D9A6E4B.txt
```

2. **Check directory structure**:
```bash
ls -la /home/omarnbwz/bullpower.fun/public_html/.well-known/pki-validation/
```

3. **Test HTTP access**:
```bash
wget http://bullpower.fun/.well-known/pki-validation/7DE489F9BB284B516CEB0C1D1D9A6E4B.txt
```

## 📁 Required Directory Structure

```
/home/omarnbwz/bullpower.fun/
├── public_html/                    ← Web root
│   ├── .well-known/
│   │   └── pki-validation/
│   │       └── 7DE489F9BB284B516CEB0C1D1D9A6E4B.txt
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── bullpower.png
└── .git/
```

## 🚨 Important Notes

- SSL validation files MUST be in `public_html` directory
- File must be accessible via HTTP (not HTTPS during validation)
- Domain must point to correct directory
- File permissions should be 644

## 🔄 Auto-Renewal Setup

Add to crontab for automatic renewal:
```bash
# Edit crontab
crontab -e

# Add this line for monthly renewal
0 0 1 * * /usr/bin/certbot renew --quiet --renew-hook "systemctl reload nginx"
```

---

🐂 **BULLPOWER SSL - SECURE TO THE MOON!** 🚀
