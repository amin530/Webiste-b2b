import { Suspense } from 'react';
import ResetPasswordClient from '@/components/ResetPasswordClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ResetPasswordClient />
    </Suspense>
  );
}

export const dynamic = 'force-dynamic';
