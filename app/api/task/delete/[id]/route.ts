import Task from '@/models/tasks';
import { connecToDB } from '@/utils/database';
import { NextResponse } from 'next/server';
import { IDeleteTaskRequestParam } from '@/types';

export const DELETE = async (request: Request, { params }: IDeleteTaskRequestParam) => {

    try {
        await connecToDB()
        const tasks = await Task.findByIdAndDelete(params.id)
        return NextResponse.json(
            " task deleted successfully",
            { status: 200 }
        )
    }
    catch (error) {
        console.log(error)
        return NextResponse.json("Error deleting task", { status: 500 })
    }
}