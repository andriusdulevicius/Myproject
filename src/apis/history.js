import { navigate, withPrefix } from 'gatsby';

export const useRouter = () => {
  return {
    goToLanding: () => {
      navigate(withPrefix('/'));
    },
    goToQuiz: () => {
      navigate(withPrefix('/quiz'));
    },
    goToLoader: () => {
      navigate(withPrefix('/loader'));
    },
    goToCheckout: () => {
      navigate(withPrefix('/checkout'));
    },
    goToSuccess: () => {
      navigate(withPrefix('/success'));
    },
    goBack: () => {
      navigate(-1);
    },
  };
};
