import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import type { LoginRequest } from "../types/auth";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginRequest>();

  const mutation = useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    },
  });

  const onSubmit = (data: LoginRequest) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex justify-center items-center p-6">

    <div
      className="
        w-full
        max-w-md
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        shadow-2xl
        p-8
      "
    >
      <div className="text-center mb-8">

        <div className="text-6xl mb-4">
          🔐
        </div>

        <h1 className="text-4xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="text-gray-300 mt-2">
          Login to access your secure dashboard
        </p>

      </div>

      {mutation.isError && (
        <div
          className="
            mb-5
            bg-red-500/20
            border
            border-red-400
            text-white
            rounded-xl
            p-3
          "
        >
          ❌ Invalid Credentials
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <label className="block text-gray-200 mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="
              w-full
              bg-white/10
              border
              border-white/20
              rounded-xl
              px-4
              py-3
              text-white
              placeholder-gray-400
              outline-none
              focus:ring-2
              focus:ring-cyan-400
            "
            {...register("email")}
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="
              w-full
              bg-white/10
              border
              border-white/20
              rounded-xl
              px-4
              py-3
              text-white
              placeholder-gray-400
              outline-none
              focus:ring-2
              focus:ring-cyan-400
            "
            {...register("password")}
          />
        </div>

        <button
          disabled={mutation.isPending}
          className="
            w-full
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            py-3
            rounded-xl
            font-semibold
            transition-all
            duration-300
            shadow-lg
          "
        >
          {mutation.isPending
            ? "Signing In..."
            : "Sign In"}
        </button>
      </form>

      <div className="mt-8 text-center">

        <p className="text-gray-300">
          Don't have an account?
        </p>

        <Link
          to="/register"
          className="
            text-cyan-300
            hover:text-cyan-200
            font-semibold
          "
        >
          Create Account
        </Link>

      </div>
    </div>
  </div>
  );
};

export default Login;
