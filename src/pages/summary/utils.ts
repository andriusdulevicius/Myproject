// Personal Summary section

export const PERSONAL_SUMMARY = {
  title: 'Your personal summary',
  stats_label: 'Your answers indicate you may be experiencing:',
  stats: [
    {
      icon: 'moderate_icon',
      title: 'Moderate anxiety',
      subtitle: 'The anxiety score indicates your current level of anxiety.',
    },
    {
      icon: 'severe_icon',
      title: 'Severe stress',
      subtitle: 'The stress score indicates your current level of stress.',
    },
    {
      icon: 'mild_icon',
      title: 'Mild depression',
      subtitle: 'The depression score indicates your current risk of developing severe depression.',
    },
  ],
  sublabel1: 'Your results indicate that you may be experiencing several symptoms of anxiety, stress, and depression.',
  sublabel2: 'Prevent them from becoming a problem and learn how to deal with them at your own pace.',
  results: [
    {
      imgSrc: 'increased_stress_levels',
      indication: true,
      result: 'Your stress levels have increased in the past year',
    },
    {
      imgSrc: 'panic_attack',
      indication: false,
      result: 'You have a 17% chance of having a panic attack in the future',
      info: 'What is panic attack?',
      answer:
        "A panic attack is an unexpected and intensive episode of fear. It triggers severe physical reactions when there is no real danger or apparent cause. Panic attacks can be very frightening. When it occurs, you might think you're losing control, having a heart attack, or even dying.",
    },
  ],
};

// Personal facts section
export const PERSONAL_FACTS = [
  {
    id: 1,
    icon: 'us_flag',
    title: 'Affects 18% of US population',
    subtitle: 'According to ADDA:',
    text: 'Anxiety affect over 40 million US adults annualy. Anxiety is by far the most prevalent mental health disorder.',
  },
  {
    id: 2,
    icon: 'hospital',
    title: '1/3 get help',
    subtitle: 'According to NIMH:',
    text: 'Only 33% of people seek anxiety treatment.',
    text2: 'Don’t delay. Your issues are real, but you are not alone on this journey.',
  },
  {
    id: 3,
    icon: 'woman',
    title: 'Women X2 ',
    subtitle: 'According to ADDA:',
    text: 'Women have a higher chance of anxiety. But, that isn’t all. Women show signs of anxiety much earlier than man as well. Hower only 1/4 of men seek help in general.',
  },
  {
    id: 4,
    icon: 'pill',
    title: 'Pills - Short term solution',
    subtitle: 'According to University of Virginia:',
    text: 'Tranquilizers and sleeping pills may work in the short-term, but they do not help you manage and reduce your anxiety overt time. Anxiety methods are long term solutions which are easy to impliment into your daily routine.',
  },
];
export const PROMOTER_LOGOS = ['healthline', 'bi', 'nyt', 'bbc'];

// Our promise secion

export const OUR_PROMISE_DATA = {
  imgSrc: 'amelia_marrow',
  name: 'Amelia Marrow',
  job_title: 'Behavioral psychologist',
  signature_src: 'amelia_signature',
  texts: [
    "We all have been there. Feeling so overwhelmed at work that it seems not possible to know where to begin. Always trying to keep up with the Joneses. Feeling lonely, stressed, and generally upset due to health, relationships, or the world's overall state.",
    'I have created this course with the sole purpose of helping people like myself learn natural and the most straightforward strategies for dealing with stress, reducing anxiety, and living life worry-free.',
    "Stress doesn't have to follow you every day. It can easily be managed with simple exercises.",
  ],
  disclaimer:
    'Disclaimer: Scores on the DASS-21 do not indicate a diagnosis. They simply provide a measure of severity based on the three assessed domains. To determine any potential diagnosis, discuss your results with your doctor or a qualified mental health provider. For more information check out our Terms and Conditions. ',
};
