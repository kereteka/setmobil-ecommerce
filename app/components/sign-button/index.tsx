'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@mantine/core';

const SignButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    );
  }
  return <Button onClick={() => signIn()}>Sign In</Button>;
};

export default SignButton;
