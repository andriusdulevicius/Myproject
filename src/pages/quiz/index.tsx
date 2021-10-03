import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuizQuestions } from 'apis/fetch';
import { navigate } from '@reach/router';
import { IntermissionCard } from './sections/IntermissionCard';
import { StatementCard } from './sections/StatementCard';
import { AnswerCard } from './elements/AnswerCard';
import { useQuery } from 'styles/breakpoints';
import { blue, grey_white } from 'styles/colors';
import {
  Svg,
  QuizBackground,
  Container,
  H2,
  TextBaseBold,
  FlexWrapper,
  PrimaryButton,
  RegularText,
  TextWrapper,
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

const Quiz: React.FC<DataTypes> = () => {
  const { isMobile } = useQuery();
  const [questions, setQuestions] = useState<DataTypes[] | []>([]);
  const [question, setQuestion] = useState<number>(1);

  useEffect(() => {
    (async () => {
      const result = await getQuizQuestions();
      setQuestions(result);
    })();
  }, []);

  const renderNextQuestion = () => {
    if (question <= 9) setQuestion(question + 1);
    if (question > 9) navigate('/calculating/');
    if (question < 1) navigate('/home/');
  };

  return (
    <QuizPage>
      <QuizBackground />
      {questions &&
        questions.slice(question - 1, question).map((q: DataTypes) => {
          const { type, key, label, custom, options } = q;
          return (
            <Container key={key} zIndex={2}>
              <FlexWrapper justifyContent='space-between' padding='1rem 0 0 0' maxWidth='80rem'>
                <Svg src='go_back' onClick={() => setQuestion(question - 1)} />
                <TextWrapper fontWeight={isMobile ? 700 : 400}>
                  {question} of {questions.length}
                </TextWrapper>
              </FlexWrapper>
              <Container
                paddingTop={isMobile ? '1rem' : '6rem'}
                maxWidth='35rem'
                textAlign={isMobile ? 'left' : 'center'}
              >
                {type === 'intermission' && <IntermissionCard renderNextQuestion={renderNextQuestion} />}
                {label && <H2>{label}</H2>}
                {custom && custom.sublabel && <RegularText>{custom.sublabel}</RegularText>}
                {options && (
                  <FlexWrapper gap='0.6rem'>
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
  background-color: ${grey_white};
  height: 100vh;
  padding: 0 1rem;
`;
