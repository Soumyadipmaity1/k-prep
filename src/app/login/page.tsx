"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full max-w-md p-8 border-fuchsia-400 border space-y-8 bg-fuchsia-50 rounded-xl shadow-fuchsia-500 shadow-sm">
        <h2 className="text-2xl font-bold text-fuchsia-500 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-fuchsia-600 rounded-md hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        {/* <div className="text-sm text-center">
          <Link href="/forgot-password" className="text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </Link>
        </div>
        <div className="text-sm text-center">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
