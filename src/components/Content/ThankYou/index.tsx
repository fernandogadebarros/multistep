import React from 'react';
import Image from 'next/image';

export default function ThankYou() {
  return (
    <div className="thank-you">
      <Image
        src="icon-thank-you.svg"
        height={80}
        width={80}
        alt="Thank You Icon"
      />
      <h3 className="title">Thank You</h3>
      <p className="description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
