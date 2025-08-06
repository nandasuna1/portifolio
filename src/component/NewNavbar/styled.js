import styled from 'styled-components';
import { COLORS } from '../../colors';

export const HeaderContainer = styled.header`
  height: 10vh;
  background-color: ${COLORS.darkBrown};
  color: ${COLORS.lightBrown};
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 10;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 40px;
  width: 100%;
  align-items: center;
`;

export const ListItem = styled.button`
  background: transparent;
  border: none;
  color: ${COLORS.lightBrown};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const Burger = styled.button`
  background: transparent;
  border: none;
  color: ${COLORS.lightBrown};
  cursor: pointer;
  z-index: 11;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 90vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const MobileMenu = styled.nav`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  background-color: ${COLORS.darkBrown};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 0;
`;
