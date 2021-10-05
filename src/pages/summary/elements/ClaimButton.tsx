import React from 'react';
import { useRouter } from 'apis/history';
import { PrimaryButton } from 'components';
import { blue } from 'styles/colors';

export const ClaimButton: React.FC = () => {
  const { goToCheckout } = useRouter();
  return (
    <PrimaryButton colorProp={blue} maxWidth='24rem' margin='1.5rem 0' onClick={goToCheckout}>
      Claim your fresh mind back
    </PrimaryButton>
  );
};
