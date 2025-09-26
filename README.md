# 🚀 Portfolio Website

A modern, interactive portfolio website built with React.js featuring stunning 3D animations, interactive project showcases, and a responsive design.

## ✨ Features

- **🌟 Interactive 3D Globe**: Animated globe using Cobe library with smooth interactions
- **🎨 3D Project Carousel**: Cylindrical scroll component showcasing projects with 3D rotation
- **✨ Animated Background**: Starry night sky with particle effects
- **📱 Responsive Design**: Fully responsive across all devices
- **🎭 Smooth Animations**: Framer Motion animations throughout the site
- **🎯 Modern UI/UX**: Clean, professional design with gradient effects
- **⚡ Fast Performance**: Optimized for speed and smooth interactions

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **Three.js** - 3D graphics library
- **Cobe** - Interactive globe component
- **React Spring** - Spring physics animations

### Development Tools
- **Create React App** - React development environment
- **PostCSS** - CSS post-processor
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avinash-M2003/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── images/           # Project images and assets
├── src/
│   ├── components/
│   │   ├── HeroBanner.js         # Landing section with typing animation
│   │   ├── ProjectCylinderScroll.js  # 3D project carousel
│   │   ├── Sections.js           # Education, Skills, Experience sections
│   │   ├── StarryBackground.js   # Animated background
│   │   ├── TypingAnimation.js   # Text typing effect
│   │   └── VercelGlobe.js       # Interactive 3D globe
│   ├── data/
│   │   └── portfolioData.js     # Centralized data management
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Components Overview

### HeroBanner
- Animated landing section with typing effect
- Professional introduction and contact information
- Smooth scroll navigation

### ProjectCylinderScroll
- Interactive 3D cylindrical project showcase
- Horizontal scroll/touch controls
- Dynamic project information display
- Responsive design for all screen sizes

### Sections
- Education background
- Technical skills categorization
- Work experience timeline
- Certifications and achievements

### StarryBackground
- Animated starry night sky
- Particle system for visual appeal
- Performance optimized

### VercelGlobe
- Interactive 3D globe using Cobe
- Smooth rotation and interaction
- Responsive sizing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Deploy: `npm run deploy`

### Deploy to Netlify/Vercel
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `build`

## 🎯 Key Features Explained

### 3D Project Carousel
The cylindrical scroll component creates an immersive 3D experience:
- **Rotation Controls**: Mouse wheel, arrow keys, touch gestures
- **Dynamic Content**: Real-time project information updates
- **Smooth Animations**: Framer Motion for fluid transitions
- **Responsive Design**: Adapts to different screen sizes

### Interactive Globe
The Vercel-style globe provides visual appeal:
- **Cobe Integration**: High-performance WebGL rendering
- **User Interaction**: Drag to rotate, smooth animations
- **Responsive**: Scales appropriately on all devices

### Modern Animations
- **Framer Motion**: Page transitions and component animations
- **CSS Animations**: Hover effects and micro-interactions
- **Spring Physics**: Natural feeling animations

## 📱 Responsive Design

The portfolio is fully responsive with:
- **Mobile-first approach**
- **Flexible grid layouts**
- **Adaptive typography**
- **Touch-friendly interactions**
- **Optimized images**

## 🎨 Customization

### Adding New Projects
Edit `src/data/portfolioData.js`:
```javascript
export const projects = {
  items: [
    {
      name: "Your Project Name",
      description: "Project description",
      image: "/project-image.jpg",
      links: {
        github: "https://github.com/your-repo",
        live: "https://your-live-site.com"
      },
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["Feature 1", "Feature 2", "Feature 3"]
    }
  ]
};
```

### Styling
- **Tailwind CSS**: Utility classes for rapid styling
- **Custom CSS**: Additional styles in `src/index.css`
- **Component Styles**: Inline styles for dynamic content

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- **ESLint**: Configured for React best practices
- **Prettier**: Code formatting (recommended)
- **Component Structure**: Functional components with hooks

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**MALIPIREDDY AVINASH**
- 📧 Email: avinashece.2025@gmail.com
- 💼 LinkedIn: [Veera Venkata Avinash Malipireddy](https://www.linkedin.com/in/veera-venkata-avinash-malipireddy-0aa34026b)
- 🐙 GitHub: [Avinash-M2003](https://github.com/Avinash-M2003)

## 🙏 Acknowledgments

- **Cobe** - For the amazing 3D globe component
- **Framer Motion** - For smooth animations
- **Tailwind CSS** - For rapid UI development
- **React Community** - For excellent documentation and support

---

⭐ **Star this repository if you found it helpful!**