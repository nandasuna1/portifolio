import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  HeaderContainer,
  NavLinks,
  ListItem,
  Burger,
  MobileMenu,
  Overlay,
} from './styled';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NewNavbar() {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const lang = i18n.language;

  const changeLanguage = () => {
    i18n.changeLanguage(lang === 'en' ? 'pt' : 'en');
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 750);
    if (window.innerWidth >= 750) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Links = (
    <>
      <ListItem onClick={() => navigate('/')}>{t('home')}</ListItem>
      <ListItem onClick={() => navigate('/contact')}>{t('contact')}</ListItem>
      <ListItem onClick={changeLanguage}>
        {lang === 'en' ? 'Mudar para 🇧🇷' : 'Change to 🇺🇸'}
      </ListItem>
    </>
  );

  return (
    <HeaderContainer>
      {isMobile ? (
        <>
          <Burger onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Burger>

          {open && (
            <>
              <Overlay onClick={() => setOpen(false)} />
              <MobileMenu>{Links}</MobileMenu>
            </>
          )}
        </>
      ) : (
        <NavLinks>{Links}</NavLinks>
      )}
    </HeaderContainer>
  );
}
