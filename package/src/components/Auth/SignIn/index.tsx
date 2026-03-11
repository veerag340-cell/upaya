"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const Signin = ({ signInOpen }: { signInOpen?: any }) => {

  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");

  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.status === 200) {

      setTimeout(() => {
        signInOpen(false);
      }, 1000);

      authDialog?.setIsSuccessDialogOpen(true);

      setTimeout(() => {
        authDialog?.setIsSuccessDialogOpen(false);
      }, 1000);

    }

  };

  return (

    <div className="w-full">

      <div className="flex justify-center mb-6 mt-1 scale-90">
        <Logo />
      </div>

      <SocialSignIn />

      <div className="relative my-6 text-center">

        <span className="absolute left-0 top-1/2 w-full h-px bg-gray-200"></span>

        <span className="relative bg-white px-3 text-xs text-gray-500">
          OR
        </span>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="mb-4">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

        </div>

        <div className="mb-4">

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white mt-3 hover:bg-blue-700 transition"
        >
          Sign In
        </button>

      </form>

      <div className="text-center mt-6 text-sm">

        <Link href="/" className="block mb-2 hover:text-primary">
          Forget Password?
        </Link>

        <span>
          Not a member yet{" "}
          <Link href="/" className="text-primary hover:underline">
            Sign Up
          </Link>
        </span>

      </div>

    </div>

  );
};

export default Signin;