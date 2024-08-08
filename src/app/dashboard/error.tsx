// app/dashboard/error.tsx
'use client';

import { useEffect } from "react";

export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Dashboard error:', error);
  }, [error]);

  return (
    <div>
      <h2>Dashboard encountered an error!</h2>
    </div>
  );
}
