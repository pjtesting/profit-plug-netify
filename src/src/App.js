import React from "react";

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'black', color: 'white', fontFamily: 'sans-serif', textAlign: 'center', padding: '40px' }}>
      <h1>Start Making Money Online in 7 Days</h1>
      <p>No Experience. No Tech Skills. Just Real Results.</p>
      <div style={{ maxWidth: '500px', margin: '20px auto' }}>
        <video controls style={{ width: '100%', borderRadius: '12px' }}>
          <source src="https://cdn.whop.com/media/20250711_1055_Earn%20from%20Home_simple_compose_01jzxa0v42fc59p5r51gakc3ty.mp4" type="video/mp4" />
        </video>
      </div>
      <a href="https://whop.com/profit-plug-join?a=pjbashal" style={{ padding: '12px 24px', background: '#facc15', color: 'black', fontWeight: 'bold', borderRadius: '8px', textDecoration: 'none' }}>
        Join Now
      </a>
    </div>
  );
}
