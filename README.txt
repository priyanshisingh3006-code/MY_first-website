# Priyanshi Singh - Portfolio Website

## How to Remove .html from URLs

### The .htaccess File Content:
```
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L,QSA]

RewriteCond %{THE_REQUEST} ^[A-Z]{3,}\s([^.]+)\.html [NC]
RewriteRule ^ %1 [R=301,L]
```

### What This Does:
- Removes .html extension from all URLs
- Redirects yoursite.com/about.html to yoursite.com/about
- Works automatically when uploaded to Apache server

### How to Use:

**Option 1: Upload to Web Hosting (Recommended)**
1. Upload ALL files (including .htaccess) to your web host
2. Make sure your host supports Apache with mod_rewrite
3. URLs will automatically work without .html

**Option 2: For Local Testing**
The .htaccess won't work with file:/// protocol. Use a local server:

**Using Python (if installed):**
1. Open Command Prompt in your project folder
2. Run: `python -m http.server 8000`
3. Visit: http://localhost:8000/

**Using Node.js (if installed):**
1. Install: `npm install -g http-server`
2. Run: `http-server`
3. Visit: http://localhost:8080/

**Using VS Code:**
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"

### Deployment Options (Free):

**GitHub Pages:**
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in settings
5. Your site will be live at: yourusername.github.io/repo-name

**Netlify:**
1. Go to netlify.com
2. Drag and drop your project folder
3. Your site goes live instantly

**Vercel:**
1. Go to vercel.com
2. Import your project
3. Deploy with one click

### File Structure:
```
First_project/
├── index.html
├── about.html
├── skills.html
├── contact.html
├── .htaccess
└── README.txt
```

### Current URLs (after deployment):
- Home: yoursite.com/
- About: yoursite.com/about
- Skills: yoursite.com/skills
- Contact: yoursite.com/contact

### Important Notes:
- The .htaccess file is hidden (starts with a dot)
- It only works on Apache servers (most web hosts use Apache)
- For local testing, you MUST use a local server
- GitHub Pages, Netlify, and Vercel handle clean URLs automatically

### Contact Information:
Email: priyanshi.singh30.06@gmail.com
Phone: +91 8588883189

---
Made by Priyanshi Singh
Web Developer | Student | India
