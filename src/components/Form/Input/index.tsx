import React from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = React.ComponentProps<'input'>;

export default function Input({
  label,
  id,
  name,
  className,
  ...props
}: InputProps & {
  label?: string;
  name: string;
}) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name];

  return (
    <>
      {label && (
        <label className="label-field" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`input-field ${error && 'error'} ${className}`}
          id={id}
          {...register(name)}
          {...props}
        />
        {error ? (
          <p className="absolute -top-32 right-0 text-red-blood text-14 font-bold">
            {String(error.message)}
          </p>
        ) : null}
      </div>
    </>
  );
}
