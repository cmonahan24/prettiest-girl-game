import { useState, useEffect, useRef } from 'react';

const PhotoCard = ({ image, name, isDodging, onSelect, isGirlfriend }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(1); // Track scale for shrinking
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  // Reset position and scale when component mounts (new celebrity)
  useEffect(() => {
    setPosition({ x: 0, y: 0 });
    setScale(1);
  }, []);

  useEffect(() => {
    if (!isDodging) return;

    const handleMouseMove = (e) => {
      if (!cardRef.current || !containerRef.current) return;

      const card = cardRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      
      const cardCenterX = card.left + card.width / 2;
      const cardCenterY = card.top + card.height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const distance = Math.sqrt(
        Math.pow(mouseX - cardCenterX, 2) + Math.pow(mouseY - cardCenterY, 2)
      );

      // If cursor is within 350px, continuously flee
      if (distance < 350) {
        // Calculate direction away from cursor
        const angle = Math.atan2(cardCenterY - mouseY, cardCenterX - mouseX);
        
        // Move in the opposite direction - CONTINUOUSLY
        const speed = 8; // Speed of fleeing
        const newX = position.x + Math.cos(angle) * speed;
        const newY = position.y + Math.sin(angle) * speed;

        // Keep within reasonable bounds but allow more movement
        const maxX = container.width / 2;
        const maxY = container.height / 2;
        
        const clampedX = Math.max(-maxX, Math.min(maxX, newX));
        const clampedY = Math.max(-maxY, Math.min(maxY, newY));

        setPosition({ x: clampedX, y: clampedY });
        
        // Shrink the card as it moves - gets smaller over time
        // Stop at 0 to prevent negative (which causes inversion)
        setScale(prevScale => Math.max(0, prevScale - 0.005));
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isDodging, position]);

  const cardStyle = {
    transform: isDodging 
      ? `translate(${position.x}px, ${position.y}px) scale(${scale})`
      : isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: isDodging ? 'transform 0.05s linear' : 'transform 0.2s ease'
  };

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      <div
        ref={cardRef}
        className={`relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${
          isGirlfriend ? 'ring-4 ring-yellow-300' : ''
        }`}
        style={cardStyle}
        onClick={onSelect}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white text-center font-bold text-lg">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
