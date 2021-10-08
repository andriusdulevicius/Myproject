import React from 'react';
import styled from 'styled-components';
import { Svg } from 'components/images/Svg';
import { Container } from 'components';

interface Props {
  align: string;
}

export const TransparentNav: React.FC<Props> = ({ align }) => {
  return (
    <StyledtNav textAlign={align}>
      <Svg src='anxietless_logo' />
    </StyledtNav>
  );
};

const StyledtNav = styled(Container).attrs({ padding: '1rem', backgroundColor: 'transparent' })`
  max-height: 3rem;
`;
