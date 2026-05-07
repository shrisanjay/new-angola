import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

export default function Home() {
  const { t } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <section className="hero" id="home">
        <div className="container content">
          <div className="eyebrow">
            <span dangerouslySetInnerHTML={{ __html: t('key_7') }} />
          </div>
          <h2>
            <span dangerouslySetInnerHTML={{ __html: t('key_8') }} />
            <strong><span dangerouslySetInnerHTML={{ __html: t('key_9') }} /></strong>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t('key_10') }} />
          <div className="actions">
            <a className="btn gold" href={t('phone1_href')} target="_blank" rel="noreferrer">
              <span dangerouslySetInnerHTML={{ __html: t('key_11') }} />
            </a>
            <a className="btn outline" href="#services">
              Ver <span dangerouslySetInnerHTML={{ __html: t('key_2') }} />
            </a>
          </div>
          <div className="stats">
            <div className="stat"><b>2018</b><span><span dangerouslySetInnerHTML={{ __html: t('key_13') }} /></span></div>
            <div className="stat"><b>500m</b><span><span dangerouslySetInnerHTML={{ __html: t('key_14') }} /></span></div>
            <div className="stat"><b>18+</b><span><span dangerouslySetInnerHTML={{ __html: t('key_15') }} /></span></div>
            <div className="stat"><b>3</b><span><span dangerouslySetInnerHTML={{ __html: t('key_16') }} /></span></div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="head">
            <div>
              <small><span dangerouslySetInnerHTML={{ __html: t('key_17') }} /></small>
              <h3><span dangerouslySetInnerHTML={{ __html: t('key_18') }} /></h3>
            </div>
            <p><span dangerouslySetInnerHTML={{ __html: t('key_19') }} /></p>
          </div>
          <div className="grid3">
            <Link to="/borewell">
              <article className="service" style={{cursor: 'pointer'}}>
                <img alt="Borewell and mud drilling" src="/images/service-borewell.jpg" />
                <div>
                  <span className="icon">💧</span>
                  <h4><span dangerouslySetInnerHTML={{ __html: t('key_20') }} /></h4>
                  <p><span dangerouslySetInnerHTML={{ __html: t('key_21') }} /></p>
                  <ul>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_22') }} /></li>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_23') }} /></li>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_24') }} /></li>
                  </ul>
                </div>
              </article>
            </Link>
            <Link to="/solar">
              <article className="service" style={{cursor: 'pointer'}}>
                <img alt="Solar project execution" src="/images/service-solar.jpg" />
                <div>
                  <span className="icon">☀️</span>
                  <h4><span dangerouslySetInnerHTML={{ __html: t('key_25') }} /></h4>
                  <p><span dangerouslySetInnerHTML={{ __html: t('key_26') }} /></p>
                  <ul>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_27') }} /></li>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_28') }} /></li>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_29') }} /></li>
                  </ul>
                </div>
              </article>
            </Link>
            <Link to="/geotechnical">
              <article className="service" style={{cursor: 'pointer'}}>
                <img alt="Soil nailing anchoring grouting" src="/images/service-geotech.jpg" />
                <div>
                  <span className="icon">🏗️</span>
                  <h4><span dangerouslySetInnerHTML={{ __html: t('key_30') }} /></h4>
                  <p><span dangerouslySetInnerHTML={{ __html: t('key_31') }} /></p>
                  <ul>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_32') }} /></li>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_33') }} /></li>
                    <li><span dangerouslySetInnerHTML={{ __html: t('key_34') }} /></li>
                  </ul>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <section className="soft" id="about">
        <div className="container split">
          <div className="panel">
            <small className="eyebrow"><span dangerouslySetInnerHTML={{ __html: t('key_35') }} /></small>
            <h3><span dangerouslySetInnerHTML={{ __html: t('key_36') }} /></h3>
            <p dangerouslySetInnerHTML={{ __html: t('key_37') }} />
            <p><span dangerouslySetInnerHTML={{ __html: t('key_38') }} /></p>
            <div className="checks">
              <div className="check"><span dangerouslySetInnerHTML={{ __html: t('key_39') }} /></div>
              <div className="check"><span dangerouslySetInnerHTML={{ __html: t('key_40') }} /></div>
              <div className="check"><span dangerouslySetInnerHTML={{ __html: t('key_41') }} /></div>
              <div className="check"><span dangerouslySetInnerHTML={{ __html: t('key_42') }} /></div>
            </div>
          </div>
          <div className="photo">
            <img alt="MAAS technical team" src="/images/about-team.jpg" />
            <div className="badge">
              <b><span dangerouslySetInnerHTML={{ __html: t('key_43') }} /></b>
              <p><span dangerouslySetInnerHTML={{ __html: t('key_44') }} /></p>
            </div>
          </div>
        </div>
      </section>

      <section className="soft" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="head">
            <div>
              <small><span dangerouslySetInnerHTML={{ __html: t('key_45') }} /></small>
              <h3><span dangerouslySetInnerHTML={{ __html: t('key_46') }} /></h3>
            </div>
            <p><span dangerouslySetInnerHTML={{ __html: t('key_47') }} /></p>
          </div>
          <div className="cred">
            <div className="credcard">
              <b>MAAS AND CO</b><span><span dangerouslySetInnerHTML={{ __html: t('key_48') }} /></span>
            </div>
            <div className="credcard">
              <b>GST: 33AAVFM2956L2ZL</b><span><span dangerouslySetInnerHTML={{ __html: t('key_49') }} /></span>
            </div>
            <div className="credcard">
              <b>MNMAAS LDA</b><span><span dangerouslySetInnerHTML={{ __html: t('key_50') }} /></span>
            </div>
            <div className="credcard">
              <b>NIF: 5002785684</b><span><span dangerouslySetInnerHTML={{ __html: t('key_51') }} /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <div className="head center">
            <div>
              <small><span dangerouslySetInnerHTML={{ __html: t('key_63') }} /></small>
              <h3><span dangerouslySetInnerHTML={{ __html: t('key_64') }} /></h3>
            </div>
            <p><span dangerouslySetInnerHTML={{ __html: t('key_65') }} /></p>
          </div>
          <div className="gallery">
            <div className="item big">
              <img alt="Solar project execution" src="/images/project-solar-large.jpg" />
              <div className="caption">
                <b>Utility-Scale <span dangerouslySetInnerHTML={{ __html: t('key_25') }} /></b>
                <span><span dangerouslySetInnerHTML={{ __html: t('key_67') }} /></span>
              </div>
            </div>
            <div className="item">
              <img alt="Mud drilling" src="/images/project-drilling.jpg" />
              <div className="caption">
                <b><span dangerouslySetInnerHTML={{ __html: t('key_68') }} /></b>
                <span><span dangerouslySetInnerHTML={{ __html: t('key_69') }} /></span>
              </div>
            </div>
            <div className="item">
              <img alt="Pump and tank installation" src="/images/project-water.jpg" />
              <div className="caption">
                <b><span dangerouslySetInnerHTML={{ __html: t('key_70') }} /></b>
                <span><span dangerouslySetInnerHTML={{ __html: t('key_71') }} /></span>
              </div>
            </div>
            <div className="item">
              <img alt="Soil nailing anchoring" src="/images/project-anchor.jpg" />
              <div className="caption">
                <b><span dangerouslySetInnerHTML={{ __html: t('key_72') }} /></b>
                <span><span dangerouslySetInnerHTML={{ __html: t('key_73') }} /></span>
              </div>
            </div>
            <div className="item">
              <img alt="Technical team" src="/images/project-team.jpg" />
              <div className="caption">
                <b><span dangerouslySetInnerHTML={{ __html: t('key_74') }} /></b>
                <span><span dangerouslySetInnerHTML={{ __html: t('key_75') }} /></span>
              </div>
            </div>
          </div>
          <div className="more-gallery">
            <img alt="Solar cable tray" src="/images/solar-gallery-1.jpg" />
            <img alt="Solar module mounting" src="/images/solar-gallery-2.jpg" />
            <img alt="Borewell site" src="/images/drilling-gallery-1.jpg" />
            <img alt="Anchor drilling" src="/images/geotech-gallery-1.jpg" />
          </div>
        </div>
      </section>

      <section className="video">
        <div className="container video-grid">
          <div className="video-box">
            <video controls muted poster="/images/video-poster.jpg">
              <source src="/videos/site-work.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
          <div className="panel">
            <small className="eyebrow"><span dangerouslySetInnerHTML={{ __html: t('key_76') }} /></small>
            <h3><span dangerouslySetInnerHTML={{ __html: t('key_77') }} /></h3>
            <p>
              <span dangerouslySetInnerHTML={{ __html: t('key_78') }} />
              <b>videos/site-work.mp4</b>
              <span dangerouslySetInnerHTML={{ __html: t('key_79') }} />
            </p>
            <a className="btn dark" href="#contact"><span dangerouslySetInnerHTML={{ __html: t('key_80') }} /></a>
          </div>
        </div>
      </section>

      <section className="mining" id="mining">
        <div className="container">
          <div className="head center">
            <div>
              <small><span dangerouslySetInnerHTML={{ __html: t('key_109') }} /></small>
              <h3><span dangerouslySetInnerHTML={{ __html: t('key_110') }} /></h3>
            </div>
            <p><span dangerouslySetInnerHTML={{ __html: t('key_111') }} /></p>
          </div>
          <div className="video-grid-3">
            <div className="mining-box">
              <video controls muted preload="metadata">
                <source src="/videos/videoplayback.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
              <div className="mining-caption"><span dangerouslySetInnerHTML={{ __html: t('key_112') }} /></div>
            </div>
            <div className="mining-box">
              <video controls muted preload="metadata">
                <source src="/videos/videoplayback (1).mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
              <div className="mining-caption"><span dangerouslySetInnerHTML={{ __html: t('key_113') }} /></div>
            </div>
            <div className="mining-box">
              <video controls muted preload="metadata">
                <source src="/videos/videoplayback (2).mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
              <div className="mining-caption"><span dangerouslySetInnerHTML={{ __html: t('key_114') }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="capability">
        <div className="container">
          <div className="head">
            <div>
              <small><span dangerouslySetInnerHTML={{ __html: t('key_81') }} /></small>
              <h3><span dangerouslySetInnerHTML={{ __html: t('key_82') }} /></h3>
            </div>
            <p><span dangerouslySetInnerHTML={{ __html: t('key_83') }} /></p>
          </div>
          <div className="grid3">
            <div className="cap">
              <h4><span dangerouslySetInnerHTML={{ __html: t('key_84') }} /></h4>
              <ul>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_22') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_85') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_86') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_87') }} /></li>
              </ul>
            </div>
            <div className="cap">
              <h4><span dangerouslySetInnerHTML={{ __html: t('key_88') }} /></h4>
              <ul>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_89') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_90') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_91') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_59') }} /> partner for EPC companies</li>
              </ul>
            </div>
            <div className="cap">
              <h4><span dangerouslySetInnerHTML={{ __html: t('key_93') }} /></h4>
              <ul>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_94') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_95') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_96') }} /></li>
                <li><span dangerouslySetInnerHTML={{ __html: t('key_97') }} /></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="cta">
            <div>
              <h3>
                <span dangerouslySetInnerHTML={{ __html: t('key_98') }} />
                <strong><span dangerouslySetInnerHTML={{ __html: t('key_99') }} /></strong>
              </h3>
              <p><span dangerouslySetInnerHTML={{ __html: t('key_100') }} /></p>
            </div>
            <div className="contactbox">
              <a href={t('phone1_href')} target="_blank" rel="noreferrer">
                📞 {t('phone1_text')}
              </a>
              <a href={t('phone2_href')}>
                📞 {t('phone2_text')}
              </a>
              <a href="mailto:maasgeoenergy26@gmail.com">✉️ maasgeoenergy26@gmail.com</a>
              <a href="https://www.maasgeoenergy.com" target="_blank" rel="noreferrer">🌐 www.maasgeoenergy.com</a>
              <div><span dangerouslySetInnerHTML={{ __html: t('address_text') }} /></div>
              <div>🧾 MNMAAS NIF: 5002785684</div>
              <div>🇮🇳 MAAS AND CO GST: 33AAVFM2956L2ZL</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
