import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getLocalStorageItem, setLocalStorageItem } from './localStorage';
import { submitForm } from './submitForm';
import { welcomeUser } from './toastify';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export {
  cn,
  getLocalStorageItem,
  setLocalStorageItem,
  submitForm,
  welcomeUser,
};
