/**
 * App.jsx - Demo aplikasi yang menggunakan PersonalCard Component
 * 
 * Menampilkan berbagai contoh penggunaan PersonalCard dengan props yang berbeda
 */

import PersonalCard from './src/components/PersonalCard/PersonalCard';
import './App.css';

function App() {
  // Data untuk card pertama
  const userData1 = {
    name: "Zein Hasyim Aljufri",
    title: "Frontend Developer",
    bio: "Passionate about building beautiful and functional web applications using React and modern JavaScript.",
    skills: ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
    email: "zeinhasyim111@gmail.com", 
    location: "Medan, Indonesia",
    variant: "standard"
  };

  // Data untuk card kedua
  const userData2 = {
    name: "Sarah Kim",
    title: "Full Stack Developer",
    bio: "Experienced developer with 3+ years building web applications. Love clean code and great design.",
    skills: ["JavaScript", "Python", "Node.js", "React", "PostgreSQL"],
    email: "sarah.kim@example.com",
    location: "Seoul, South Korea",
    variant: "minimal"
  };

  // Data untuk card ketiga
  const userData3 = {
    name: "Maria Garcia",
    title: "UI/UX Designer",
    bio: "Creative designer focusing on user experience and interface design. Specialized in modern web design.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    email: "maria.garcia@example.com",
    location: "Barcelona, Spain",
    variant: "standard"
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Personal Card Component Demo</h1>
        <p className="subtitle">Contoh implementasi reusable React component</p>
      </header>

      <main className="app-main">
        {/* Example 1: Standard variant with all props */}
        <section className="demo-section">
          <h2>Standard Variant - Complete Profile</h2>
          <div className="cards-grid">
            <PersonalCard {...userData1} />
          </div>
        </section>

        {/* Example 2: Minimal variant */}
        <section className="demo-section">
          <h2>Minimal Variant - Compact Profile</h2>
          <div className="cards-grid">
            <PersonalCard {...userData2} />
          </div>
        </section>

        {/* Example 3: Multiple cards */}
        <section className="demo-section">
          <h2>Multiple Cards - Team Showcase</h2>
          <div className="cards-grid multi">
            <PersonalCard {...userData1} />
            <PersonalCard {...userData2} />
            <PersonalCard {...userData3} />
          </div>
        </section>

        {/* Example 4: Default props (no data) */}
        <section className="demo-section">
          <h2>Default Props - Using Component Without Data</h2>
          <div className="cards-grid">
            <PersonalCard />
          </div>
        </section>

        {/* Example 5: Custom variants */}
        <section className="demo-section">
          <h2>Different Variants Side by Side</h2>
          <div className="cards-grid comparison">
            <div className="variant-example">
              <h3>Standard</h3>
              <PersonalCard 
                name="John Developer"
                title="React Developer"
                bio="Building amazing web apps"
                skills={["React", "JavaScript"]}
                email="john@example.com"
                location="USA"
                variant="standard"
              />
            </div>
            <div className="variant-example">
              <h3>Minimal</h3>
              <PersonalCard 
                name="Jane Designer"
                title="UI Designer"
                bio="Creating beautiful interfaces"
                skills={["Figma", "Design"]}
                email="jane@example.com"
                location="Canada"
                variant="minimal"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Feature Documentation */}
      <section className="features-section">
        <h2>Component Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Props-Based Customization</h3>
            <p>Pass different props to customize name, title, bio, skills, contact info, and image.</p>
          </div>
          <div className="feature-card">
            <h3>Two Design Variants</h3>
            <p>Choose between "standard" (full featured) and "minimal" (compact) styles.</p>
          </div>
          <div className="feature-card">
            <h3>Auto-Generated Initials</h3>
            <p>If no image provided, component automatically generates initials from name.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>Fully responsive and works great on mobile and desktop screens.</p>
          </div>
          <div className="feature-card">
            <h3>Dark Mode Support</h3>
            <p>Automatically adapts to system dark mode preferences.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Hover States</h3>
            <p>Smooth animations and hover effects for better user experience.</p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="code-section">
        <h2>How to Use</h2>
        <div className="code-block">
          <h3>Basic Usage:</h3>
          <pre><code>{`import PersonalCard from './PersonalCard';

function App() {
  const userData = {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio here",
    skills: ["Skill1", "Skill2", "Skill3"],
    email: "your@email.com",
    location: "Your Location",
    variant: "standard"  // or "minimal"
  };

  return (
    <PersonalCard {...userData} />
  );
}`}</code></pre>
        </div>

        <div className="code-block">
          <h3>Props Details:</h3>
          <table className="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>string</td>
                <td>"John Doe"</td>
                <td>Full name of the person</td>
              </tr>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>"Developer"</td>
                <td>Job title or profession</td>
              </tr>
              <tr>
                <td>bio</td>
                <td>string</td>
                <td>"A brief description..."</td>
                <td>Short biography</td>
              </tr>
              <tr>
                <td>skills</td>
                <td>array</td>
                <td>["HTML", "CSS", "JS"]</td>
                <td>Array of skill strings</td>
              </tr>
              <tr>
                <td>email</td>
                <td>string</td>
                <td>"john@example.com"</td>
                <td>Email address</td>
              </tr>
              <tr>
                <td>location</td>
                <td>string</td>
                <td>"Earth"</td>
                <td>City/Location</td>
              </tr>
              <tr>
                <td>image</td>
                <td>string</td>
                <td>null</td>
                <td>URL to profile image</td>
              </tr>
              <tr>
                <td>variant</td>
                <td>string</td>
                <td>"standard"</td>
                <td>"standard" or "minimal"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
