# Personal Portfolio Website

A modern, minimalistic portfolio website designed specifically for internship applications. This portfolio showcases your skills, projects, and professional information in a clean and engaging way.

## Features

- **Modern Design**: Clean, minimalistic interface with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling, hover effects, and animated elements
- **Professional**: Optimized for internship applications and professional networking
- **Fast Loading**: Optimized performance with minimal dependencies

## Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Me**: Personal information and highlights
3. **Skills**: Technical skills organized by category
4. **Projects**: Showcase of your best work
5. **Contact**: Multiple ways to get in touch

## Customization Guide

### Personal Information

#### Update Basic Info
In `index.html`, find and update these sections:

```html
<!-- Update your name -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">Your Name</span></h1>

<!-- Update contact information -->
<a href="mailto:your.email@example.com" class="contact-method">
<a href="tel:+1234567890" class="contact-method">
<a href="https://linkedin.com/in/yourprofile" class="contact-method">
<a href="https://github.com/yourusername" class="contact-method">
```

#### Update About Section
- Modify the description in the about section
- Update education, focus areas, and interests
- Adjust the statistics (projects completed, programming languages, etc.)

### Skills Section
Update the skills in each category:
- **Frontend**: Add/remove technologies you know
- **Backend**: Include your backend skills
- **Tools & Others**: List tools, databases, and other technologies

### Projects Section
Replace the sample projects with your own:
1. Update project titles and descriptions
2. Change the technology tags
3. Add links to your live demos and GitHub repositories
4. Replace the icons with relevant ones

### Colors and Styling
The main color scheme uses a purple gradient. To change colors:

In `styles.css`, look for these color variables:
```css
/* Primary colors */
--primary: #6366f1;
--secondary: #8b5cf6;
--accent: #ec4899;
```

### Adding Your Photo
Replace the profile icon with your photo:
1. Add your photo to the project folder
2. In `index.html`, replace the profile-avatar section:
```html
<div class="profile-avatar">
    <img src="your-photo.jpg" alt="Your Name" />
</div>
```

## File Structure

```
yx_portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Features

- Lazy loading animations
- Optimized CSS animations
- Minimal JavaScript for fast loading
- Responsive images and layouts

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload these files to the repository
3. Go to repository Settings → Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch and "/" root
6. Your portfolio will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly
3. You can connect it to a GitHub repository for automatic updates

### Vercel
1. Import the project from GitHub
2. Deploy with zero configuration
3. Get a custom domain if needed

## Tips for Internship Applications

1. **Keep it updated**: Regularly update your projects and skills
2. **Be specific**: Use concrete examples and numbers where possible
3. **Show growth**: Include a mix of recent and older projects to show progression
4. **Professional email**: Use a professional email address
5. **LinkedIn integration**: Keep your LinkedIn profile updated and linked
6. **Mobile-friendly**: Always test on mobile devices

## Customization Examples

### Adding a New Project
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-mobile-alt"></i>
    </div>
    <div class="project-content">
        <h3>Mobile App</h3>
        <p>Description of your mobile app project.</p>
        <div class="project-tech">
            <span>React Native</span>
            <span>Firebase</span>
            <span>Node.js</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </a>
            <a href="#" class="project-link">
                <i class="fab fa-github"></i>
                Code
            </a>
        </div>
    </div>
</div>
```

### Adding a New Skill Category
```html
<div class="skill-category">
    <h3>Mobile Development</h3>
    <div class="skill-items">
        <span class="skill-tag">React Native</span>
        <span class="skill-tag">Flutter</span>
        <span class="skill-tag">iOS</span>
        <span class="skill-tag">Android</span>
    </div>
</div>
```

## Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure image files are in the same directory
- Use relative paths (e.g., `./image.jpg`)

### Animations not working
- Check if JavaScript is enabled
- Ensure all files are properly linked
- Test in different browsers

### Mobile responsiveness issues
- Test on actual devices
- Use browser developer tools
- Check CSS media queries

## Support

If you need help customizing your portfolio:
1. Check the comments in the code files
2. Use browser developer tools to inspect elements
3. Test changes in small increments
4. Keep backups of working versions

## Future Enhancements

Consider adding these features as you grow:
- Blog section
- Dark mode toggle
- Multilingual support
- Analytics integration
- Contact form backend
- CMS integration

---

**Good luck with your internship applications!** 🚀

Remember to keep your portfolio updated and tailor it for specific opportunities when possible.
