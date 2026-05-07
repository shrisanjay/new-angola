import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext);

  return (
    <>
      <div className="top">
        <div className="container">
          <div>
            <span dangerouslySetInnerHTML={{ __html: t('key_0') }} />
          </div>
          <div>
            <a href={t('phone1_href')} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              {t('phone1_text')}
            </a> | <a href="mailto:maasgeoenergy26@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>maasgeoenergy26@gmail.com</a>
          </div>
        </div>
      </div>
      <header className="nav">
        <div className="container navwrap">
          <Link className="brand" to="/">
            <img alt="MAAS / MNMAAS Logo" src="/images/logo.png" />
            <div>
              <h1>MAAS GEO ENERGY</h1>
              <span>MNMAAS – Angola Operations</span>
            </div>
          </Link>
          <nav className="links">
            <Link to="/#about"><span dangerouslySetInnerHTML={{ __html: t('key_1') }} /></Link>
            <Link to="/#services"><span dangerouslySetInnerHTML={{ __html: t('key_2') }} /></Link>
            <Link to="/#projects"><span dangerouslySetInnerHTML={{ __html: t('key_3') }} /></Link>
            <Link to="/#capability"><span dangerouslySetInnerHTML={{ __html: t('key_4') }} /></Link>
            <Link to="/#contact"><span dangerouslySetInnerHTML={{ __html: t('key_5') }} /></Link>
          </nav>
          <div className="lang-switch">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
          </div>
          <Link className="btn gold" to="/#contact"><span dangerouslySetInnerHTML={{ __html: t('key_6') }} /></Link>
        </div>
      </header>
    </>
  );
}
