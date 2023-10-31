'use client';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@mantine/hooks';

type FormHeaderProps = {
  formType: 'signup' | 'signin';
  wrapperStyles?: string;
};

export const FormHeader = ({ formType, wrapperStyles }: FormHeaderProps) => {
  const media = useMediaQuery('(max-width: 299.5px)');

  return (
    <div className={cn('text-center', wrapperStyles)}>
      <h2
        className={cn('text-xl font-semibold text-black', { 'text-lg': media })}
      >
        {formType === 'signin' ? 'Welcome back ' : 'Welcome '}
        <div
          className={cn('italic text-3xl inline-block', { 'text-xl': media })}
        >
          Quizzer&nbsp;
          <span className={cn('not-italic text-3xl', { 'text-xl': media })}>
            !
          </span>
        </div>
      </h2>
    </div>
  );
};
