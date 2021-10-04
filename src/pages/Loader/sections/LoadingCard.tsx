import React from 'react';
import { RegularText, H3, Svg, TextBaseBold, SmallText, ContainerSmall, SmallCard } from 'components';

export const LoadingCard: React.FC = () => {
  const dynamicNumber = 12;

  return (
    <SmallCard zIndex={2} margin='0 auto' padding='1rem' width='90%' maxWidth='35rem' textAlign='center'>
      <H3>Calculating your results</H3>
      <RegularText>Here is breathing exercise while you wait.</RegularText>
      <ContainerSmall padding='3rem 0' textAlign='center'>
        <Svg src='seed_of_life' />
      </ContainerSmall>
      <TextBaseBold>{dynamicNumber}%</TextBaseBold>
      <SmallText>Calculating..</SmallText>
    </SmallCard>
  );
};
