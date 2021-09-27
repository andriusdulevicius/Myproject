import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IntermissionCard } from './sections/IntermissionCard';
import { AnswerCard } from './elements/AnswerCard';
import { useQuery } from 'styles/breakpoints';
import { blue, grey_white } from 'styles/colors';
import {
  Image,
  Svg,
  AbsoluteBox,
  TextBase,
  Container,
  H3Mobile,
  TextBaseBold,
  FlexWrapper,
  PrimaryButton,
  SmallTextMobile,
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
  const { isMobileS, isMobile, isLaptop } = useQuery();
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

  const handleQuiz = () => {
    setQuestion(question + 1);
  };

  return (
    <QuizPage>
      <AbsoluteBox left='0rem' top='-3rem' zIndex={1}>
        <Image src='top_cloud' />
      </AbsoluteBox>
      <AbsoluteBox bottom='-1rem' right='-1rem' zIndex={1}>
        <Image src='bottom_cloud' />
      </AbsoluteBox>

      {questions &&
        questions.slice(question - 1, question).map((q: DataTypes, index: number) => {
          const { type, key, label, custom, options } = q;
          return (
            <Container key={key} zIndex={2}>
              <FlexWrapper justifyContent='space-between'>
                <Svg src='go_back' onClick={() => setQuestion(question - 1)} />
                <TextBaseBold>
                  {question} of {questions.length}
                </TextBaseBold>
              </FlexWrapper>

              {type === 'intermission' && <IntermissionCard />}
              {label && <H3Mobile>{label}</H3Mobile>}
              {custom && custom.sublabel && <SmallTextMobile>{custom.sublabel}</SmallTextMobile>}
              {options && (
                <FlexWrapper gap='0.6rem' padding='0rem'>
                  {options.map(({ label, value }) => (
                    <AnswerCard
                      key={value}
                      labelProp={label}
                      type={type}
                      question={question}
                      setQuestion={setQuestion}
                    />
                  ))}
                </FlexWrapper>
              )}
              {type === 'statement' && (
                <StatementCard statementKey={key} custom={custom} question={question} setQuestion={setQuestion} />
              )}
              {(type === 'multiple' || type === 'intermission') && (
                <PrimaryButton colorProp={blue} minWidth='100%' margin='1rem 0' onClick={handleQuiz}>
                  Continue
                </PrimaryButton>
              )}
              {type === 'intermission' && (
                <TextBase margin='5rem 0 0 0' fontSize='0.85rem'>
                  Disclaimer: Scores on the DASS-21 do not indicate a diagnosis. They simply provide a measure of
                  severity based on the three assessed domains. To determine any potential diagnosis, discuss your
                  results with your doctor or a qualified mental health provider.
                </TextBase>
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
