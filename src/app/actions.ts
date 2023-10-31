"use server"

import { schema } from '@/models/schema';
import { z } from 'zod';
import prisma from "../../prisma/index";
import { connectToDB } from '@/models/db';
type Inputs = z.infer<typeof schema>;

export async function addEntry(data: Inputs) {

    try {

        const result = await schema.safeParseAsync(data);

        if (result.success) {
            await connectToDB();
            const user = await prisma.user.create({
                data: {
                    firstName: result.data.firstName,
                    lastName: result.data.lastName,
                    email: result.data.email,
                    age: result.data.age,
                },
            });
            return { success: true, data: user };
        } else {
            return { success: false, errors: result.error };
        }
    } catch (error: any) {
        throw new Error(error)
    }




}