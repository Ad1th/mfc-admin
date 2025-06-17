"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to MFC Admin Portal
        </h1>
        <p className="text-gray-600 mb-6">
          Manage blogs, newsletters, teams, and more — all in one place.
        </p>

        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
