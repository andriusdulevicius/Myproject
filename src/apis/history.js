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
    goToSummary: () => {
      navigate('/summary');
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
