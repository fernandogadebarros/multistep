'use client';
import React from 'react';
import Heading from 'components/Heading';
import { useGlobalDataContext } from 'context/DataContext';
import Image from 'next/image';
import { plans } from '../data';
import PrevAndNextButton from '../PrevAndNextButton';

export default function StepTwo() {
  const {
    setPlan,
    setPack,
    pack,
    plan: selectedPlan,
    setPrice
  } = useGlobalDataContext();
  const isYearlyText = pack ? 'yr' : 'mo';

  const handleSelectedPlan = (
    event: React.MouseEvent<HTMLDivElement>,
    value?: string
  ) => {
    setPlan(Number(event?.currentTarget?.getAttribute('data-plan')));
    setPrice([String(value), isYearlyText]);
  };

  return (
    <>
      <Heading
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
        className="mb-0 md:mb-40"
      />
      <div className="plan-content">
        {plans.map((plan) => (
          <span
            key={plan.id}
            className={`plan-item ${selectedPlan === plan.id && 'active'}`}
            data-plan={plan.id}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              handleSelectedPlan(e, plan.price[pack ? 1 : 0])
            }
          >
            <Image
              src={plan.img.src}
              height={40}
              width={40}
              alt={plan.img.alt}
              loading="lazy"
            />
            <span>
              <h4 className="plan-title">{plan.name}</h4>
              <p className="plan-description">
                ${plan.price[pack ? 1 : 0]}/{isYearlyText}
              </p>
            </span>
          </span>
        ))}
      </div>
      <div className="select-plan">
        <div className="flex items-center gap-12">
          <span className={`plan-text ${pack && 'active'}`}>Monthly</span>
          <span
            className="toggler"
            onClick={() => {
              setPack(!pack);
              setPrice([
                plans[selectedPlan - 1].price[pack ? 0 : 1],
                pack ? 'mo' : 'yr'
              ]);
            }}
          >
            <span className={`switcher ${pack && 'active'}`} />
          </span>
          <span className={`plan-text ${!pack && 'active'}`}>Yearly</span>
        </div>
      </div>
      <PrevAndNextButton />
    </>
  );
}
