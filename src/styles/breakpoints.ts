import { useMediaQuery } from 'react-responsive';

export const smMobile = '(max-width: 24rem)'; //384px;
export const mobile = '(max-width: 26.6rem)'; //480px;
export const tablet = '(max-width: 48rem)'; //768px;
export const laptop = '(max-width: 64rem)'; //1024px;

export const useQuery = () => ({
  isMobileS: useMediaQuery({ query: smMobile }),
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: tablet }),
  isLaptop: useMediaQuery({ query: laptop }),
});
