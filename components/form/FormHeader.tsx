'use client';

import { cn } from '@/lib/utils';

type FormHeaderProps = {
  formType: 'signup' | 'signin';
  wrapperStyles?: string;
};

export const FormHeader = ({ formType, wrapperStyles }: FormHeaderProps) => {
  return (
    <div className={cn('text-center', wrapperStyles)}>
      <h2
        className={cn('max-[299.5px]:text-lg text-xl font-semibold text-black')}
      >
        {formType === 'signin' ? 'Welcome back ' : 'Welcome '}
        <div
          className={cn('max-[299.5px]:text-xl italic text-3xl inline-block')}
        >
          Quizzer&nbsp;
          <span className={cn('max-[299.5px]:text-xl not-italic text-3xl')}>
            !
          </span>
        </div>
      </h2>
    </div>
  );
};
