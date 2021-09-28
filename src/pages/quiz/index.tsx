import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { IntermissionCard } from './sections/IntermissionCard';
import { AnswerCard } from './elements/AnswerCard';
import { useQuery } from 'styles/breakpoints';
import { blue, grey_white } from 'styles/colors';
import {
  Image,
  Svg,
  AbsoluteBox,
  QuizBackground,
  TextBase,
  Container,
  H2,
  H3Mobile,
  TextBaseBold,
  FlexWrapper,
  PrimaryButton,
  SmallTextMobile,
  RegularText,
} from 'components';
import { StatementCard } from './sections/StatementCard';

export interface DataTypes {
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

const Quiz: React.FC<DataTypes> = () => {
  const { isMobile } = useQuery();
  const [questions, setQuestions] = useState<[]>([]);
  const [question, setQuestion] = useState<number>(1);

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

  const renderNextQuestion = () => {
    if (question <= 9) setQuestion(question + 1);
    if (question > 9) navigate('/calculating/');
  };

  return (
    <QuizPage>
      <QuizBackground />
      {questions &&
        questions.slice(question - 1, question).map((q: DataTypes, index: number) => {
          const { type, key, label, custom, options } = q;
          return (
            <Container key={key} zIndex={2}>
              <FlexWrapper justifyContent='space-between' padding='1rem 0 0 0'>
                <Svg src='go_back' onClick={() => setQuestion(question - 1)} />
                <TextBaseBold>
                  {question} of {questions.length}
                </TextBaseBold>
              </FlexWrapper>
              <Container paddingTop={isMobile ? '0' : '6rem'} maxWidth='35rem' textAlign={isMobile ? 'left' : 'center'}>
                {type === 'intermission' && <IntermissionCard renderNextQuestion={renderNextQuestion} />}
                {label && isMobile ? <H3Mobile>{label}</H3Mobile> : <H2>{label}</H2>}
                {custom &&
                  custom.sublabel &&
                  (isMobile ? (
                    <SmallTextMobile>{custom.sublabel}</SmallTextMobile>
                  ) : (
                    <RegularText>{custom.sublabel}</RegularText>
                  ))}
                {options && (
                  <FlexWrapper gap='0.6rem' padding='0rem'>
                    {options.map(({ label, value }) => (
                      <AnswerCard key={value} labelProp={label} type={type} renderNextQuestion={renderNextQuestion} />
                    ))}
                  </FlexWrapper>
                )}
                {type === 'statement' && (
                  <StatementCard statementKey={key} custom={custom} renderNextQuestion={renderNextQuestion} />
                )}
                {type === 'multiple' && (
                  <PrimaryButton colorProp={blue} minWidth='100%' margin='1rem 0' onClick={renderNextQuestion}>
                    Continue
                  </PrimaryButton>
                )}
              </Container>
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
