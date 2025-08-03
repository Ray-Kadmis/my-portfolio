import React from 'react';

// TestCard component that uses the Card's 3D tilt effect with testimonial layout
const TestCard = ({ name, role, content, avatar, rating = 5, newClass }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const percentX = deltaX / centerX;
    const percentY = deltaY / centerY;
    const rotateX = percentY * 15; // Tilt angle for X-axis
    const rotateY = percentX * -15; // Tilt angle for Y-axis

    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`;
    card.style.boxShadow = `${-percentX * 50}px ${-percentY * 50}px 60px rgb(10, 221, 73)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    card.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.2)`;
  };

  return (
    <div
      className={`test-card ${newClass || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '400px',
        height: '200px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'white',
        transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',

        
      }}
    >
      {/* Review section */}
      <div style={{
        padding: '16px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{
          margin: 0,
          fontSize: '14px',
          lineHeight: '1.4',
          textAlign: 'center',
          color: '#333',
          fontStyle: 'italic'
        }}>
          "{content}"
        </p>
      </div>
      
      {/* 5 Stars section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2px',
        padding: "0px"
    
      }}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: '18px',
              color: i < rating ? '#FFD700' : '#ddd'
            }}
          >
            ★
          </span>
        ))}
      </div>
      
      {/* Bottom section with profile info */}
      <div style={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        margin:"0px 0px 10px 0px"
      }}>
        {/* Profile picture circle */}
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '12px',
          flexShrink: 0,
          padding:"0px 0px 0px 0px"
        }}>
          <img
            src={avatar}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* Text content */}
        <div style={{ flex: 1 }}>
          {/* Name */}
          <div style={{
            color: '#333',
            padding: '4px 8px',
            borderRadius: '4px',
            marginBottom: '4px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            {name}
          </div>
          
          {/* Job title */}
          <div style={{
            color: '#666',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '12px'
          }}>
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};


export default TestCard;