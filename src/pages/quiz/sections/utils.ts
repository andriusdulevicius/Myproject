export const INTERMISSION_DATA = {
  title: 'Let’s get more answers from you.',
  imgSrc: 'my_pic',
  texts: [
    'We need to have a look more into this situation.',
    'The following questions will help to find out if I am a good fit for your company.',
    'Please select one of the options relevant to you.',
  ],
};

export const QUIZ_DATA = [
  {
    type: 'multiple',
    key: 'main_goals',
    label: 'What skills are must-have ones for your position?',
    custom: {
      sublabel: 'Select all that apply.',
    },
    options: [
      {
        label: 'HTML',
        value: 'html',
      },
      {
        label: 'CSS',
        value: 'css',
      },
      {
        label: 'Javascript',
        value: 'javascript',
      },
      {
        label: 'React(or other library)',
        value: 'react',
      },
      {
        label: 'Gatsby',
        value: 'gatsby',
      },
      {
        label: 'Styled-components',
        value: 'styled_components',
      },
    ],
  },
  {
    type: 'single',
    key: 'experience',
    label: 'How many years of experience needed?',
    options: [
      {
        label: 'Less than 1 year',
        value: 'less_1',
        custom: {
          horizontal: true,
        },
      },
      {
        label: '1-2 years',
        value: '1_2',
        custom: {
          horizontal: true,
        },
      },
      {
        label: '2-4 years',
        value: '2_4',
        custom: {
          horizontal: true,
        },
      },
      {
        label: '5 and more years',
        value: '5_more',
        custom: {
          horizontal: true,
        },
      },
    ],
  },
  {
    type: 'intermission',
    key: 'intermision_one',
  },
  {
    type: 'statement',
    key: 'quick_learning',
    label: 'Can you relate to this statement?',
    custom: {
      fact: 'quick_learning',
      text: 'We as a company value freshly baked developers who are hungry to learn, more than ones with experience but no interest in learning new technologies.',
    },
  },
  {
    type: 'statement',
    key: 'good_communicator',
    label: 'Can you relate to this statement?',
    custom: {
      fact: 'good_communicator',
      text: 'We are looking for a friendly, open-minded people, who communicates well in a team environment.',
    },
  },
  {
    type: 'statement',
    key: 'responsibilities',
    label: 'Can you relate to this statement?',
    custom: {
      fact: 'responsibilities',
      text: 'We like people who takes responsibility seriously.',
    },
  },
  {
    type: 'statement',
    key: 'priorities',
    label: 'Can you relate to this statement?',
    custom: {
      fact: 'priorities',
      text: 'We need people who are able to prioritise given jobs.',
    },
  },
  {
    type: 'statement',
    key: 'individual',
    label: 'Can you relate to this statement?',
    custom: {
      fact: 'individual',
      text: 'We consider applicants with less experience, but a lot of motivation to learn and grow individually.',
    },
  },
];
