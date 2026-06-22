import React from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <div className="preloader-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--bg-pure)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999
    }}>
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        style={{ marginBottom: '1.5rem', color: 'var(--accent-red)' }}
      >
        <Camera size={80} strokeWidth={1.5} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, textShadow: '0px 0px 15px var(--accent-red-glow)' }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          fontWeight: 900,
          letterSpacing: '0.15em',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          margin: 0
        }}
      >
        19Production
      </motion.h1>
    </div>
  );
}
