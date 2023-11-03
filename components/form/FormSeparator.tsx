'use client';

import { Separator } from '../ui';

type FormSeparatorProps = {
  label?: string;
};

export const FormSeparator = ({ label }: FormSeparatorProps) => {
  return (
    <div className="@container grid grid-cols-3 items-center w-full gap-2">
      <Separator decorative={false} className='' />
      <p className='text-[0.6rem] @3xs:text-xs text-slate-400 text-center'>{label}</p>
      <Separator decorative={true} className='' />
    </div>
  );
};
