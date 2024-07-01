import Task from '@/models/tasks';
import { connecToDB } from '@/utils/database';
import { NextResponse } from 'next/server';
import { IDeleteTaskRequestParam } from '@/types';

export const PATCH = async (request: Request, { params }: IDeleteTaskRequestParam) => {

    try {
        await connecToDB()
        const existingTasks = await Task.findById(params.id)

        if (!existingTasks) {
            return NextResponse.json("Task not found", { status: 404 })
        }
        existingTasks.completed = true
        await existingTasks.save()

        return NextResponse.json(
            " task completing successfully",
            { status: 200 }
        )
    }
    catch (error) {
        console.log(error)
        return NextResponse.json("Error completing task", { status: 500 })
    }
}