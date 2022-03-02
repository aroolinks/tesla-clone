import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href='#' key={index}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href='#'> Shop </a>
        <a href='#'> Tesla Account </a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              {' '}
              <a href='#'>{car}</a>
            </li>
          ))}
        <li>
          {' '}
          <a href='#'> Shop </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transformation: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transformation: uppercase;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  a {
    font-weight: 600;
    text-transformation: uppercase;
    padding: 0 10px;
  }
`;
const BurgerNav = styled.div`
  top: 00;
  bottom: 0;
  position: fixed;
  background: white;
  right: 0;
  width: 300px !important;
  display: block;
  z-index: 9999;
  overflow: hidden;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid #eee;
  }
  a {
    font-weight: 600;
    cursor: pointer;
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
