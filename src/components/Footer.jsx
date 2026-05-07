import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

export default function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div>
            <h4>MAAS GEO ENERGY</h4>
            <p><span dangerouslySetInnerHTML={{ __html: t('key_101') }} /></p>
            <p><b><span dangerouslySetInnerHTML={{ __html: t('key_102') }} /></b> MNMAAS Prestação de Serviços, (SU), LDA</p>
          </div>
          <div>
            <h4><span dangerouslySetInnerHTML={{ __html: t('key_104') }} /></h4>
            <Link to="/borewell"><span dangerouslySetInnerHTML={{ __html: t('key_105') }} /></Link>
            <Link to="/borewell"><span dangerouslySetInnerHTML={{ __html: t('key_106') }} /></Link>
            <Link to="/solar">Solar infrastructure</Link>
            <Link to="/geotechnical"><span dangerouslySetInnerHTML={{ __html: t('key_107') }} /></Link>
            <Link to="/#mining"><span dangerouslySetInnerHTML={{ __html: t('key_115') }} /></Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={t('phone1_href')} target="_blank" rel="noreferrer">
              {t('phone1_text')}
            </a>
            <a href="mailto:maasgeoenergy26@gmail.com">maasgeoenergy26@gmail.com</a>
            <a href="https://www.maasgeoenergy.com" target="_blank" rel="noreferrer">maasgeoenergy.com</a>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 MAAS GEO ENERGY / MNMAAS Angola. <span dangerouslySetInnerHTML={{ __html: t('key_108') }} /></span>
          <span>Water • Solar • Drilling • Geotech • Infrastructure</span>
        </div>
      </div>
    </footer>
  );
}
