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
              <div class="card">💡Real-World Projects</div>
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
                <p>Every Wednesday | 7:00 PM - 9:00 PM</p>
               <br /><br />
                <div>
                  <div>🔹 Modern Cloud Architecture</div>
                  <div>🔹 Security Best Practices</div>
                  <div>🔹 Cost Optimization Tips</div>
                </div>

              </div>
            <div>
  <a href="https://wa.me/919043570992" target="_blank" className="whatsapp-link">
    💬 Chat on WhatsApp
  </a>
  <br />
  <a href="tel:+919043570992" className="call-link">
    📞 Call Now
  </a>
</div>
              
 
             
              {/* <div class="form">
                <h3>Register Now</h3>
 <ContactForm />

              </div> */}
            </div>
            <div></div>
          </section>
          <section  class="timeline-panel">
     

   <h2>Work Experience Overview</h2>

  <div class="timeline">

    <div class="timeline-item left">
      <div class="timeline-content">
        <div class="timeline-date">June 2020 – December 2024</div>
        <div class="timeline-title">Fiserv India Private Limited</div>
        <div class="timeline-role">AWS Cloud and DevOps Architect</div>
      </div>
    </div>

    <div class="timeline-item right">
      <div class="timeline-content">
        <div class="timeline-date">August 2018 – June 2020</div>
        <div class="timeline-title">Photon</div>
        <div class="timeline-role">AWS Cloud and DevOps Architect</div>
      </div>
    </div>

    <div class="timeline-item left">
      <div class="timeline-content">
        <div class="timeline-date">March 2015 – June 2017</div>
        <div class="timeline-title">Prodapt Solution</div>
        <div class="timeline-role">Senior Technical Lead</div>
      </div>
    </div>

    <div class="timeline-item right">
      <div class="timeline-content">
        <div class="timeline-date">March 2013 – February 2015</div>
        <div class="timeline-title">Visteon Technical Services</div>
        <div class="timeline-role">IT Ops Lead</div>
      </div>
    </div>

    <div class="timeline-item left">
      <div class="timeline-content">
        <div class="timeline-date">November 2011 – February 2013</div>
        <div class="timeline-title">Wipro Infotech</div>
        <div class="timeline-role">Senior Engineer</div>
      </div>
    </div>

    <div class="timeline-item right">
      <div class="timeline-content">
        <div class="timeline-date">March 2011 – October 2011</div>
        <div class="timeline-title">Sansbound Solutions</div>
        <div class="timeline-role">IT Consultant</div>
      </div>
    </div>

    <div class="timeline-item left">
      <div class="timeline-content">
        <div class="timeline-date">April 2005 – November 2010</div>
        <div class="timeline-title">CSS</div>
        <div class="timeline-role">Team Lead</div>
      </div>
    </div>

  </div>
          </section>
<footer>
    <h2>Don't Miss Out — Secure Your Seat Today!</h2>
     <br />
    <div><p>© 2025 samuelasirvatham.com</p>
        <p>Contact Us: +91 90435-70992</p>
    </div>
</footer>
        </div>
  );
}

export default App;
