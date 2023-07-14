import PocketBase from 'pocketbase';
import { NextResponse } from 'next/server';

// TODO: Do more research on caching
export const revalidate = 0;


const API_URL = "http://127.0.0.1:8090";


export async function GET() {
    const pb = new PocketBase(API_URL);
    const records = await pb.collection('blocks').getFullList();
    return NextResponse.json(records);
}
