import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { FlexWrapper, Svg, SmallText, SmallBox } from 'components';

interface Props {
  li: string;
}

export const PlanListEl: React.FC<Props> = (props) => {
  const { isMobile } = useQuery();
  return (
    <FlexWrapper maxWidth='25rem' justifyContent='start' gap={isMobile ? '0.5rem' : '1rem'}>
      <SmallBox margin='0' minWidth='0'>
        <Svg src='orange_bulletpoint' />
      </SmallBox>
      <SmallText margin='0.2rem 0 0.4rem'>{props.li}</SmallText>
    </FlexWrapper>
  );
};
