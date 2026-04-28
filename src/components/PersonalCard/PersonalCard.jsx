/**
 * PersonalCard Component
 * 
 * A reusable React component that displays a professional profile card
 * with customizable props for name, bio, skills, and contact info.
 * 
 * Props:
 *   - name (string): Full name of the person
 *   - title (string): Job title or profession
 *   - bio (string): Short biography/description
 *   - skills (array): Array of skill strings
 *   - email (string): Email address
 *   - location (string): Location/city
 *   - image (string): URL to profile image
 *   - variant (string): 'standard' or 'minimal' - card style
 */

import PropTypes from 'prop-types';
import './PersonalCard.css';

const PersonalCard = ({
  name = "John Doe",
  title = "Developer",
  bio = "A brief description about yourself",
  skills = ["HTML", "CSS", "JavaScript"],
  email = "john@example.com",
  location = "Earth",
  image = null,
  variant = "standard"
}) => {
  // Generate initials from name if no image provided
  const getInitials = (fullName) => {
    return fullName
      .split(" ")
      .map(name => name[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = getInitials(name);

  if (variant === "minimal") {
    return (
      <div className="personal-card minimal">
        <div className="card-header-minimal">
          <div className="avatar">
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <div className="avatar-initials">{initials}</div>
            )}
          </div>
          <div className="header-info">
            <h2 className="name">{name}</h2>
            <p className="title">{title}</p>
          </div>
        </div>

        <p className="bio">{bio}</p>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Standard variant (default)
  return (
    <div className="personal-card standard">
      {/* Card Header with gradient background */}
      <div className="card-header">
        <div className="header-background" />
        
        {/* Avatar positioned to overlap header */}
        <div className="avatar-container">
          <div className="avatar large">
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <div className="avatar-initials">{initials}</div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="card-content">
        {/* Basic info */}
        <div className="basic-info">
          <h2 className="name">{name}</h2>
          <p className="title">{title}</p>
          <p className="bio">{bio}</p>
        </div>

        {/* Skills section */}
        {skills && skills.length > 0 && (
          <div className="skills-section">
            <p className="section-label">Skills</p>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact info */}
        <div className="contact-section">
          <div className="contact-item">
            <p className="contact-label">Email</p>
            <p className="contact-value">{email}</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">Location</p>
            <p className="contact-value">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
//untuk memvalidasi data agar tidak bisa menerima format yang salah
PersonalCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  bio: PropTypes.string,
  skills: PropTypes.array,
  email: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  variant: PropTypes.oneOf(["standard", "minimal"])
};

export default PersonalCard;
