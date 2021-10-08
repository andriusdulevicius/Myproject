import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { QUESTIONS_ANSWERS } from './utils';
import { StyledContainer, StyledH2 } from '../elements/Styles';
import { QACard } from '../elements/QACard';
import { FlexWrapper, ContainerSmall, TextWrapper, SmallBox, Image, SmallText, AbsoluteBox } from 'components';
import { grey_white } from 'styles/colors';

export const Faq: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <>
      <StyledContainer>
        <StyledH2>Frequently Asked Questions</StyledH2>
        {QUESTIONS_ANSWERS.map((QAObj) => (
          <QACard QA={QAObj} key={QAObj.id} />
        ))}

        <StyledContainerSmall>
          <FlexWrapper>
            <SmallBox>
              <StyledSmallText>
                ''87% patients significantly reduces anxiety by fallowing simple-guided steps''
              </StyledSmallText>
              <SmallText>
                <TextWrapper>Christine Ellis</TextWrapper>
                <SmallText>Behavioural Psychologist </SmallText>
              </SmallText>
            </SmallBox>
            <SmallBox minWidth={!isMobile ? '6.875rem' : '5.125rem'}>
              <Image src='christine_ellis' />
            </SmallBox>
          </FlexWrapper>
        </StyledContainerSmall>
      </StyledContainer>
      {!isMobile && (
        <AbsoluteBox right='0' top='320rem'>
          <Image src='right_grey_cloud' />
        </AbsoluteBox>
      )}
    </>
  );
};

const StyledContainerSmall = styled(ContainerSmall)`
  margin: 3rem auto;
  padding: 1rem;
  max-width: 36.75rem;
  border: 0.0625rem solid ${grey_white};
  border-radius: 1rem;
`;

const StyledSmallText = styled(SmallText)`
  font-style: italic;
`;
