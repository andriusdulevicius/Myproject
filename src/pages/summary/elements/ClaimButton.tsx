import React from 'react';
import { PrimaryButton } from 'components';
import { blue } from 'styles/colors';

export const ClaimButton: React.FC = () => {
  return (
    <PrimaryButton colorProp={blue} maxWidth='24rem' margin='1.5rem 0'>
      Claim your fresh mind back
    </PrimaryButton>
  );
};
