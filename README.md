# Portfolio Website 🎨

A modern, responsive portfolio website showcasing game development projects, full-stack applications, and technical skills. Built with React, Vite, and modern web technologies.

**Live Demo:** [https://portfolio-sarthak-bharad.vercel.app/]

---

## ✨ Features

- **🎮 Project Showcase** - Display your projects with detailed descriptions and GitHub links
- **🎨 Dark/Light Mode** - Seamless theme switching with persistent user preference
- **📱 Fully Responsive** - Mobile-first design that looks perfect on all devices (mobile, tablet, desktop)
- **⚡ Smooth Animations** - AOS (Animate On Scroll) effects for engaging page transitions
- **🔥 Modern Tech Stack** - Built with React, Vite, and Tailwind CSS for optimal performance
- **📊 Skills Section** - Interactive proficiency bars showing technical expertise with Font Awesome icons
- **📧 Contact Section** - Easy contact options with email, phone, and social media links
- **🚀 Production Ready** - Optimized build, SEO-friendly, easy deployment

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building interactive components
- **Vite** - Next-generation frontend build tool (ultra-fast dev server)
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Animation library for smooth interactions

### Libraries & Tools
- **AOS (Animate On Scroll)** - Scroll animation library
- **Font Awesome** - Icon library for social links and skills
- **React Router** - Client-side routing (if using multi-page)

### Development
- **ESLint** - Code quality linting
- **Vite Config** - Optimized build configuration
- **Git** - Version control

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SarthakBharad/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

That's it! No environment variables needed. 🎉

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── index.js
│   │   │   ├── PrimaryButton.jsx
│   │   │   └── SecondaryButton.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── index.js
│   ├── assets/
│   │   ├── images/
│   │   └── pdfs/
│   ├── theme/
│   │   └── theme.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## 📋 Sections

### Hero Section
- Eye-catching introduction with your name and headline
- Social media links (Twitter, LinkedIn, GitHub, Email)
- Call-to-action buttons (Download CV, Contact Me)
- Circular profile image with hover effects
- Ambient backlight animation

### About Section
- Personal and professional information
- Brief bio highlighting your expertise
- Key statistics (years in tech, experience, projects)
- Decorative star-shaped gradient element
- Theme-aware styling

### Skills Section
- 8 curated technical skills with proficiency bars
- Font Awesome icons for visual appeal
- Skill descriptions showing project context
- Gradient progress bars with animations
- Hover effects and smooth transitions

### Projects Section
- Showcase of your best work
- Project cards with descriptions and tech stacks
- GitHub repository links
- Live demo links (where applicable)
- Responsive grid layout

### Contact Section
- Contact form for direct messaging
- Multiple contact methods
- Social media integration
- Form validation

### Footer
- Quick navigation links
- Copyright information
- Social media links

---

## 🎨 Customization

### Update Theme Colors
Edit `src/theme/theme.js` to customize your color scheme:
```javascript
export const darkTheme = {
    textPrimary: 'text-white',
    buttonPrimary: 'from-green-500 to-green-400',
    // ... more colors
};

export const lightTheme = {
    textPrimary: 'text-gray-900',
    buttonPrimary: 'from-green-500 to-green-400',
    // ... more colors
};
```

### Add Your Content
1. **Hero Section** - Update `src/components/Hero.jsx` with your info
2. **About Section** - Modify `src/components/About.jsx` 
3. **Skills Section** - Edit skill list in `src/components/Skills.jsx`
4. **Projects Section** - Add projects to `src/components/Projects.jsx`
5. **Contact Section** - Update `src/components/Contact.jsx`
6. **Assets** - Replace images and PDFs in `src/assets/`

### Custom Favicon
1. Create your favicon (512x512 PNG)
2. Convert to ICO format (use https://convertio.co/png-ico/)
3. Place in `public/favicon.ico`
4. Update favicon link in `index.html`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

---

## 🔨 Available Scripts

### Development
```bash
npm run dev
# Starts Vite dev server at localhost:5173
```

### Production Build
```bash
npm run build
# Creates optimized production build in dist/
```

### Preview Build
```bash
npm run preview
# Preview production build locally
```

### Linting
```bash
npm run lint
# Check code quality with ESLint
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to connect repository
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
netlify deploy --prod
```

### Deploy to GitHub Pages
1. Update `vite.config.js`:
```javascript
export default {
  base: '/portfolio/',
  // ... other config
}
```

2. Build and push to GitHub:
```bash
npm run build
git add dist/
git commit -m "build: update production build"
git push origin main
```

3. Enable GitHub Pages in repository settings

---

## 🎯 Performance Optimizations

✅ **Vite** - Lightning-fast build tool and dev server  
✅ **Code Splitting** - Lazy loading of components  
✅ **Image Optimization** - Responsive image loading  
✅ **CSS Minification** - Automatic production optimization  
✅ **Tree Shaking** - Removes unused code  
✅ **SEO Friendly** - Meta tags and semantic HTML  

---

## 📦 Key Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "framer-motion": "^10.x",
  "aos": "^2.x",
  "tailwindcss": "^3.x"
}
```

---

## 🎓 Skills Showcased

- **Game Development** - Godot Engine, 2D game design
- **Full-Stack Web** - React, Node.js, responsive design
- **Languages** - Python, JavaScript, C++, GDScript
- **Tools** - Git, VS Code, Linux, responsive design
- **Frontend** - React, Tailwind CSS, responsive design
- **Embedded Systems** - IoT, C++, Embedded Linux

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔒 Security

- ✅ No sensitive data exposure
- ✅ Clean code without hardcoded secrets
- ✅ HTTPS support for all deployments
- ✅ Content Security Policy ready

---

## 📝 Features Implemented

### UI/UX
- [x] Responsive design (mobile, tablet, desktop)
- [x] Dark/Light theme toggle
- [x] Smooth scroll animations
- [x] Hover effects and transitions
- [x] Loading states

### Functionality
- [x] Smooth navigation
- [x] Contact form with validation
- [x] Social media integration
- [x] Project showcase with descriptions
- [x] Skills section with proficiency levels

### Performance
- [x] Optimized bundle size
- [x] Image optimization
- [x] Code splitting
- [x] Lazy loading
- [x] Cache optimization

### SEO
- [x] Meta tags
- [x] Semantic HTML
- [x] Open Graph tags
- [x] Structured data
- [x] Sitemap

---

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and adapt it for your own use!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Sarthak D. Bharad**

- 📍 Location: Schmalkalden, Germany
- 💼 LinkedIn: [Sarthak Bharad](https://linkedin.com/in/sarthak-bharad)
- 🐙 GitHub: [@SarthakBharad](https://github.com/SarthakBharad)
- 🐦 Twitter: [@maybesarthak](https://x.com/maybesarthak)
- 📧 Email: sarthakbharad3105@gmail.com

---

## 📚 Resources & References

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
- [Font Awesome Icons](https://fontawesome.com/)

---

## 🙏 Acknowledgments

- React team for the excellent UI library
- Vite team for the blazing-fast build tool
- Tailwind CSS for utility-first styling
- All open-source contributors

---

## ⭐ Show Your Support

If you like this portfolio template, please consider:
- ⭐ Starring the repository
- 🔗 Sharing with others
- 💬 Providing feedback
- 🙌 Contributing improvements

---

## 📈 Project Status

- ✅ Portfolio live and updated
- ✅ All features functional
- ⏳ Continuous improvements planned
- 🎯 New projects being added

---

**Last Updated:** February 2026
