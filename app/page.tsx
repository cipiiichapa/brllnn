export default function Home() {
  return (
    <main style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0' }}>
        Welcome to Brillian<span style={{ color: '#3182ce' }}>.</span>
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: '0.7', marginTop: '10px' }}>
        Something amazing is coming soon.
      </p>
    </main>
  );
}
