'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FireAnimation = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', left: '-100px',  bottom: '0' }}>
      {Array(120)
        .fill()
        .map((_, index) => (
          <motion.div
            key={index}
            initial={{ 
                opacity: 1, 
                scale: 1.2, 
                x: `${Math.random() * 300}vw`,
                y: `${Math.random() * 100}vh`,    
            }}
            animate={{ opacity: 0, y: -100, scale: 0.5 }}
            exit={{ opacity: 0, y: -100, scale: 0.5 }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={{
              position: 'absolute',
              width: 250,
              height: 250,
            }}
          >
            <Image src='/images/fireball.png' alt=''fire fill/>
          </motion.div>
        ))}
    </div>
  );
};

export default FireAnimation;