# Personal Card Component - Feature Documentation

## 📋 Table of Contents
1. [Core Features](#core-features)
2. [Design Variants](#design-variants)
3. [Props Details](#props-details)
4. [Customization Guide](#customization-guide)
5. [Code Examples](#code-examples)
6. [Learning Concepts](#learning-concepts)

---

## Core Features

### 1. **Props-Based Customization** 🎨
Component menerima berbagai props untuk customize tampilan dan data yang ditampilkan.

**Apa itu Props?**
Props adalah cara untuk pass data dari parent component ke child component. Seperti function parameters, tapi untuk React components.

```jsx
// Props adalah seperti ini:
<PersonalCard name="Ahmad" title="Developer" />

// Sama dengan function call:
PersonalCard({ name: "Ahmad", title: "Developer" })
```

**Keuntungan:**
- ✅ Reusable untuk berbagai data
- ✅ Fleksibel dan scalable
- ✅ Data-driven approach

---

### 2. **Two Design Variants** 🎭
Component memiliki 2 design style yang berbeda:

#### Standard Variant
Digunakan untuk: Showcasing complete profiles, Portfolio displays, Team pages
Menampilkan:
- ✓ Header background dengan gradient
- ✓ Overlapping avatar
- ✓ Name & title
- ✓ Bio description
- ✓ Skills section
- ✓ Contact information (email & location)

```jsx
<PersonalCard 
  name="Ahmad"
  variant="standard"  // ← Set variant
/>
```

#### Minimal Variant
Digunakan untuk: List views, Compact layouts, Quick profiles
Menampilkan:
- ✓ Side-by-side avatar & info
- ✓ Name & title
- ✓ Bio
- ✓ Skills (compact)
- Lebih compact, perfect untuk grids

```jsx
<PersonalCard 
  name="Ahmad"
  variant="minimal"   // ← Set variant
/>
```

**Kapan Menggunakan Mana?**
```
Use "standard" when:
├─ Showing single profile
├─ Have space to display
└─ Want full information

Use "minimal" when:
├─ Showing many cards (team)
├─ Space is limited
└─ Quick overview is enough
```

---

### 3. **Auto-Generated Initials** 👤

Fitur ini automatically generate initials dari nama jika tidak ada image.

**Cara Kerjanya:**
```jsx
// Input: "Ahmad Dimas"
// Output: "AD"

// Input: "John Smith Johnson"
// Output: "JS" (takes first 2)

// Implementation:
const getInitials = (fullName) => {
  return fullName
    .split(" ")                    // Split: ["Ahmad", "Dimas"]
    .map(name => name[0])          // Map: ["A", "D"]
    .join("")                       // Join: "AD"
    .toUpperCase()                 // Uppercase: "AD"
    .slice(0, 2);                  // Take first 2: "AD"
};
```

**Keuntungan:**
- 📌 Fallback jika image tidak available
- 🎨 Automatically matches initials dengan gradient
- 🔄 Dynamic berdasarkan nama

---

### 4. **Responsive Design** 📱

Component automatically adapt ke berbagai screen sizes.

**Breakpoints:**
```css
/* Desktop (default) */
/* Tablet and below */
@media (max-width: 768px) {
  .cards-grid.multi {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .personal-card {
    max-width: 100%;
  }
  
  .contact-section {
    grid-template-columns: 1fr;  /* Stack vertically */
  }
}
```

**Testing Responsiveness:**
```
1. Open browser DevTools (F12)
2. Click device toggle (mobile icon)
3. Select different devices
4. Component should look good on all sizes
```

---

### 5. **Dark Mode Support** 🌙

Otomatis adapt ke dark mode preferences.

**Cara Kerjanya:**
```css
/* Light mode (default) */
.personal-card {
  background: #fff;
  color: #333;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .personal-card {
    background: #1e1e1e;
    color: #e0e0e0;
  }
}
```

**Testing Dark Mode:**
1. System Settings → Display → Dark Mode
2. Atau di browser: DevTools → ... → More Tools → Rendering → Emulate CSS media feature prefers-color-scheme

---

### 6. **Interactive Hover Effects** ✨

Smooth animations ketika user hover over card.

**Hover Effects:**
```css
.personal-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  /* Moves card up 2px when hovered */
}

.skill-tag:hover {
  background: #e8e8e8;
  border-color: #d0d0d0;
}
```

**Why Important:**
- ✅ Visual feedback to user
- ✅ Better UX
- ✅ Professional feel
- ✅ Indicates interactivity

---

### 7. **PropTypes Validation** ✔️

Built-in type checking untuk props.

**Purpose:**
```jsx
import PropTypes from 'prop-types';

PersonalCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  skills: PropTypes.array,
  variant: PropTypes.oneOf(["standard", "minimal"])
};
```

**Benefit:**
- 🔍 Catch errors early
- 📖 Auto-documentation
- 🚨 Console warnings untuk invalid props
- 👨‍💻 Better developer experience

**Example Error Message:**
```
Warning: Failed prop type: Invalid prop `variant` 
of value `invalid` supplied to `PersonalCard`, 
expected one of ["standard", "minimal"].
```

---

## Design Variants - Deep Dive

### Standard Variant Structure

```
┌─────────────────────────────────┐
│  Header Background (Gradient)   │ height: 120px
├─────────────────────────────────┤
│                                 │
│    Avatar                       │ width/height: 100px
│   (Overlapping)                 │
│                                 │
├─────────────────────────────────┤
│                                 │
│ Name (h2)                       │
│ Title (p)                       │ Main Content
│ Bio (p)                         │
│                                 │
│ Skills:                         │
│ ┌──────┐ ┌──────┐ ┌──────┐    │
│ │React │ │CSS   │ │HTML  │    │
│ └──────┘ └──────┘ └──────┘    │
│                                 │
├─────────────────────────────────┤
│ Email: ahmad@example.com        │
│ Location: Jakarta               │ Contact Info
└─────────────────────────────────┘
```

### Minimal Variant Structure

```
┌──────────────────────────────┐
│ Avatar   │ Name              │
│ (80px)   │ Title             │ Header
├──────────┤──────────────────┤
│ Bio description text         │
├──────────────────────────────┤
│ Skills:                      │
│ ┌──────┐ ┌──────┐ ┌──────┐ │
│ │React │ │CSS   │ │HTML  │ │
│ └──────┘ └──────┘ └──────┘ │
└──────────────────────────────┘
```

---

## Props Details

### name
- **Type**: `string`
- **Default**: `"John Doe"`
- **Description**: Full name of the person
- **Usage**: 
  ```jsx
  <PersonalCard name="Ahmad Dimas" />
  ```
- **Note**: Used to generate initials if no image provided

### title
- **Type**: `string`
- **Default**: `"Developer"`
- **Description**: Job title or profession
- **Usage**:
  ```jsx
  <PersonalCard title="Frontend Developer" />
  ```

### bio
- **Type**: `string`
- **Default**: `"A brief description about yourself"`
- **Description**: Short biography (2-3 sentences recommended)
- **Usage**:
  ```jsx
  <PersonalCard bio="Passionate about building web apps" />
  ```

### skills
- **Type**: `array` of strings
- **Default**: `["HTML", "CSS", "JavaScript"]`
- **Description**: Array of skill strings
- **Usage**:
  ```jsx
  <PersonalCard skills={["React", "JavaScript", "CSS"]} />
  ```
- **Note**: Automatically renders as badges

### email
- **Type**: `string`
- **Default**: `"john@example.com"`
- **Description**: Email address
- **Usage**:
  ```jsx
  <PersonalCard email="ahmad@example.com" />
  ```

### location
- **Type**: `string`
- **Default**: `"Earth"`
- **Description**: City or location
- **Usage**:
  ```jsx
  <PersonalCard location="Jakarta, Indonesia" />
  ```

### image
- **Type**: `string` (URL) or `null`
- **Default**: `null`
- **Description**: URL to profile image
- **Usage**:
  ```jsx
  <PersonalCard image="https://example.com/avatar.jpg" />
  ```
- **Note**: If null, initials will be shown instead

### variant
- **Type**: `string`
- **Default**: `"standard"`
- **Valid Values**: `"standard"` or `"minimal"`
- **Description**: Which design variant to use
- **Usage**:
  ```jsx
  <PersonalCard variant="minimal" />
  ```

---

## Customization Guide

### 1. Changing Colors

Edit PersonalCard.css:

```css
/* Change header gradient */
.header-background {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}

/* Update initials background */
.avatar-initials {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}

/* Change skill tag colors */
.skill-tag {
  background: #YOUR_COLOR;
  color: #YOUR_TEXT_COLOR;
  border-color: #YOUR_BORDER_COLOR;
}
```

**Popular Color Combinations:**
```css
/* Purple Theme */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Green Theme */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Blue Theme */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

### 2. Changing Font Sizes

```css
.name {
  font-size: 20px;  /* Change this */
}

.title {
  font-size: 13px;  /* Or this */
}

.bio {
  font-size: 14px;
}
```

### 3. Changing Avatar Size

```css
.avatar.large {
  width: 120px;    /* Change size */
  height: 120px;
  margin-top: -60px;  /* Adjust overlap */
}
```

### 4. Adding Social Links

Add to PersonalCard.jsx:

```jsx
<div className="social-section">
  <a href={`https://twitter.com/${twitterHandle}`}>Twitter</a>
  <a href={`https://linkedin.com/in/${linkedinProfile}`}>LinkedIn</a>
  <a href={`https://github.com/${githubUsername}`}>GitHub</a>
</div>
```

Add CSS:
```css
.social-section {
  display: flex;
  gap: 1rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
  margin-top: 1rem;
}

.social-section a {
  color: #4a90e2;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
}
```

---

## Code Examples

### Example 1: Basic Usage
```jsx
<PersonalCard
  name="Ahmad Dimas"
  title="Frontend Developer"
  bio="Building beautiful web applications"
  skills={["React", "JavaScript", "CSS"]}
  email="ahmad@example.com"
  location="Jakarta"
/>
```

### Example 2: With Image
```jsx
<PersonalCard
  name="Sarah Kim"
  title="UI Designer"
  bio="Creating amazing user experiences"
  skills={["Figma", "Design", "Prototyping"]}
  email="sarah@example.com"
  location="Seoul"
  image="https://example.com/sarah.jpg"
/>
```

### Example 3: Minimal Variant
```jsx
<PersonalCard
  name="John Developer"
  title="Full Stack Engineer"
  bio="10+ years experience"
  skills={["Node.js", "React", "PostgreSQL"]}
  variant="minimal"
/>
```

### Example 4: Multiple Cards (Team)
```jsx
const teamMembers = [
  {
    name: "Alice",
    title: "Designer",
    skills: ["Figma", "Design"],
    email: "alice@company.com"
  },
  {
    name: "Bob",
    title: "Developer",
    skills: ["React", "Node.js"],
    email: "bob@company.com"
  },
  {
    name: "Charlie",
    title: "DevOps",
    skills: ["Docker", "Kubernetes"],
    email: "charlie@company.com"
  }
];

function TeamPage() {
  return (
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <PersonalCard key={index} {...member} variant="minimal" />
      ))}
    </div>
  );
}
```

### Example 5: Dynamic Data from API
```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading profile...</p>;
  if (!user) return <p>User not found</p>;

  return <PersonalCard {...user} />;
}
```

---

## Learning Concepts

### 1. React Components
**Definisi**: Reusable pieces of UI

```jsx
// Component adalah function yang return JSX
const PersonalCard = (props) => {
  return (
    <div className="personal-card">
      {/* JSX content */}
    </div>
  );
};
```

**Benefit:**
- ✅ Reusable
- ✅ Maintainable
- ✅ Testable

### 2. Props (Properties)
**Definisi**: Way to pass data to components

```jsx
// Parent passes props
<PersonalCard name="Ahmad" />

// Child receives props
const PersonalCard = (props) => {
  console.log(props.name); // "Ahmad"
};

// Or with destructuring
const PersonalCard = ({ name, title }) => {
  // Can use name and title directly
};
```

### 3. Props Validation with PropTypes
**Purpose**: Type checking at runtime

```jsx
import PropTypes from 'prop-types';

PersonalCard.propTypes = {
  name: PropTypes.string,
  skills: PropTypes.array,
  variant: PropTypes.oneOf(["standard", "minimal"])
};
```

### 4. Conditional Rendering
**Example in component:**
```jsx
// Show different variant based on prop
if (variant === "minimal") {
  return <div className="minimal">{/* content */}</div>;
}

return <div className="standard">{/* content */}</div>;
```

### 5. Array Methods
**Used in component:**
```jsx
// map() - transform array items
skills.map((skill, index) => (
  <span key={index} className="skill-tag">{skill}</span>
))

// join() - combine array items
fullName.split(" ").map(n => n[0]).join("")
```

### 6. CSS Flexbox & Grid
**Used for layouts:**
```css
/* Flex for horizontal alignment */
.card-header-minimal {
  display: flex;
  gap: 1rem;
}

/* Grid for responsive columns */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
```

### 7. Media Queries
**Responsive design:**
```css
/* Mobile first approach */
@media (min-width: 768px) {
  /* Tablet and up */
}

@media (min-width: 1024px) {
  /* Desktop */
}
```

### 8. Dark Mode Detection
```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}
```

---

## Summary of Features

| Feature | Purpose | Benefit |
|---------|---------|---------|
| Props-Based | Customize data | Reusable |
| 2 Variants | Different layouts | Flexibility |
| Auto Initials | Fallback image | Professional look |
| Responsive | Mobile-friendly | Works everywhere |
| Dark Mode | System preference | Better UX |
| Hover Effects | Visual feedback | Interactive feel |
| PropTypes | Type validation | Error prevention |

---

## Next Steps

1. **Implement the component**: Copy files dan setup project
2. **Customize**: Change colors, fonts, styles
3. **Test**: Try different props dan variants
4. **Extend**: Add more features (social links, etc.)
5. **Deploy**: Push to GitHub dan showcase!

Happy learning! 🎓
