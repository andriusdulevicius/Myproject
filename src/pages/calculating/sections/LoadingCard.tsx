import React from 'react';
import { RegularText, H3, Svg, TextBaseBold, SmallText, ContainerSmall, SmallCard } from 'components';
import { useQuery } from 'styles/breakpoints';

export const LoadingCard: React.FC = () => {
  const { isMobile } = useQuery();
  const dynamicNumber = 12;

  return (
    <SmallCard padding='1rem' width={isMobile ? '90%' : '70%'} textAlign='center'>
      <H3>Calculating your results</H3>
      <RegularText>Here is breathing exercise while you wait.</RegularText>
      <ContainerSmall padding='3.5rem 0' textAlign='center'>
        <Svg src='seed_of_life' />
      </ContainerSmall>
      <TextBaseBold>{dynamicNumber}%</TextBaseBold>
      <SmallText>Calculating..</SmallText>
    </SmallCard>
  );
};
