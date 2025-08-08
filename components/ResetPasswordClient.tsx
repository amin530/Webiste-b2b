'use client';

import { useSearchParams } from 'next/navigation';

export default function ResetPasswordClient() {
  const params = useSearchParams();
  const token = params.get('token');

  return (
    <div>
      <h1>Reset Password</h1>
      <p>Token: {token}</p>
      {/* Your password reset form goes here */}
    </div>
  );
}
