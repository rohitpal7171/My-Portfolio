"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        setIsHovering(true);
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
       if ((e.target as HTMLElement).closest('a, button')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);


    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  const variants = {
    default: {
      x: position.x,
      y: position.y,
    },
    hover: {
      x: position.x,
      y: position.y,
      scale: 1.5,
      opacity: 0.9,
    },
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
