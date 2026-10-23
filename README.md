# Birthday Card for Musfira

A hand-crafted digital birthday card. Plain HTML + CSS + vanilla JS. No frameworks, no build step.

## Customise before sending

Open `index.html` and find:
1. `<!-- EDITABLE MESSAGE BLOCK -->` - change the birthday message paragraphs
2. `<!-- EDITABLE: Replace [Your Name] -->` - replace with your name

## Deploy to GitHub Pages

```
git init
git add .
git commit -m "birthday card"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-musfira.git
git push -u origin main
```
Go to Settings > Pages > Branch: main > Save.

## Deploy to Cloudflare Pages (Recommended - fastest)

Option A - Connect GitHub:
1. Push to GitHub above.
2. dash.cloudflare.com > Workers & Pages > Create > Pages > Connect to Git.
3. Select repo, leave build settings blank, click Deploy.
4. Live at https://birthday-musfira.pages.dev

Option B - Direct upload (no GitHub needed):
1. dash.cloudflare.com > Workers & Pages > Create > Pages > Upload assets.
2. Drop index.html, style.css, script.js into the upload box.
3. Click Deploy site.

## Files
- index.html  - all HTML, SVG embroidery, message, duas
- style.css   - all styles, 3D flip, animations, fabric texture
- script.js   - flip logic, dua carousel, touch swipe, keyboard
- README.md   - this file
- .gitignore

## Fonts (Google Fonts CDN)
- Pinyon Script - birthday title cursive
- Cormorant Garamond - body message text
- Amiri - Arabic duas

Made with love. May Allah answer every dua in this card.
