"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/todos");
  }
  return (
    <div>
      <div>I am Practicing React Query</div>
      <button
        onClick={handleClick}
        className="bg-blue-950 text-white font-semibold
         rounded-xl px-4 py-2 cursor-pointer ml-5"
      >
        Todos
      </button>
    </div>
  );
}
