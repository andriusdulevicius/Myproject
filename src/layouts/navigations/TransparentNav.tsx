import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'apis/history';
import { Container, Svg } from 'components';

interface Props {
  align: string;
}

export const TransparentNav: React.FC<Props> = ({ align }) => {
  const { goToLanding } = useRouter();
  return (
    <StyledtNav textAlign={align}>
      <StyledSvg src='anxietless_logo' onClick={goToLanding} />
    </StyledtNav>
  );
};

const StyledtNav = styled(Container).attrs({ padding: '1rem', backgroundColor: 'transparent' })`
  max-height: 3rem;
`;

const StyledSvg = styled(Svg)`
  cursor: pointer;
`;
