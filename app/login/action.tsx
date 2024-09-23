'use server'

import { NextResponse } from 'next/server';

export async function login(formLogin: FormData): Promise<NextResponse> {
  const email = formLogin.get('email') as string;
  const password = formLogin.get('password') as string;

  // Check credentials
  if (email === 'user@example.com' && password === 'password') {
    return NextResponse.redirect(new URL('/manage', 'http://localhost:3000'));
  } else {
    return NextResponse.redirect(new URL('/login', 'http://localhost:3000'));
  }
}
