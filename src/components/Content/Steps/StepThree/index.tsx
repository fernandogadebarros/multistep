'use client';
import React from 'react';
import Heading from 'components/Heading';
import { useGlobalDataContext } from 'context/DataContext';
import { addons } from '../data';
import PrevAndNextButton from '../PrevAndNextButton';

export default function StepThree() {
  const { addon, setAddon, price } = useGlobalDataContext();

  const handleCheckboxChange = (addonId: number) => {
    setAddon((prevSelectedAddons) => {
      if (addon.includes(addonId)) {
        return prevSelectedAddons.filter((id) => id !== addonId);
      } else {
        return [...prevSelectedAddons, addonId];
      }
    });
  };

  return (
    <>
      <Heading
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
        className="mb-40"
      />
      {addons.map((item) => (
        <div
          key={item.id}
          className={`addons ${addon.includes(item?.id) && 'active'}`}
          onClick={() => handleCheckboxChange(item.id)}
        >
          <div className="addon-item">
            <label className="relative">
              <input
                type="checkbox"
                className="addon-checkbox"
                checked={addon.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span className="addon-indicator" />
            </label>
            <div className="addon-info">
              <span>
                <h4 className="addon-name">{item.name}</h4>
                <p className="addon-description">{item.description}</p>
              </span>
              <span className="addon-price">
                ${item.price[0]}/{price[1] || 'mo'}
              </span>
            </div>
          </div>
        </div>
      ))}
      <PrevAndNextButton />
    </>
  );
}
