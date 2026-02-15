// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-600">
        Nicolas Ordonez
      </h1>
      <p className="mt-4 text-xl">
        Software Engineer.
      </p>
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-sm text-gray-500 italic">
          Environment: WSL2 + Ubuntu + Next.js + TS
        </p>
      </div>
    </main>
  );
}