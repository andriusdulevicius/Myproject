import styled from 'styled-components';
import { TextBase } from './TextBase';
import { mobile } from 'styles/breakpoints';

export const RegularText = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '1.125rem'};
  line-height: ${({ lineHeight }) => lineHeight || '2rem'};

  @media ${mobile} {
    font-size: ${({ fontSize }) => fontSize || '1rem'};
    line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
  }
`;

export const SmallText = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};

  @media ${mobile} {
    font-size: ${({ fontSize }) => fontSize || '0.875rem'};
    line-height: ${({ lineHeight }) => lineHeight || '1.125rem'};
  }
`;

export const CaptionText = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '0.875rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.375rem'};

  @media ${mobile} {
    font-size: ${({ fontSize }) => fontSize || '0.75rem'};
    line-height: ${({ lineHeight }) => lineHeight || '1.25rem'};
  }
`;
