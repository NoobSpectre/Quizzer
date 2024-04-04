"use client";

import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  // UI to be updated
  return (
    <main className="h-screen grid place-content-center">
      <ThreeDots color="#dc2626" />
    </main>
  );
}
