'use client';
import React from 'react';
import Button from 'components/Form/Button';
import { useGlobalDataContext } from 'context/DataContext';

export default function PrevAndNextButton() {
  const { step, setStep } = useGlobalDataContext();
  const isFinalStep = step === 4 ? 'Confirm' : 'Next Step';
  const isFirstStep = step === 1 && 'one-button-active';
  const isLastNextButton = step === 4 ? 'tertiary' : 'primary';

  const handlePrevButton = () => {
    setStep((step) => step - 1);
  };

  const handleNextButton = (event: React.MouseEvent) => {
    event.preventDefault();

    if (step < 5) {
      setStep((step) => step + 1);
    }
  };

  return (
    <div className={`buttons ${isFirstStep}`}>
      {step > 1 && (
        <Button variant="secondary" onClick={handlePrevButton}>
          Go Back
        </Button>
      )}

      <Button
        type="submit"
        variant={isLastNextButton}
        {...(step !== 1 && {
          onClick: handleNextButton
        })}
      >
        {isFinalStep}
      </Button>
    </div>
  );
}
