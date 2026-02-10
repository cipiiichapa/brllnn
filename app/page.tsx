"use client";
import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    // GANTI link di bawah ini dengan link Canva kamu yang panjang tadi
    window.location.href = "https://proposalgrandopeningdorengvsbanjar.my.canva.site/brllnn-gamee";
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#ffffff',
      color: '#333'
    }}>
      <p>Sedang membuka Brillian...</p>
    </div>
  );
}
