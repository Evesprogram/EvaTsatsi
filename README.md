# Eva Tsatsi - Portfolio Website

A simple, modern portfolio website built with **vanilla HTML, CSS, and JavaScript** (no frameworks, no TypeScript).

## 📁 Folder Structure

```
eva-portfolio-vanilla/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling (light/dark mode included)
├── js/
│   └── script.js       # All JavaScript functionality
├── assets/
│   └── eva-photo.jpg   # Your professional photo
└── README.md           # This file
```

## 🚀 How to Use

### Option 1: Open Directly in Browser
Simply open `index.html` in your web browser. That's it! No installation needed.

```bash
# On Mac/Linux
open index.html

# On Windows
start index.html
```

### Option 2: Use a Local Server (Recommended)
For better performance and to avoid CORS issues with images:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## ✨ Features

- **Light/Dark Mode Toggle** - Click the theme button in the navigation to switch between light and dark modes
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Project Filtering** - Filter projects by category (All, Desktop, Web, Backend, Analytics)
- **Smooth Animations** - Fade-in effects and hover animations throughout
- **Skill Icons** - Visual icons for each skill using Font Awesome
- **Experience Timeline** - Beautiful timeline showing your work experience
- **Smooth Scrolling** - Click navigation links for smooth scroll to sections

## 🎨 Customization

### Change Colors
Edit the CSS variables at the top of `css/styles.css`:

```css
:root {
    --primary-color: #0891b2;      /* Main teal color */
    --secondary-color: #06b6d4;    /* Lighter teal */
    --dark-bg: #0f172a;            /* Dark mode background */
    --light-bg: #f8fafc;           /* Light mode background */
    /* ... more colors ... */
}
```

### Update Projects
Edit the `projectsData` array in `js/script.js` to add, remove, or modify projects.

### Update Experience
Edit the `experienceData` array in `js/script.js` to update your work experience.

### Update Your Photo
Replace `assets/eva-photo.jpg` with your own photo. Make sure to keep the same filename or update the path in `index.html`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 Links to Update

In `index.html`, update these links with your actual information:

```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/eva-tsatsi-7475011a2" target="_blank">

<!-- GitHub -->
<a href="https://github.com/Evesprogram" target="_blank">

<!-- Email -->
<a href="mailto:evatsatsi18@gmail.com">
```

## 📝 Project Images

The portfolio references project images from cloud storage. If you want to use local images instead:

1. Save your project screenshots in the `assets/` folder
2. Update the image paths in `js/script.js` in the `projectsData` array:

```javascript
image: "assets/your-project-image.png"  // Instead of the cloud URL
```

## 🎯 Tips for Best Results

1. **Use good quality images** - Clear, well-lit project screenshots look professional
2. **Keep descriptions short** - 1-2 sentences per project
3. **Update regularly** - Add new projects as you complete them
4. **Test on mobile** - Make sure everything looks good on your phone
5. **Share your portfolio** - Deploy it to GitHub Pages, Netlify, or Vercel for free

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository named `eva-portfolio-vanilla`
2. Push this folder to the repository
3. Go to Settings > Pages and enable GitHub Pages
4. Your site will be live at `https://yourusername.github.io/eva-portfolio-vanilla`

### Netlify (Free)
1. Drag and drop this folder to [netlify.com](https://netlify.com)
2. Your site will be live instantly with a custom domain option

### Vercel (Free)
1. Push to GitHub
2. Connect your repository to [vercel.com](https://vercel.com)
3. Deploy with one click

## 💡 What You Learned

This portfolio demonstrates:
- **HTML** - Semantic structure and accessibility
- **CSS** - Modern styling, flexbox, grid, animations, and responsive design
- **JavaScript** - DOM manipulation, event listeners, local storage, and dynamic rendering
- **Theme System** - Light/dark mode implementation with localStorage
- **Responsive Design** - Mobile-first approach with media queries

## 📧 Contact

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Made with ❤️ by Eva Tsatsi**
