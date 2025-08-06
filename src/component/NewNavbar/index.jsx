import React, { useEffect, useState } from "react";
import {  Links, ListItem } from "./styled";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function NewNavbar() {
  const { i18n } = useTranslation();
  const navigate = useNavigate()
  const[lang, setLang] = useState('en')
  const { t } = useTranslation();


  const changeLanguage = () => {
    const newLang = lang === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang);
    setLang(newLang)
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    console.log(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerWidth]);

  return (
    windowWidth > 750 && (
        <Links>
          <ListItem
            type="button"
            id="home"
            onClick={() => navigate('/')}
          >
            {t('home')}
          </ListItem>

          <ListItem
            type="button"
            id="contact"
            onClick={() => navigate('contact')}
          >
            {t('contact')}
          </ListItem>
          <ListItem onClick={changeLanguage}>
            {lang === 'en' ? 'Mudar para 🇧🇷' : 'Change to 🇺🇸'}
          </ListItem>
        </Links>
    )
  );
}
