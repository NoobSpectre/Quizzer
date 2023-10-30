'use client';

import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen">
      <div className="h-full grid place-content-center">
        <ThreeDots color='#000' />
      </div>
    </div>
  );
}
