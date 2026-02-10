"use client";
import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    // GANTI link di bawah ini dengan link website Canva kamu
    window.location.href = "https://brllnn-site.my.canva.site";
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8f9fa'
    }}>
      <p>Memindahkan kamu ke Brillian...</p>
    </div>
  );
}
