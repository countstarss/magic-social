// app/error.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <div className='flex flex-col items-center text-center pt-[25vh] scale-125'>
        <h1 className='text-lg w-1/3'>If you see this message, there may be a network problem that caused the crash. Please wait for the network to load.</h1>
      </div>
    </div>
  );
}
