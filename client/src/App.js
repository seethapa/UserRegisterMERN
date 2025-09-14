//import './App.css';
import './index.css';

import ContactForm from './components/ContactForm';
function App() {
  return (

     <div className="App">
          <div class="container">
            <div class="column">
              <h1>20+ Years Combined Experience.<br /> Learn From a 20-Year IT Veteran.</h1>
              <br /><br /><br /><br />
              <h1>AWS & DevOps Webinar</h1>
              <div class="cta">
                <h2>Call or Whatsapp Me @
                </h2>
                <h2>+91 90435-70992 </h2>
              </div>
              <p class="sub-text">Limited seats available</p>
            </div>
            <div class="column">
              <img src="images/photo_img.png" alt="Trainer" />
            </div>
          </div>

          <section class="trainer">
            <h1>Meet Your Trainer</h1>
            <div class="trainer-content">
              <ul>
                <li>✔️ 20+ years of hands-on experience in AWS & DevOps</li>
                <li>✔️ Trained over 1,000 professionals globally</li>
                <li>✔️ Worked with Fortune 500 companies and startups alike</li>
                <li>✔️ Certified AWS Solutions Architect & DevOps Engineer</li>
                <li>✔️ Known for simplifying complex cloud concepts</li>
                <li>✔️ 100% student satisfaction with personalized guidance</li>
              </ul>
              <img src="/images/trainer.png" alt="Trainer" />
            </div>
          </section>

          <section class="why-attend">
            <h1>Why Attend</h1>
            <div class="cards">
              <div class="card">💡 Real-World Projects</div>
              <div class="card">🛠 Hands-on AWS Labs</div>
              <div class="card">🚀 Career Growth Focus</div>
            </div>
          </section>

          <section class="webinar">
            <h2>Upcoming Webinar</h2>
            <div class="webinar-content">
              <div class="details">
                <h3>Advanced AWS Cloud Strategies</h3>
               <br /><br />
                <p>Friday, September 26, 2025 | 7:00 PM - 9:00 PM</p>
               <br /><br />
                <div>
                  <div>🔹 Modern cloud architecture</div>
                  <div>🔹 Security best practices</div>
                  <div>🔹 Cost optimization tips</div>
                </div>

              </div>
              <div class="form">
                <h3>Register Now</h3>
 <ContactForm />

              </div>
            </div>
          </section>
<footer>
    <h2>Don't Miss Out — Secure Your Seat Today!</h2>
     <br />
    <div><p>© 2025 samuelasirvatham.com</p>
        <p>Write Us: sammiee2000@gmail.com</p>
    </div>
</footer>
        </div>
  );
}

export default App;
