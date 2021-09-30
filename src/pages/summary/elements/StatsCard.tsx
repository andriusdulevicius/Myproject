import React from 'react';
import { icons } from 'utils/icons';
import { H5, FlexWrapper, SmallCard, Svg, SmallWrapper, CaptionText } from 'components';

interface Props {
  icon: keyof typeof icons;
  title: string;
  subtitle: string;
}

export const StatsCard: React.FC<Props> = ({ title, icon, subtitle }) => (
  <SmallCard margin='0'>
    <FlexWrapper flexWrap='nowrap'>
      <Svg src={icon} />
      <SmallWrapper>
        <H5>{title}</H5>
        <CaptionText>{subtitle}</CaptionText>
      </SmallWrapper>
    </FlexWrapper>
  </SmallCard>
);
