import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IntermissionCard } from './sections/IntermissionCard';
import { useQuery } from 'styles/breakpoints';
import { blue, white, grey_white, dark_text } from 'styles/colors';
import {
  Image,
  Svg,
  AbsoluteBox,
  Container,
  H1Mobile,
  TextBaseBold,
  FlexWrapper,
  PrimaryButton,
  SmallTextMobile,
} from 'components';

interface DataTypes {
  type: string;
  key: string;
  label?: string;
  custom?: {
    sublabel?: string;
    stressor?: string;
    text?: string;
  };
  options?: [
    {
      label?: string;
      value?: string;
      custom?: {
        horizontal?: boolean;
      };
    }
  ];
}

const Quiz = () => {
  const { isMobileS, isMobile, isLaptop } = useQuery();
  const [questions, setQuestions] = useState<[]>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        'https://rnd.kilohealthservices.com/api/quizzes/main?api_token=d88ab57d-4cbe-4826-b593-2c1b2f8b657f'
      );
      const result = await data.json();
      console.log(result.data.questions);
      setQuestions(result.data.questions);
    })();
  }, []);

  const handleQuiz = () => {
    console.log('handling quiz');
  };

  const handleState = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <QuizPage>
      <AbsoluteBox left='0rem' top='-3rem'>
        <Image src='top_cloud' />
      </AbsoluteBox>
      <AbsoluteBox bottom='-1rem' right='-1rem'>
        <Image src='bottom_cloud' />
      </AbsoluteBox>

      {questions &&
        questions.map((q: DataTypes) => {
          const { type, key, label, custom, options } = q;
          return (
            <Container key={key}>
              <FlexWrapper justifyContent='space-between'>
                <Svg src='go_back' />
                {type !== 'intermission' && <TextBaseBold>1 of 4</TextBaseBold>}
              </FlexWrapper>
              {type === 'intermission' && <IntermissionCard />}
              {label && <H1Mobile>{label}</H1Mobile>}
              {custom && custom.sublabel && <SmallTextMobile>{custom.sublabel}</SmallTextMobile>}
              {options && (
                <FlexWrapper>
                  {options.map(({ label, value }) => (
                    <OptionCard
                      key={value}
                      isSelected={isSelected}
                      onClick={type === 'multiple' ? handleState : handleQuiz}
                    >
                      {isSelected && <Svg src='check_circle' />} {label}
                    </OptionCard>
                  ))}
                </FlexWrapper>
              )}

              {type === 'multiple' && (
                <PrimaryButton colorProp={blue} width='100%' onClick={handleQuiz}>
                  Continue
                </PrimaryButton>
              )}
            </Container>
          );
        })}
    </QuizPage>
  );
};

export default Quiz;

const QuizPage = styled.div`
  position: 'relative';
  background-color: ${grey_white};
  height: 100vh;
  padding: 0;
`;

const OptionCard = styled.div<{ isSelected: boolean }>`
  display: 'inline-block';
  margin-bottom: '0.3rem';
  padding: '0.94rem';
  width: '100%';
  background-color: ${white};
  border: ${({ isSelected }) => (isSelected ? `1px solid ${dark_text}` : 'none')};
  border-radius: '2rem';
  cursor: 'pointer';
`;
