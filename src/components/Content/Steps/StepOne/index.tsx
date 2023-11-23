import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from 'components/Form/Input';
import { RuleProps, Schema } from 'components/Form/Input/validateSchema';
import Heading from 'components/Heading';
import { useGlobalDataContext } from 'context/DataContext';
import PrevAndNextButton from '../PrevAndNextButton';

export default function StepOne() {
  const { setStep } = useGlobalDataContext();

  const formContext = useForm<RuleProps>({
    resolver: zodResolver(Schema),
    mode: 'onBlur'
  });

  const onSubmit: SubmitHandler<RuleProps> = async () => {
    if (formContext.formState.errors) {
      setStep((step) => step + 1);
    }
  };

  return (
    <>
      <Heading
        title="Personal info"
        description="Please provide your name, email address, and phone number."
        className="mb-12 md:mb-40"
      />
      <FormProvider {...formContext}>
        <form onSubmit={formContext.handleSubmit(onSubmit)} method="post">
          <Input
            className="mb-24"
            name="name"
            label="Name"
            placeholder="e.g. Stephen King"
          />
          <Input
            className="mb-24"
            name="email"
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
          />
          <Input
            className="mb-24"
            name="phone"
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
          />
          <PrevAndNextButton />
        </form>
      </FormProvider>
    </>
  );
}
