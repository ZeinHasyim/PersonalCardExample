# Personal Card Component 🎴

A reusable, professional React component for displaying user profile cards. Perfect for portfolios, team showcases, or any application that needs to display user information in a beautiful, organized way.

## Features ✨

- **Two Design Variants**: Choose between `standard` (full-featured) or `minimal` (compact) styles
- **Fully Customizable Props**: Pass custom data for name, title, bio, skills, contact info, and image
- **Auto-Generated Initials**: Automatically generates initials if no profile image is provided
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop screens
- **Dark Mode Support**: Automatically adapts to system dark mode preferences
- **Interactive Hover Effects**: Smooth animations and transitions for better UX
- **PropTypes Validation**: Built-in type checking for safer prop usage
- **Accessibility Friendly**: Semantic HTML and proper alt text for images

## Live Demo

The component supports two variants:

### Standard Variant
Displays a professional card with:
- Header background with overlapping avatar
- Name and job title
- Biography/description
- Skills as interactive badges
- Contact information (email & location)

### Minimal Variant
A compact version with:
- Side-by-side avatar and header info
- Name and title
- Bio
- Skills badges
- Perfect for lists or grids

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-card-component.git
cd personal-card-component
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173` (or whatever port Vite assigns)

## Usage

### Basic Example

```jsx
import PersonalCard from './PersonalCard';

function App() {
  return (
    <PersonalCard
      name="John Doe"
      title="Frontend Developer"
      bio="Passionate about building beautiful web applications"
      skills={["React", "JavaScript", "CSS"]}
      email="john@example.com"
      location="San Francisco, CA"
      variant="standard"
    />
  );
}

export default App;
```

### Using with Spread Operator

```jsx
const userData = {
  name: "Jane Smith",
  title: "Full Stack Developer",
  bio: "Experienced in building scalable web applications",
  skills: ["React", "Node.js", "PostgreSQL"],
  email: "jane@example.com",
  location: "New York, NY",
  image: "https://example.com/jane.jpg",
  variant: "standard"
};

<PersonalCard {...userData} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | "John Doe" | Full name of the person |
| `title` | string | "Developer" | Job title or profession |
| `bio` | string | "A brief description..." | Short biography (2-3 sentences) |
| `skills` | array | ["HTML", "CSS", "JavaScript"] | Array of skill strings |
| `email` | string | "john@example.com" | Email address |
| `location` | string | "Earth" | City or location |
| `image` | string | null | URL to profile image (optional) |
| `variant` | string | "standard" | "standard" or "minimal" |

## Component Architecture

### Structure
```
PersonalCard/
├── PersonalCard.jsx       # Main component
├── PersonalCard.css       # Styling
└── App.jsx               # Demo application
└── App.css              # Demo styling
```

### Key Features in Code

**Initials Generation**:
- Automatically extracts first letters from name
- Used as fallback when no image is provided
- Displays initials in a gradient circle

**Props Validation**:
- Uses PropTypes for runtime type checking
- Prevents errors from invalid prop types
- Helpful warnings during development

**Responsive Breakpoints**:
- Mobile: `max-width: 480px`
- Tablet: `480px - 768px`
- Desktop: `768px+`

**Dark Mode**:
- Uses `@media (prefers-color-scheme: dark)`
- Automatically adjusts colors for dark backgrounds
- No additional configuration needed

## Styling Details

### Default Colors
- **Primary Background**: #ffffff
- **Header Gradient**: #4a90e2 → #357abd
- **Text Primary**: #1a1a1a
- **Text Secondary**: #666666
- **Borders**: #e0e0e0

### Spacing (Rem-based)
- Card padding: 1.5rem
- Avatar size (standard): 100px
- Avatar size (minimal): 80px
- Gap between items: 8px - 1.5rem

### Animations
- Hover effect: `translateY(-2px)` with enhanced shadow
- Transition duration: 0.3s ease
- Smooth color transitions on hover

## Customization

### Changing Colors

Edit `PersonalCard.css` and update the color values:

```css
.header-background {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}

.avatar-initials {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Changing Avatar Size

```css
.avatar.large {
  width: 120px;  /* Change from 100px */
  height: 120px;
}

/* Adjust overlap */
.avatar-container {
  margin-top: -60px;  /* Adjust based on new size */
}
```

### Adding More Sections

Add new sections to the component with appropriate styling:

```jsx
<div className="social-section">
  <a href="https://twitter.com">Twitter</a>
  <a href="https://linkedin.com">LinkedIn</a>
</div>
```

## Examples

### Team Showcase

```jsx
const team = [
  {
    name: "Alice Johnson",
    title: "Designer",
    skills: ["Figma", "UI Design"],
    email: "alice@company.com",
    location: "NYC"
  },
  {
    name: "Bob Smith",
    title: "Developer",
    skills: ["React", "Node.js"],
    email: "bob@company.com",
    location: "SF"
  }
];

<div className="team-grid">
  {team.map((member, index) => (
    <PersonalCard key={index} {...member} variant="minimal" />
  ))}
</div>
```

### Dynamic Data from API

```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return <PersonalCard {...user} />;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal re-renders with proper prop management
- CSS-based hover effects (no JavaScript animations)
- Optimized image loading with object-fit
- No external dependencies for core functionality

## Accessibility

- Semantic HTML structure
- Proper alt text for images (required prop)
- Sufficient color contrast ratios
- Keyboard navigable
- Screen reader friendly

## File Size

- Component (JSX): ~2.5 KB
- Styling (CSS): ~4 KB
- Total: ~6.5 KB (minified)

## Learning Outcomes

By studying this component, you'll learn:

✅ How to create reusable React components
✅ Props and PropTypes usage
✅ CSS styling best practices
✅ Responsive design techniques
✅ Dark mode implementation
✅ Conditional rendering
✅ Array methods (map) for rendering lists
✅ CSS Flexbox and Grid layouts
✅ Hover states and animations

## Future Enhancements

Potential features to add:

- [ ] Social media links integration
- [ ] Expandable sections (click to reveal more info)
- [ ] Export as PDF or image
- [ ] Custom color themes as props
- [ ] Animation variants (fade in, slide, etc.)
- [ ] Integration with form libraries
- [ ] QR code generation
- [ ] Print-friendly styling

## Troubleshooting

### Image Not Showing
- Check the image URL is correct and accessible
- Ensure CORS is configured properly if using external images
- Fallback to initials if image fails to load

### Styling Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure CSS file is imported in your component
- Check for CSS conflicts with other stylesheets

### Props Not Updating
- Ensure you're using the correct prop names (case-sensitive)
- Verify data is passed correctly using React DevTools
- Check PropTypes warnings in console

## Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Project Structure for GitHub

```
personal-card-component/
├── src/
│   ├── components/
│   │   └── PersonalCard/
│   │       ├── PersonalCard.jsx
│   │       └── PersonalCard.css
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
├── public/
│   └── index.html
├── README.md
├── package.json
├── .gitignore
└── vite.config.js
```

## Getting Started with Git

### Initial Setup
```bash
# Initialize git in your project
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Personal Card Component"

# Add remote repository
git remote add origin https://github.com/yourusername/personal-card-component.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Subsequent Changes
```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

## Common Git Commands

```bash
# View commit history
git log

# View changes
git diff

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main

# Merge branch
git merge feature-name

# Delete branch
git branch -d feature-name
```

## Resources

- [React Documentation](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [Git Guide](https://git-scm.com)

## Contact & Support

- **Issues**: GitHub Issues tab
- **Discussions**: GitHub Discussions tab
- **Email**: your.email@example.com

---

Made with ❤️ as a learning project

**Happy Coding!** 🚀
