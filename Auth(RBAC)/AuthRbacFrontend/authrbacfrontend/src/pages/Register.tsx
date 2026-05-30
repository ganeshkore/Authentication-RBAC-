
import { useForm } from 'react-hook-form';
import type { RegisterRequest } from '../types/auth';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/authApi';
import { Link } from 'react-router-dom';


const Register = () => {

 const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterRequest>();

const mutation = useMutation({
    mutationFn: registerUser,

    onSuccess: (message) => {
      alert(message);
      reset();
    },

    onError: () => {
      alert("Registration Failed");
    },
  });

  const onSubmit = (data: RegisterRequest) => {
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
          🚀
        </div>

        <h1 className="text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="text-gray-300 mt-2">
          Register to access secure resources
        </p>

      </div>

      {mutation.isSuccess && (
        <div
          className="
            mb-5
            bg-green-500/20
            border
            border-green-400
            text-white
            rounded-xl
            p-3
          "
        >
          ✅ Registration Successful
        </div>
      )}

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
          ❌ Registration Failed
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <label className="block text-gray-200 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter name"
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
            {...register("name")}
          />
        </div>

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
            placeholder="Create password"
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

        <div>
          <label className="block text-gray-200 mb-2">
            Select Role
          </label>

          <select
            className="
              w-full
              bg-white/10
              border
              border-white/20
              rounded-xl
              px-4
              py-3
              text-white
              outline-none
              focus:ring-2
              focus:ring-cyan-400
            "
            {...register("role")}
          >
            <option className="text-black" value="USER">
              USER
            </option>

            <option className="text-black" value="ADMIN">
              ADMIN
            </option>
          </select>
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
            ? "Creating Account..."
            : "Create Account"}
        </button>
      </form>

      <div className="mt-8 text-center">

        <p className="text-gray-300">
          Already have an account?
        </p>

        <Link
          to="/"
          className="
            text-cyan-300
            hover:text-cyan-200
            font-semibold
          "
        >
          Sign In
        </Link>

      </div>
    </div>
  </div>
  )
}

export default Register