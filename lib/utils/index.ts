import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { submitForm } from './submitForm';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn, submitForm };
