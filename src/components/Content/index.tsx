'use client';
import React from 'react';
import { useGlobalDataContext } from 'context/DataContext';
import StepFour from './Steps/StepFour';
import StepOne from './Steps/StepOne';
import StepThree from './Steps/StepThree';
import StepTwo from './Steps/StepTwo';
import ThankYou from './ThankYou';

export default function Content() {
  const { step } = useGlobalDataContext();

  const RenderSteps = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <ThankYou />;
    }
  };

  return (
    <section className="content">
      <RenderSteps />
    </section>
  );
}
