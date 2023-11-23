import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export default function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  let variantStyle: string;

  switch (variant) {
    case 'primary':
      variantStyle = 'primary';
      break;
    case 'secondary':
      variantStyle = 'secondary';
      break;
    case 'tertiary':
      variantStyle = 'tertiary';
      break;
  }

  return (
    <button className={`${variantStyle} button`} {...props}>
      {children}
    </button>
  );
}
