export default function Home() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a365d',
      color: 'white',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', margin: '0' }}>BRILLIAN.</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8, marginTop: '10px' }}>
        Pembaruan Berhasil!
      </p>
      <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>
        Jika masih melihat layar hitam, silakan tekan <b>Ctrl + F5</b>.
      </p>
    </div>
  );
}
