'use client';

type FormHeaderProps = {
  formType: 'signup' | 'signin';
};

export const FormHeader = ({ formType }: FormHeaderProps) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-black">
        {formType === 'signin' ? 'Welcome back ' : 'Welcome '}
        <div className="italic text-3xl">
          Quizzer<span className="text-3xl not-italic"> !</span>
        </div>
      </h2>
    </div>
  );
};
