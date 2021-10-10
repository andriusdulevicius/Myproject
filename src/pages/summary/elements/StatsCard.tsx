import React from 'react';
import { H5, FlexWrapper, SmallCard, Svg, ContainerSmall, CaptionText, SmallBox } from 'components';

interface Props {
  icon: string;
  title: string;
  subtitle: string;
}

export const StatsCard: React.FC<Props> = ({ title, icon, subtitle }) => (
  <SmallCard padding='1rem' margin='0'>
    <FlexWrapper>
      <SmallBox minWidth='4.5rem'>
        <Svg src={icon} />
      </SmallBox>
      <ContainerSmall maxWidth='24rem'>
        <H5 margin='1rem 0 0.6rem '>{title}</H5>
        <CaptionText margin='0'>{subtitle}</CaptionText>
      </ContainerSmall>
    </FlexWrapper>
  </SmallCard>
);
