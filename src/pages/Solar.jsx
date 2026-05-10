import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../LanguageContext';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export default function Solar() {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    "VID-20260507-WA0019.mp4",
    "VID-20260507-WA0028.mp4",
    "VID-20260507-WA0029.mp4",
    "VID-20260507-WA0030.mp4",
    "VID-20260507-WA0031.mp4",
    "VID-20260507-WA0032.mp4",
    "VID-20260507-WA0033.mp4",
    "VID-20260507-WA0034.mp4",
    "VID-20260507-WA0035.mp4",
    "videoplayback.mp4"
  ];

  const images = [
    "IMG-20260503-WA0071.jpg", "IMG-20260503-WA0072.jpg", "IMG-20260503-WA0073.jpg",
    "IMG-20260503-WA0075.jpg", "IMG-20260503-WA0076.jpg", "IMG-20260503-WA0077.jpg",
    "IMG-20260503-WA0078.jpg", "IMG-20260503-WA0081.jpg", "IMG-20260503-WA0082.jpg",
    "IMG-20260503-WA0084.jpg", "IMG-20260503-WA0108.jpg", "IMG-20260503-WA0123.jpg",
    "IMG-20260503-WA0125.jpg", "IMG-20260503-WA0127.jpg", "IMG-20260503-WA0130.jpg",
    "IMG-20260503-WA0132.jpg", "IMG-20260503-WA0133.jpg", "IMG-20260503-WA0134.jpg",
    "IMG-20260503-WA0135.jpg", "IMG-20260503-WA0136.jpg"
  ];

  const pastProjects = [
    { client: "Avaada", endCustomer: "Avaada Solar", location: "Kalburgi, KA", capacity: "75", scope: "Construction of Piling, Construction of Switchyard, Construction of IDT" },
    { client: "Avaada", endCustomer: "Avaada Solar", location: "Kalburgi, KA", capacity: "75", scope: "Supply & Erection of Chain link Fencing for 8 KM" },
    { client: "Ayana Renewables", endCustomer: "Ayana Solar", location: "Pavagada, KA", capacity: "300", scope: "Supply of Main Gates for Solar plant" },
    { client: "Faben India", endCustomer: "Avaada Solar", location: "Trichy, TN", capacity: "50", scope: "Supply & Erection of Boundary fencing 14 KM, IDT Fencing & shed, Construction of ICR civil works, MCR building, Piling, Road" },
    { client: "Faben India", endCustomer: "Avaada Solar", location: "Yadgir, KA", capacity: "50", scope: "Supply & Erection of Boundary fencing 14 KM, IDT Fencing & shed, Construction of ICR civil works, MCR building, Piling, Switchyard" },
    { client: "PR Infra developers", endCustomer: "Ayana Solar", location: "Pavagada, KA", capacity: "350", scope: "Supply & Erection of Chain link fencing 30 KM" },
    { client: "Siddartha Civil works", endCustomer: "Ayana Solar", location: "Pavagada, KA", capacity: "350", scope: "Supply & Erection of Chain link fencing 25 KM" },
    { client: "Faben India", endCustomer: "Renew Power Wind", location: "Gadag, KA", capacity: "300", scope: "Construction of civil foundation services" },
  ];

  return (
    <main>
      {/* Hero */}
      <div className="subpage-hero" style={{ backgroundImage: "linear-gradient(90deg, rgba(10, 30, 94, 0.96), rgba(10, 30, 94, 0.78)), url('/images/solar-images/IMG-20260503-WA0155.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '160px 0 100px' }}>
        <div className="container">
          <span className="eyebrow" style={{marginBottom: '20px'}}>MAAS AND CO</span>
          <h1 style={{color: '#fff', fontSize: 'clamp(36px, 6vw, 64px)', marginBottom: '16px'}}>
            Strong foundations start with <strong style={{color: 'var(--gold2)'}}>trusted piling</strong>
          </h1>
          <p style={{color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <Mail size={20} color="var(--gold2)"/> maasgeotech24@gmail.com
          </p>
        </div>
      </div>

      {/* About Us */}
      <section>
        <div className="container split">
          <div className="panel">
            <small style={{color: 'var(--gold)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.6px'}}>01. About Us</small>
            <h3 style={{fontSize: 'clamp(28px, 4vw, 42px)', marginTop: '8px', marginBottom: '20px', color: 'var(--navy)'}}>Who We Are</h3>
            <p>Mass and Co is a specialized engineering company focused on delivering high-quality piling and drilling services for solar power plants and a wide range of foundation works. Founded with a commitment to building a sustainable future, we bring unmatched technical expertise, advanced equipment, and a client-first approach to every project we execute.</p>
            <p>From micro and bored piling to custom drilling solutions, we support solar infrastructure and industrial developments across India by laying strong, stable foundations that stand the test of time. Our team comprises experienced engineers, skilled operators, and project managers who are passionate about precision, safety, and reliability.</p>
            <p>With a strong presence in the renewable energy sector, we are proud to contribute to India's green growth by powering the backbone of solar energy projects. Our services are designed to meet high engineering standards and are tailored to suit varying geotechnical conditions, timelines, and budgetary constraints.</p>
          </div>
          <div className="photo">
            <img src="/images/solar-images/IMG-20260503-WA0123.jpg" alt="About Maas and Co" style={{height: '100%', minHeight: '560px', objectFit: 'cover'}} />
            <div className="badge">
              <b>Specialized</b>
              <span style={{display:'block'}}>Engineering Company</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="soft">
        <div className="container">
          <div className="grid3" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'}}>
            <div className="cap" style={{background: '#fff'}}>
              <small style={{color: 'var(--gold)', fontWeight: 900, textTransform: 'uppercase'}}>02. Vision</small>
              <h4 style={{fontSize: '28px', marginTop: '10px', marginBottom: '16px'}}>Our Vision</h4>
              <p style={{color: 'var(--muted)'}}>To be a leading force in foundation engineering, enabling sustainable infrastructure by delivering safe, reliable, and innovative piling and drilling solutions for the renewable energy sector and beyond.</p>
            </div>
            
            <div className="cap" style={{background: 'var(--navy)', color: '#fff', gridColumn: 'span 2'}}>
              <small style={{color: 'var(--gold2)', fontWeight: 900, textTransform: 'uppercase'}}>03. Mission</small>
              <h4 style={{fontSize: '28px', color: '#fff', marginTop: '10px', marginBottom: '16px'}}>Our Mission</h4>
              <ul style={{color: 'rgba(255,255,255,0.85)'}}>
                <li style={{color: 'rgba(255,255,255,0.85)'}}>To provide top-tier piling and drilling services with a focus on quality, precision, and environmental responsibility.</li>
                <li style={{color: 'rgba(255,255,255,0.85)'}}>To support the rapid growth of solar and clean energy infrastructure through strong and dependable foundation solutions.</li>
                <li style={{color: 'rgba(255,255,255,0.85)'}}>To build long-term partnerships based on trust, transparency, and engineering excellence.</li>
                <li style={{color: 'rgba(255,255,255,0.85)'}}>To invest in modern technology and skilled manpower that ensures safe and efficient project execution.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section>
        <div className="container">
          <div className="head center">
            <div>
              <small>04. Services</small>
              <h3>Services We Offer</h3>
            </div>
          </div>
          
          <div className="grid3">
            <div className="cap">
              <h4>Construction & Infrastructure</h4>
              <ul>
                <li>Land Grading & Leveling</li>
                <li>Construction of Main Control Room Building, Inverter Shed, Switchyard</li>
                <li>Commercial and Industrial building construction (PEB)</li>
              </ul>
            </div>
            <div className="cap">
              <h4>Solar Piling & Foundation</h4>
              <ul>
                <li>Plant Fencing, Boundary wall, Internal Roads, Piling and Drains</li>
                <li>Piling for Solar Power Plants</li>
                <li>Bored & Cast-In-Situ Piling</li>
                <li>Micro Piling & Retrofitting</li>
              </ul>
            </div>
            <div className="cap">
              <h4>Precast & Erection</h4>
              <ul>
                <li>Precast boundary wall – supply and erection</li>
                <li>Supply of RCC Precast Post and wall panels</li>
                <li>Erection includes Marking, Auger/DTH drilling, Post & Panel Erection</li>
                <li>Installation & Commissioning activities</li>
                <li>Soil Investigation & Drilling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="projects">
        <div className="container">
          <div className="head center">
            <div>
              <small style={{color: 'var(--gold2)'}}>05. & 06. Current Projects</small>
              <h3 style={{color: '#fff'}}>Ongoing Operations</h3>
            </div>
          </div>

          <div className="grid3" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'}}>
            {/* Project 1 */}
            <div className="panel" style={{background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px', marginBottom: '16px'}}>
                <div>
                  <span style={{color: 'var(--gold2)', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase'}}>Client: Adani Green Energy</span>
                  <h4 style={{fontSize: '22px', marginTop: '5px'}}>250MW Solar PV Project</h4>
                </div>
                <div style={{textAlign: 'right'}}>
                  <MapPin size={20} color="var(--gold2)" />
                  <div style={{fontSize: '14px', color: 'rgba(255,255,255,0.7)'}}>Kadapa, AP</div>
                </div>
              </div>
              <div style={{color: 'rgba(255,255,255,0.85)', fontSize: '15px'}}>
                <b style={{color: '#fff', display: 'block', marginBottom: '8px'}}>Scope of Work:</b>
                <ul style={{listStyle: 'none', display: 'grid', gap: '8px', marginBottom: '16px'}}>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Supply Scope for 5.3KM Fencing</li>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Fabricated Structural steel with Paint Finish</li>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Supply of GI Chain Link Mesh, GI Razor wire, GI Line Wire, GI Concertina coil</li>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Erection Scope for 5.3KM Fencing</li>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Construction of Piling & MMS Installation</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="panel" style={{background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px', marginBottom: '16px'}}>
                <div>
                  <span style={{color: 'var(--gold2)', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase'}}>Client: Ayana Kadapa Renewables</span>
                  <h4 style={{fontSize: '22px', marginTop: '5px'}}>362.5MW Solar PV Project</h4>
                </div>
                <div style={{textAlign: 'right'}}>
                  <MapPin size={20} color="var(--gold2)" />
                  <div style={{fontSize: '14px', color: 'rgba(255,255,255,0.7)'}}>Kadapa, AP</div>
                </div>
              </div>
              <div style={{color: 'rgba(255,255,255,0.85)', fontSize: '15px'}}>
                <b style={{color: '#fff', display: 'block', marginBottom: '8px'}}>Scope of Work (Contractor: Maas and Co):</b>
                <ul style={{listStyle: 'none', display: 'grid', gap: '8px', marginBottom: '16px'}}>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Supply Scope for 32 KM Fencing</li>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Fabricated Structural steel with GI Finish</li>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Supply of GI Chain Link Mesh, Barbed wire, Line Wire, Concertina coil</li>
                  <li style={{display: 'flex', gap: '8px'}}><CheckCircle2 size={18} color="var(--gold2)" style={{flexShrink: 0}} /> Supply of Fasteners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Experiences */}
      <section className="soft">
        <div className="container">
          <div className="head center">
            <div>
              <small>07. Past Experiences</small>
              <h3>Project Credentials</h3>
            </div>
          </div>
          
          <div style={{overflowX: 'auto', background: '#fff', borderRadius: '24px', padding: '24px', boxShadow: 'var(--shadow)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', minWidth: '800px', fontSize: '15px'}}>
              <thead>
                <tr style={{background: 'var(--navy)', color: '#fff', textAlign: 'left'}}>
                  <th style={{padding: '16px', borderRadius: '12px 0 0 12px'}}>Client</th>
                  <th style={{padding: '16px'}}>End Customer</th>
                  <th style={{padding: '16px'}}>Location</th>
                  <th style={{padding: '16px'}}>Capacity (MW)</th>
                  <th style={{padding: '16px', borderRadius: '0 12px 12px 0'}}>Scope of Work</th>
                </tr>
              </thead>
              <tbody>
                {pastProjects.map((p, i) => (
                  <tr key={i} style={{borderBottom: '1px solid var(--line)'}}>
                    <td style={{padding: '16px', fontWeight: 'bold'}}>{p.client}</td>
                    <td style={{padding: '16px'}}>{p.endCustomer}</td>
                    <td style={{padding: '16px'}}>{p.location}</td>
                    <td style={{padding: '16px', color: 'var(--navy)', fontWeight: 'bold'}}>{p.capacity}</td>
                    <td style={{padding: '16px', color: 'var(--muted)'}}>{p.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Machineries */}
      <section>
        <div className="container">
          <div className="head center">
            <div>
              <small>Equipment</small>
              <h3>Machineries & Instrument Used</h3>
            </div>
          </div>
          <div className="cred">
            <div className="credcard" style={{textAlign: 'center'}}>
              <img src="/images/solar-images/IMG-20260503-WA0142.jpg" alt="Total Station" style={{borderRadius: '12px', marginBottom: '16px', height: '160px', objectFit: 'cover'}} />
              <b>Total Station</b>
            </div>
            <div className="credcard" style={{textAlign: 'center'}}>
              <img src="/images/solar-images/IMG-20260503-WA0133.jpg" alt="JCB" style={{borderRadius: '12px', marginBottom: '16px', height: '160px', objectFit: 'cover'}} />
              <b>JCB</b>
            </div>
            <div className="credcard" style={{textAlign: 'center'}}>
              <img src="/images/solar-images/IMG-20260503-WA0076.jpg" alt="DTH" style={{borderRadius: '12px', marginBottom: '16px', height: '160px', objectFit: 'cover'}} />
              <b>DTH</b>
            </div>
            <div className="credcard" style={{textAlign: 'center'}}>
              <img src="/images/solar-images/IMG-20260503-WA0110.jpg" alt="Self-Loading Concrete Mixer" style={{borderRadius: '12px', marginBottom: '16px', height: '160px', objectFit: 'cover'}} />
              <b>Self-Loading Concrete Mixer</b>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mining" style={{paddingTop: '96px'}}>
        <div className="container">
          <div className="head center">
            <div>
              <small style={{color: 'var(--gold2)'}}>Some of our Works</small>
              <h3 style={{color: '#fff'}}>Operations Gallery</h3>
            </div>
          </div>

          <h4 style={{fontSize: '24px', marginBottom: '20px', color: 'var(--gold2)'}}>Video Gallery</h4>
          <div className="video-grid-3">
            {videos.slice(0, 9).map((vid, idx) => (
              <div className="mining-box" key={idx}>
                <video src={`/videos/solar-works/${vid}`} controls muted preload="metadata" />
              </div>
            ))}
          </div>

          <h4 style={{fontSize: '24px', marginBottom: '20px', marginTop: '60px', color: 'var(--gold2)'}}>Photo Gallery</h4>
          <div className="gallery-grid">
            {images.map((img, idx) => (
              <div className="gallery-img" key={idx}>
                <img src={`/images/solar-images/${img}`} alt={`Gallery image ${idx}`} loading="lazy" style={{height: '100%', objectFit: 'cover'}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section>
        <div className="container">
          <div className="cta" style={{backgroundImage: "linear-gradient(90deg, rgba(10, 30, 94, 0.96), rgba(10, 30, 94, 0.78)), url('/images/solar-images/IMG-20260503-WA0154.jpg')"}}>
            <div>
              <span className="eyebrow" style={{marginBottom: '16px', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff'}}>08. Contact Us</span>
              <h3>Get in touch with <strong style={{color: 'var(--gold2)'}}>MAAS AND CO</strong></h3>
              <p>Ready to build a strong foundation? Contact us for piling, drilling, and infrastructure services.</p>
            </div>
            <div className="contactbox">
              <div style={{alignItems: 'flex-start'}}>
                <MapPin size={24} color="var(--gold)" style={{flexShrink: 0, marginTop: '2px'}} />
                <div>
                  Kudi theru, 2/20, Samutharapalayam,<br/>
                  Kumaramangalam, Thiruchengode,<br/>
                  Namakkal, Tamil Nadu - 637205
                </div>
              </div>
              <a href="mailto:maasgeotech24@gmail.com">
                <Mail size={24} color="var(--gold)" />
                maasgeotech24@gmail.com
              </a>
              <a href="tel:+919363526497">
                <Phone size={24} color="var(--gold)" />
                +91 9363526497
              </a>
              <a href="tel:+917010690639">
                <Phone size={24} color="var(--gold)" />
                +91 7010690639
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
