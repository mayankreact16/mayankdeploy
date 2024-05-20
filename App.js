import React from 'react';
import './App.css';

function App() {
  return (
    <div className="replica">
      <header>
        <div className="container">
          <div className="logo">
            <img src="/logo.png.png" alt="Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="#features"></a></li>
              <li><a href="#gallery"></a></li>
              <li><a href="#testimonials"></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div className="container">
          <h1>Attract Your Visitor</h1>
          <p><h2>Attention With Colors</h2></p>
          <button>MOTION ART EFFECT</button>
        </div>
      </section>

      <section id="features">
        <div className="container2">
          <div className="feature-card">
            <img src="/all.png" alt="All" />
            <h6>4.5 Scores 9 Reviews</h6>
            <img src="/card3.png" alt="Card 3" />
          </div>
          <div className="feature-card">
            <img src="/all.png" alt="All" />
            <h6>4.5 Scores 9 Reviews</h6>
            <img src="/card1.png" alt="Card 1" />
          </div>
          <div className="feature-card">
            <img src="/all.png" alt="All" />
            <h6>4.5 Scores 9 Reviews</h6>
            <img src="/card2.png" alt="Card 2" />
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <h1>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
          <img src="/magic.png" alt="Magic Wand" />
          <h2>Apply On Any Section Or Enable For Whole Page</h2>
          <div className="image-gallery">
            <h2>Apply On Section</h2>
            <img src="/down1.png" alt="Apply On Section" />
            <h2>Apply On Page</h2>
            <img src="/down2.png" alt="Apply On Page" />
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <h2>Supported by All Popular Browsers</h2>
          <div className="testimonial-card">
            <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            <img src="/browser.png" alt="Browsers" />
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <h1>An All-Round Plugin With Powerful Features</h1>
          <div className="footer-features">
            <div className="feature">
              <img src="/1.png" alt="Light Weight" />
              <h3>Light Weight</h3>
              <p>Motion Art for Elementor is designed to be lightweight.</p>
            </div>
            <div className="feature">
              <img src="/2.png" alt="Responsive" />
              <h3>100% Responsive</h3>
              <p>Create a consistent visual experience across all devices.</p>
            </div>
            <div className="feature">
              <img src="/3.png" alt="User Friendly" />
              <h3>User Friendly Interface</h3>
              <p>Ensure a smooth experience for both applicants and administrators.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

