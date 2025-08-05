// React + Bootstrap Landing Page for Fitness Lead Magnet
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FitnessLeadPage() {
  return (
    <div className="bg-light text-dark">
      {/* Header */}
      <header className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Free Guide: 5 Website Mistakes Fitness Trainers Make</h1>
          <p className="lead">Fix these mistakes and convert more clients online!</p>
        </div>
      </header>

      {/* Hero & Form */}
      <section className="container my-5">
        <div className="bg-white p-5 rounded shadow">
          <h2 className="mb-4">Get the FREE checklist + tips</h2>
         <form action="https://formsubmit.co/devx6341@gmail.com" method="POST">
            <div className="mb-3">
              <input type="text" name="name" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" name="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
             <input type="hidden" name="_captcha" value="false"/>
            </div>
            <div>
              <input type="hidden" name="_subject" value="New Lead from Fitness Landing Page!" />
            </div>
           <div>
            <input type="hidden" name="_next" value="https://fitness-guide101.netlify.app/thank-you" />
           </div>
            <button type="submit" className="btn btn-primary w-100">Get the Free Guide</button>
          </form>
        </div>
      </section>

      {/* Why Section */}
      <section className="container text-center my-5">
        <h3 className="mb-4">Why You Need This Guide</h3>
        <ul className="list-unstyled">
          <li className="mb-2">🚫 Avoid mistakes that cost you online leads</li>
          <li className="mb-2">📱 Make your website mobile-first & client-ready</li>
          <li>🎯 Simple tips you can apply today — no tech required</li>
        </ul>
      </section>

      {/* About Section */}
      <section className="bg-secondary text-white text-center py-5">
        <div className="container">
          <h4 className="fw-bold mb-2">Hi, I’m Devirus 👋</h4>
          <p className="mb-0">
            I help fitness trainers,gyms and businesses build sleek, modern websites that drive results. Whether you need a landing page,
            booking system, or full redesign — I’m here to help you grow online.
          </p>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-primary text-white text-center py-4">
        <p className="mb-1">📞 Ready to level up your site? Contact me:</p>
        <p className="text-white">Email:   
           <a className="text-white me-3 ms-2" href="https://mail.google.com/mail/?view=cm&to=devx6341@gmail.com" target="_blank">
             devx6341@gmail.com
          </a> | 
        WhatsApp:  
           <a className="text-white ms-2" href="https://wa.me/2348105920783" target="_blank">+2348105920783</a></p>
      </footer>
    </div>
  );
}
