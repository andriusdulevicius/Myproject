import React from 'react';
import styled from 'styled-components';
import { H3, RegularText, TextWrapper } from 'components';

const Contacts: React.FC = () => {
  return (
    <StyledContacts>
      <H3>Contacts:</H3>
      <RegularText>
        <TextWrapper>Name:</TextWrapper> Andrius Dulevicius
      </RegularText>
      <RegularText>
        <TextWrapper>Position:</TextWrapper> Junior Developer
      </RegularText>
      <RegularText>
        <TextWrapper>Company:</TextWrapper> Kilo.Health
      </RegularText>
      <RegularText>
        <TextWrapper>Email:</TextWrapper> andriusdulevicius@gmail.com
      </RegularText>
      <RegularText>
        <TextWrapper>Phone:</TextWrapper> +3706 0914807
      </RegularText>
    </StyledContacts>
  );
};

export default Contacts;

const StyledContacts = styled.section`
  padding: 2rem;
  text-align: center;
`;
