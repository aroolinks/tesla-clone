import React from 'react';
import styled from 'styled-components';

function Section() {
  return <Wrap>Section</Wrap>;
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: orange;
  background-image: url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
`;
