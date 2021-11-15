import React from 'react';
import styled from 'styled-components';
import { H3, H4 } from 'components';

const FaqPage: React.FC = () => {
  return (
    <StyledFaqPage>
      <H3>Privacy Policy:</H3>
      <H4 margin='10rem 0'>&copy; 2021 A|D development. All rights reserved.</H4>
    </StyledFaqPage>
  );
};

export default FaqPage;

const StyledFaqPage = styled.section`
  padding: 2rem;
  text-align: center;
`;
