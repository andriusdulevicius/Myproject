import { navigate } from 'gatsby';

export const useRouter = () => {
  return {
    goToLanding: () => {
      navigate('/');
    },
    goToQuiz: () => {
      navigate('/quiz');
    },
    goToLoader: () => {
      navigate('/loader');
    },
    goToCheckout: () => {
      navigate('/checkout');
    },
    goToSuccess: () => {
      navigate('/success');
    },
    goBack: () => {
      navigate(-1);
    },
  };
};
