import React from 'react';

type HeadingProps = {
  title: string;
  description: string;
  className?: string;
};

export default function Heading({
  title,
  description,
  className
}: HeadingProps) {
  return (
    <div className={className}>
      <h2 className="heading-primary">{title}</h2>
      <p className="heading-secondary">{description}</p>
    </div>
  );
}
