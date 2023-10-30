'use client';

import {
  MdOutlineMail,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from 'react-icons/md';

type TformType = 'text' | 'password';

type TformInputProps = {
  type: TformType;
  label: string;
  id: string;
  placeholder?: string;
  categoryRight?: string;
  onRightBtnClick?: () => void;
};

export const FormInput = ({
  type,
  label,
  id,
  categoryRight,
  onRightBtnClick,
}: TformInputProps) => {
  const rightSection = {
    email: <MdOutlineMail color="#334155" />,
    password:
      type === 'password' ? (
        <MdOutlineVisibility color="#334155" />
      ) : (
        <MdOutlineVisibilityOff color="#334155" />
      ),
  };

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=""
        className="peer pl-0.5 pr-[2.8rem] focus:border-red-600 placeholder-transparent"
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3 ml-[1px] text-xs font-medium text-slate-800 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-slate-800 cursor-text transition-all"
      >
        {label}
      </label>
      {categoryRight && (
        <div
          className="absolute h-full aspect-square right-0 -top-0.5 flex justify-center items-center hover:bg-slate-50 hover:cursor-pointer"
          onClick={() => (onRightBtnClick ? onRightBtnClick() : null)}
        >
          {rightSection[categoryRight as keyof typeof rightSection]}
        </div>
      )}
    </div>
  );
};
