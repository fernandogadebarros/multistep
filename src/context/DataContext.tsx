'use client';
import React from 'react';

type DataContextProps = {
  step: number;
  plan: number;
  pack: boolean;
  price: (number | string)[];
  addon: number[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPlan: React.Dispatch<React.SetStateAction<number>>;
  setPack: React.Dispatch<React.SetStateAction<boolean>>;
  setPrice: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  setAddon: React.Dispatch<React.SetStateAction<number[]>>;
};

const DataContext = React.createContext<DataContextProps | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [step, setStep] = React.useState(1);
  const [plan, setPlan] = React.useState(1);
  const [pack, setPack] = React.useState(false);
  const [price, setPrice] = React.useState<(number | string)[]>([]);
  const [addon, setAddon] = React.useState<number[]>([]);

  return (
    <DataContext.Provider
      value={{
        step,
        plan,
        pack,
        price,
        addon,
        setStep,
        setPlan,
        setPack,
        setPrice,
        setAddon
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error('useContext should be into the provider');
  return context;
};
