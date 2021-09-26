import styled from 'styled-components';
import { TextBase } from './TextBase';

export const RegularText = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '1.125rem'};
  line-height: ${({ lineHeight }) => lineHeight || '2rem'};
`;
export const RegularTextMobile = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
`;

export const SmallText = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
`;
export const SmallTextMobile = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '0.875rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.125rem'};
`;

export const CaptionText = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '0.875rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.375rem'};
`;
export const CaptionTextMobile = styled(TextBase)`
  font-size: ${({ fontSize }) => fontSize || '0.75rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.25rem'};
`;
