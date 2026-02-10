"use client";
import React, { useState } from 'react';

const flashcards = [
  { id: 1, en: "Archipelago", idn: "Kepulauan", hint: "Indonesia is a big archipelago." },
  { id: 2, en: "Hospitality", idn: "Keramahtamahan", hint: "People are very kind." },
  { id: 3, en: "Heritage", idn: "Warisan Budaya", hint: "Batik is our heritage." },
  { id: 4, en: "Teacher", idn: "Guru", hint: "A person who teaches." },
  { id: 5, en: "School", idn: "Sekolah", hint: "A place to learn." }
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f4f8',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ color: '#1a365d', marginBottom: '10px' }}>BRILLIAN.</h1>
      <p style={{ color: '#4a5568', marginBottom: '30px' }}>Interactive Flashcards</p>

      <div 
        onClick={() => setFlip(!flip)}
        style={{
          width: '300px',
          height: '400px',
          perspective: '1000px',
          cursor: 'pointer'
        }}
      >
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: flip ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}>
          {/* Sisi Depan */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <small style={{ color: '#3182ce', fontWeight: 'bold' }}>ENGLISH</small>
            <h2 style={{ fontSize: '2rem', color: '#2d3748' }}>{flashcards[index].en}</h2>
            <p style={{ fontSize: '0.8rem', color: '#a0aec0', marginTop: '20px' }}>Tap to Flip</p>
          </div>

          {/* Sisi Belakang */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: '#3182ce',
            color: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotateY(180deg)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            <small style={{ fontWeight: 'bold', opacity: 0.8 }}>INDONESIA</small>
            <h2 style={{ fontSize: '2rem' }}>{flashcards[index].idn}</h2>
            <p style={{ padding: '0 20px', textAlign: 'center', fontSize: '0.9rem', marginTop: '10px' }}>
              "{flashcards[index].hint}"
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button onClick={(e) => { e.stopPropagation(); setFlip(false); setIndex((index - 1 + flashcards.length) % flashcards.length); }}
          style={{ padding: '10px 20px', borderRadius: '10px', border: 'none', backgroundColor: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
          Back
        </button>
        <span style={{ fontWeight: 'bold', color: '#1a365d' }}>{index + 1} / {flashcards.length}</span>
        <button onClick={(e) => { e.stopPropagation(); setFlip(false); setIndex((index + 1) % flashcards.length); }}
          style={{ padding: '10px 20px', borderRadius: '10px', border: 'none', backgroundColor: '#1a365d', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
          Next
        </button>
      </div>
    </main>
  );
}
