'use client';

import { ComponentProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  MdOutlineMail,
  MdOutlinePerson,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from 'react-icons/md';

type FormInputProps = {
  label: string;
  id: string;
  type: 'text' | 'password';
  rightCategory?: string;
  onRightBtnClick?: () => void;
  register?: UseFormRegisterReturn;
  error?: string;
} & ComponentProps<'input'>;

export const FormInput = ({
  label,
  id,
  type,
  rightCategory,
  onRightBtnClick,
  register,
  error,
  ...props
}: FormInputProps) => {
  const rightSection = {
    name: <MdOutlinePerson color="#334155" />,
    email: <MdOutlineMail color="#334155" />,
    password:
      type === 'password' ? (
        <MdOutlineVisibility color="#334155" />
      ) : (
        <MdOutlineVisibilityOff color="#334155" />
      ),
  };

  return (
    <div className="@container relative">
      <input
        className="peer w-full pl-[1px] pr-[2.8rem] focus:border-indigo-700 placeholder-transparent text-slate-800"
        placeholder={props.placeholder ? props.placeholder : ''}
        autoComplete="off"
        id={id}
        type={type}
        {...props}
        {...register}
      />
      {error && (
        <p className="absolute text-[0.6rem] @[15.5rem]:text-xs text-red-600 ml-[2px]">
          {error}
        </p>
      )}
      <label
        htmlFor={id}
        className="absolute left-0 -top-3 ml-[2px] text-xs font-medium text-slate-800 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-placeholder-shown:text-slate-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-slate-800 cursor-text transition-all"
      >
        {label}
      </label>
      {rightCategory && (
        <div
          className="absolute h-full aspect-square right-0 -top-0.5 flex justify-center items-center hover:bg-slate-50 hover:cursor-pointer"
          onClick={() => (onRightBtnClick ? onRightBtnClick() : null)}
        >
          {rightSection[rightCategory as keyof typeof rightSection]}
        </div>
      )}
    </div>
  );
};
