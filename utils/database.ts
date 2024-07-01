import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

export const connecToDB = async () => {

    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MondoDB is alrealy connected")
        return;
    }

    try {
        await mongoose.connect(
            process.env.MONGODB_URI!, {
                dbName: 'task',
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions
        );
    }
    catch (error) {
        console.log(error)
    }
}