import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <div className="preloader-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999
    }}>
      {/* Original 3D Camcorder Model */}
      <motion.div
        initial={{ opacity: 0, scale: 0.35 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        <iframe
          title="Professional Camera"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope; magnetometer; picture-in-picture"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/c1099addc1184daf86f4d6eead4ef330/embed?autostart=1&transparent=1&autospin=0.5&ui_theme=dark&ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0"
          className="preloader-iframe"
        ></iframe>
      </motion.div>

      {/* Overlay Title text at the bottom */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, textShadow: '0px 0px 15px var(--accent-red-glow)' }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="preloader-title"
        style={{
          position: 'absolute',
          bottom: '12%',
          zIndex: 2
        }}
      >
        19Production
      </motion.h1>
    </div>
  );
}
