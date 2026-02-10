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
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem' }}>BRILLIAN.</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Website sedang diperbarui...</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '15px 30px', 
        backgroundColor: '#3182ce', 
        borderRadius: '10px',
        fontWeight: 'bold' 
      }}>
        Berhasil Update!
      </div>
    </div>
  );
}
