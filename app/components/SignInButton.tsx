"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from 'next/navigation';

function SignInButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    return (
      <button
        className="px-12 py-4 border rounded-xl bg-red-300"
        onClick={() => signOut()}
      >
        {session.user.name}님 Log Out
      </button>
    );
  }

  return (
    <div>
      <button
      className="px-12 py-4 border rounded-xl bg-yellow-300"
      onClick={() => signIn()}
      >
      LogIn
      </button>
      <button
      className="px-12 py-4 border rounded-xl bg-yellow-300"
      onClick={() => router.push("./api/user")}
      >
      Register
      </button>
    </div>
  );
}

export default SignInButton;