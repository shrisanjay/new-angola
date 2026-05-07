import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function Solar() {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = Array.from({ length: 20 }, (_, i) => 
    `/arranged_photos/solar_projects/solar_projects_${String(i + 1).padStart(2, '0')}.jpg`
  );

  return (
    <main>
      <div className="subpage-hero">
        <div className="container">
          <h1><span dangerouslySetInnerHTML={{ __html: t('key_25') }} /></h1>
          <p><span dangerouslySetInnerHTML={{ __html: t('key_26') }} /></p>
        </div>
      </div>
      
      <section>
        <div className="container">
          <div className="head center">
            <div>
              <small><span dangerouslySetInnerHTML={{ __html: t('key_63') }} /></small>
              <h3>Field Operations Gallery</h3>
            </div>
          </div>
          
          <div className="gallery-grid">
            {images.map((src, index) => (
              <div className="gallery-img" key={index}>
                <img src={src} alt={`Solar project ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
