import React from 'react';
import { icons } from 'utils/icons';
import {
  Container,
  H2Mobile,
  H2,
  H5,
  H5Mobile,
  RegularText,
  RegularTextMobile,
  FlexWrapper,
  SmallCard,
  Svg,
  SmallWrapper,
  CaptionTextMobile,
  CaptionText,
} from 'components';
import { useQuery } from 'styles/breakpoints';

interface Props {
  icon: keyof typeof icons;
  title: string;
  subtitle: string;
}

export const StatsCard: React.FC<Props> = ({ title, icon, subtitle }) => {
  const { isMobile } = useQuery();
  return (
    <SmallCard margin='0'>
      <FlexWrapper flexWrap='nowrap'>
        <Svg src={icon} />
        <SmallWrapper>
          {isMobile ? <H5Mobile>{title}</H5Mobile> : <H5>{title}</H5>}
          {isMobile ? <CaptionTextMobile>{subtitle}</CaptionTextMobile> : <CaptionText>{subtitle}</CaptionText>}
        </SmallWrapper>
      </FlexWrapper>
    </SmallCard>
  );
};
