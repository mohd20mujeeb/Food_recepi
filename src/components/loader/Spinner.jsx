import React from 'react';

const Spinner = () => (
    <div style={styles.spinner}>
      <div style={{ ...styles.bounce, ...styles.bounce1 }}></div>
      <div style={{ ...styles.bounce, ...styles.bounce2 }}></div>
    </div>
  );
  
  const styles = {
    spinner: {
      width: '40px',
      height: '40px',
      position: 'relative',
    },
    bounce: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: '#333',
      opacity: 0.6,
      position: 'absolute',
      top: 0,
      left: 0,
      animation: 'bounce 2s infinite ease-in-out',
    },
    bounce1: {
      animationDelay: '0s',
    },
    bounce2: {
      animationDelay: '-1s',
    },
    keyframes: `
      @keyframes bounce {
        0%, 100% { transform: scale(0); }
        50% { transform: scale(1); }
      }
    `,
  };
  
  // Adding keyframes to the document
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(styles.keyframes, styleSheet.cssRules.length);
  

export default Spinner;
