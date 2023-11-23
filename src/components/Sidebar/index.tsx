'use client';

import React from 'react';
import { useGlobalDataContext } from 'context/DataContext';
import { stepsInfo } from './data';

export default function Sidebar() {
  const { step } = useGlobalDataContext();
  return (
    <>
      <aside className="sidebar">
        {stepsInfo.map((stepItem) => {
          const currentStep =
            step === stepItem.id || (step === 5 && stepItem.id === 4);

          return (
            <div key={stepItem.id} className="wrapper">
              <span className={`identifier ${currentStep && 'active-step'}`}>
                {stepItem.id}
              </span>
              <div className="sidebar-content">
                <span className="sidebar-name">{stepItem.name}</span>
                <span className="sidebar-description">
                  {stepItem.description}
                </span>
              </div>
            </div>
          );
        })}
      </aside>
    </>
  );
}
