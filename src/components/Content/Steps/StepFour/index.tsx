import React from 'react';
import Heading from 'components/Heading';
import { useGlobalDataContext } from 'context/DataContext';
import { addons } from '../data';
import PrevAndNextButton from '../PrevAndNextButton';

export default function StepFour() {
  const { plan, pack, price, addon } = useGlobalDataContext();
  const [textPlan, setTextPlan] = React.useState<null | string>(null);
  const addonsItem: number[] = [];
  let total;

  React.useEffect(() => {
    switch (plan) {
      case 1:
        return setTextPlan('Acarde');
      case 2:
        return setTextPlan('Advanced');
      case 3:
        return setTextPlan('Pro');
    }
  }, [plan]);

  return (
    <>
      <Heading
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
        className="mb-40"
      />

      <div className="bg-red-100" style={{ padding: '20px' }}>
        teste
      </div>

      <div className="p-16 bg-pool rounded-lg">
        <div className="flex items-center justify-between">
          <span>
            <h5 className="text-denim font-medium">
              {textPlan} ({!pack ? 'Monthly' : 'Yearly'})
            </h5>
            <span className="text-14 text-medium-grey hover:text-purple duration-200 underline cursor-pointer">
              Change
            </span>
          </span>
          <span className="text-denim font-bold">
            ${price[0] || '9'}/{price[1] || 'mo'}
          </span>
        </div>
        <span className="block bg-medium-grey h-1 w-full mt-24 mb-16 opacity-20" />
        <div>
          {addon.map((item) => {
            addonsItem.push(Number(addons[item - 1].price[0]));

            const addonsTotal = addonsItem.reduce(
              (acc, current) => acc + current
            );

            total = addonsTotal + Number(price[0]) || 9 + addonsTotal;

            return (
              <span
                key={`${addon[item]}_plan`}
                className="flex justify-between items-center mb-16"
              >
                <span className="text-grey text-14">
                  {addons[item - 1]?.name}
                </span>
                <span className="text-14 text-denim">
                  +${addons[item - 1].price[0]}/{price[1] || 'mo'}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between pt-24 px-16">
        <span className="text-14 text-grey">
          Total (per {price[1] === 'mo' ? 'month' : 'year'})
        </span>
        <span className="text-purple font-bold">
          ${total || price[0] || '9'}/{price[1] || 'mo'}
        </span>
      </div>

      <PrevAndNextButton />
    </>
  );
}
