import PocketBase from 'pocketbase';
import { NextResponse } from 'next/server';

// TODO: Do more research on caching
export const revalidate = 0;


const API_URL = "http://127.0.0.1:8090";


export async function GET(request: Request, context: { params: { dimension: string, x: number, y: number, z: number } }) {
    const { dimension, x, y, z } = context.params;

    const pb = new PocketBase(API_URL);
    const records = await pb.collection('blocks').getFullList({
        dimension,
        x,
        y,
        z
    });
    
    return NextResponse.json(records);
}
