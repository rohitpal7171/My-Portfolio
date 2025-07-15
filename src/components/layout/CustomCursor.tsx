"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CursorArrow from './CursorArrow';
import CursorHand from './CursorHand';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target instanceof HTMLElement &&
          (e.target.tagName === 'A' ||
            e.target.tagName === 'BUTTON' ||
            e.target.closest('button, a'))) ||
        getComputedStyle(e.target as Element).cursor === 'pointer'
      ) {
        setIsPointer(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (
        (e.target instanceof HTMLElement &&
          (e.target.tagName === 'A' ||
            e.target.tagName === 'BUTTON' ||
            e.target.closest('button, a'))) ||
        getComputedStyle(e.target as Element).cursor === 'pointer'
      ) {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 1200, damping: 40 }}
    >
      <motion.div
        key={isPointer ? 'hand' : 'arrow'}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isPointer ? <CursorHand /> : <CursorArrow />}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
