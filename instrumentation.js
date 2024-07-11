import connect from './app/lib/mongodb'

export async function register() {
    await connect()
    console.log("db connected")
}