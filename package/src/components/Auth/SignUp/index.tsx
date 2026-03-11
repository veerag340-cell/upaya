"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useContext, useState } from "react";
import Loader from "@/components/Common/Loader";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const SignUp = ({ signUpOpen }: { signUpOpen?: any }) => {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = (e: any) => {

    e.preventDefault();

    setLoading(true);

    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then(() => {

        toast.success("Successfully registered");
        setLoading(false);

        setTimeout(() => {
          signUpOpen(false);
        }, 1000);

        authDialog?.setIsUserRegistered(true);

        setTimeout(() => {
          authDialog?.setIsUserRegistered(false);
        }, 1000);

        router.push("/");

      })
      .catch((err) => {

        toast.error(err.message);
        setLoading(false);

      });

  };

  return (

    <div className="w-full">

      <div className="flex justify-center mb-6 mt-1 scale-90">
        <Logo />
      </div>

      <SocialSignUp />

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
            placeholder="Name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-medium text-white mt-3 hover:bg-blue-700 transition"
        >
          Sign Up {loading && <Loader />}
        </button>

      </form>

      <div className="text-center mt-6 text-sm">

        <p className="mb-3">

          By creating an account you agree with our{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Policy
          </a>

        </p>

        <span>

          Already have an account{" "}

          <Link href="/" className="text-primary hover:underline">
            Sign In
          </Link>

        </span>

      </div>

    </div>

  );

};

export default SignUp;