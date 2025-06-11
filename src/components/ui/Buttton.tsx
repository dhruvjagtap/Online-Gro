"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/google.com");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={() => {
          handleClick;
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Google
      </button>
    </div>
  );
}
