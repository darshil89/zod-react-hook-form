"use client";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      age: z.number().min(18).max(70),
      password: z.string().min(8).max(100),
      confirmPassword: z.string().min(8).max(100),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <form onSubmit={handleSubmit(submitData)} className="w-96">
        <div className="flex flex-col w-full mb-4">
         
          <input
            className="border border-slate-600 rounded p-2"
            placeholder="First Name"
            type="text"
            {...register("firstName" , { required: 'Name is required' })}
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
