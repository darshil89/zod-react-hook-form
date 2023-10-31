"use server"

import { schema } from '@/models/schema';
import { z } from 'zod';

type Inputs = z.infer<typeof schema>;

export async function addEntry(data: Inputs) {
    const result = await schema.safeParseAsync(data);

    if (result.success) {
        console.log(result.data);
        return { success: true, data: result.data}
    } else {
        console.log(result.error);
        return { success: false, error: result.error}
    }
}