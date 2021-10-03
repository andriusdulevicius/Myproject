const QUIZ_QUOESTIONS_API =
  'https://rnd.kilohealthservices.com/api/quizzes/main?api_token=d88ab57d-4cbe-4826-b593-2c1b2f8b657f';
const PLANS_DATA_API =
  'https://rnd.kilohealthservices.com/api/quizzes/products?api_token=d88ab57d-4cbe-4826-b593-2c1b2f8b657f';

export const getQuizQuestions = async () => {
  const data = await fetch(QUIZ_QUOESTIONS_API);
  const result = await data.json();
  return result.data.questions;
};

export const getPlansData = async () => {
  const data = await fetch(PLANS_DATA_API);
  const result = await data.json();
  return result.data.questions;
};
