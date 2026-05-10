import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext);

  return (
    <>

      <header className="nav">
        <div className="container navwrap">
          <Link className="brand" to="/">
            <img alt="MAAS Logo" src="/images/logo.png" />
            <div>
              <h1>MAAS</h1>
              <span>WE LIVE TO DRILL</span>
            </div>
          </Link>
          <nav className="links">
            <Link to="/#about">
              <span dangerouslySetInnerHTML={{ __html: t("key_1") }} />
            </Link>
            <Link to="/#services">
              <span dangerouslySetInnerHTML={{ __html: t("key_2") }} />
            </Link>
            <Link to="/#projects">
              <span dangerouslySetInnerHTML={{ __html: t("key_3") }} />
            </Link>
            <Link to="/#capability">
              <span dangerouslySetInnerHTML={{ __html: t("key_4") }} />
            </Link>
            <Link to="/#contact">
              <span dangerouslySetInnerHTML={{ __html: t("key_5") }} />
            </Link>
          </nav>
          <div className="nav-actions">
            <div className="lang-switch">
              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                className={lang === "pt" ? "active" : ""}
                onClick={() => setLang("pt")}
              >
                PT
              </button>
              <button
                className={lang === "fr" ? "active" : ""}
                onClick={() => setLang("fr")}
              >
                FR
              </button>
            </div>
            <Link className="btn gold" to="/#contact">
              <span dangerouslySetInnerHTML={{ __html: t("key_6") }} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
