import React from 'react';
import styled from 'styled-components';
import { H3, RegularText } from 'components';

const TermsConditions: React.FC = () => {
  return (
    <StyledTermsConditions>
      <H3 textAlign='center'>Terms and Conditions:</H3>
      <RegularText>
        This Privacy Policy will inform you about the types of personal data we collect, the purposes for which we use
        the data, the ways in which the data is handled and your rights with regard to your personal data. Furthermore,
        this Privacy Policy is intended to satisfy the obligation of transparency under the EU General Data Protection
        Regulation 2016/679 ("GDPR") and the laws implementing GDPR. For the purpose of this Privacy Policy the Data
        Controller of personal data is Wasai LLC and our contact details are set out in the Contact section at the end
        of this Privacy Policy. Data Controller means the natural or legal person who (either alone or jointly or in
        common with other persons) determines the purposes for which and the manner in which any personal information
        are, or are to be, processed. For purposes of this Privacy Policy, "Your Information" or "Personal Data" means
        information about you, which may be of a confidential or sensitive nature and may include personally
        identifiable information ("PII") and/or financial information. PII means individually identifiable information
        that would allow us to determine the actual identity of a specific living person, while sensitive data may
        include information, comments, content and other information that you voluntarily provide. Lorem Ipsum collects
        information about you when you use our Website to access our services, and other online products and services
        (collectively, the “Services”) and through other interactions and communications you have with us. The term
        Services includes, collectively, various applications, websites, widgets, email notifications and other mediums,
        or portions of such mediums, through which you have accessed this Privacy Policy. We may change this Privacy
        Policy from time to time. If we decide to change this Privacy Policy, we will inform you by posting the revised
        Privacy Policy on the Site. Those changes will go into effect on the "Last updated" date shown at the end of
        this Privacy Policy. By continuing to use the Site or Services, you consent to the revised Privacy Policy. We
        encourage you to periodically review the Privacy Policy for the latest information on our privacy practices.
      </RegularText>
    </StyledTermsConditions>
  );
};

export default TermsConditions;

const StyledTermsConditions = styled.section`
  padding: 2rem;
`;
