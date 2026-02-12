# baro.dev Portfolio

A modern, dark-themed portfolio website for baro - Developer & Automation Specialist.

## Features

- **Dark/Void Aesthetic** with neon accents (cyan, purple, pink)
- **Custom Animated Cursor**
- **GSAP Scroll Animations**
- **Responsive Design** for all devices
- **WhatsApp Integration** (+234 816 992 7034)
- **Contact Form** with validation
- **Project Filtering** by category

## Services Showcase

- Website Development
- Bot Development
- Trading Bots
- WhatsApp Solutions

## GitHub Pages Deployment

### Method 1: Direct Upload

1. Go to [GitHub](https://github.com) and create a new repository named `baro.dev` or `portfolio`
2. Click "Add file" → "Upload files"
3. Upload these 3 files:
   - `index.html`
   - `styles.css`
   - `script.js`
4. Click "Commit changes"
5. Go to Settings → Pages
6. Under "Source", select "Deploy from a branch"
7. Select "main" branch and "/ (root)" folder
8. Click "Save"
9. Your site will be live at: `https://yourusername.github.io/repository-name`

### Method 2: Git Command Line

```bash
# Clone your repository
git clone https://github.com/yourusername/baro.dev.git
cd baro.dev

# Copy the portfolio files here
cp /storage/emulated/0/Download/telegram/index.html .
cp /storage/emulated/0/Download/telegram/styles.css .
cp /storage/emulated/0/Download/telegram/script.js .

# Add, commit, and push
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```

### Method 3: GitHub Desktop

1. Create a new repository on GitHub
2. Open GitHub Desktop and clone the repository
3. Copy the 3 files (`index.html`, `styles.css`, `script.js`) to the repository folder
4. Commit with message "Initial portfolio deployment"
5. Push to origin

## Custom Domain (Optional)

To use `baro.dev` as your custom domain:

1. Buy the domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your GitHub repository, go to Settings → Pages
3. Under "Custom domain", enter: `baro.dev`
4. Click "Save"
5. Add these DNS records at your domain registrar:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: yourusername.github.io

## File Structure

```
baro.dev/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Interactions and animations
└── README.md           # This file
```

## Technologies Used

- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Lucide Icons

## Contact

- Email: hi@baro.dev
- WhatsApp: +234 816 992 7034

---

© 2025 baro.dev. All rights reserved.
