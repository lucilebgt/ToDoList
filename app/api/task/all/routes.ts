import Task from '@/models/tasks';
import { connecToDB } from '@/utils/database';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {

    try {
        await connecToDB()
        const tasks = await Task.find({})
        return NextResponse.json(
            tasks,
            { status: 20 }
        )
    }
    catch (error) {
        console.log(error)
        return NextResponse.json("Failed to fetch all tasks", { status: 500 })
    }
}