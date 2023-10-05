import { useState } from 'react';

export const stepsList = [
  {
    name: 'your info',
    status: 'pendent',
  },
  {
    name: 'select plan',
    status: 'pendent',
  },
  {
    name: 'add-ons',
    status: 'pendent',
  },
  {
    name: 'summary',
    status: 'pendent',
  },
];

export const useControlStep = (steps: any) => {
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  if (currentStep < 4) {
    stepsList[currentStep].status = 'sucess';
  }

  return {
    currentComponent: steps[currentStep],
    changeStep,
    stepsList,
  };
};
