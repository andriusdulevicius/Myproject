import React from 'react';
import { icons } from 'utils/icons';
import { H5, FlexWrapper, SmallCard, Svg, SmallWrapper, CaptionText } from 'components';

interface Props {
  icon: keyof typeof icons;
  title: string;
  subtitle: string;
}

export const StatsCard: React.FC<Props> = ({ title, icon, subtitle }) => (
  <SmallCard padding='1rem' margin='0'>
    <FlexWrapper flexWrap='nowrap'>
      <Svg src={icon} />
      <SmallWrapper>
        <H5 margin='1rem 0 0.6rem '>{title}</H5>
        <CaptionText margin='0'>{subtitle}</CaptionText>
      </SmallWrapper>
    </FlexWrapper>
  </SmallCard>
);
