import React from 'react';
import { SocialIcon } from 'react-social-icons';
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
        <TextWrapper>Email:</TextWrapper> andriusdulevicius@gmail.com
      </RegularText>
      <RegularText>
        <TextWrapper>Phone:</TextWrapper> +3706 0914807
      </RegularText>
      <StyledRegularText>
        <TextWrapper>Socials: </TextWrapper>
        <SocialIcon url='https://www.linkedin.com/in/andrius-dulevicius-9002861b6/' />
        <SocialIcon url='https://www.facebook.com/andrius.dulevicius/' />
        <SocialIcon url='https://www.instagram.com/andriusdulevicius/' />
      </StyledRegularText>
    </StyledContacts>
  );
};

export default Contacts;

const StyledContacts = styled.section`
  padding: 2rem;
  text-align: center;
`;

const StyledRegularText = styled(RegularText)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
