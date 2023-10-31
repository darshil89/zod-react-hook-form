"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataSchema } from "../../lib/types";
import { schema } from "@/models/schema";
import { addEntry } from "../actions";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSchema>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormDataSchema) => {
    const res = await addEntry(data);

    if (!res) {
      alert("Something went wrong, please try again");
      return;
    }

    if (res.error) {
      alert(res.error.message);
      return;
    }
    if (res.data) {
      alert("Success! You have signed up!");
      console.log("response from backend", res.data);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <form onSubmit={handleSubmit(submitData)} className="w-96">
        <div className="flex flex-col w-full mb-4">
          <input
            className="border border-slate-600 rounded p-2"
            placeholder="First Name"
            type="text"
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className="text-red-400">{errors.firstName.message}</span>
          )}
        </div>
        <div className="flex flex-col w-full mb-4">
          <input
            placeholder="Last Name"
            className="border border-slate-600 rounded p-2"
            type="text"
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="text-red-400">{errors.lastName.message}</span>
          )}
        </div>
        <div className="flex flex-col w-full mb-4">
          <input
            className="border border-slate-600 rounded p-2"
            type="text"
            placeholder="Email"
            {...register("email")}
          />

          {errors.email && (
            <span className="text-red-400">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col w-full mb-4">
          <input
            className="border border-slate-600 rounded p-2"
            type="number"
            placeholder="Age"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && (
            <span className="text-red-400">{errors.age.message}</span>
          )}
        </div>
        <div className="flex flex-col w-full mb-4">
          <input
            className="border border-slate-600 rounded p-2"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <input
            className="border border-slate-600 rounded p-2"
            placeholder="Confirm Password"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-red-400">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div>
          <button
            className="bg-blue-500 w-1/3 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
