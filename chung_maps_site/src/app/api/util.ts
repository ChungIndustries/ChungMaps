import { NextResponse } from 'next/server';
import PocketBase, { ClientResponseError } from 'pocketbase';


export const API_URL = 'http://127.0.0.1:8090';

let db: PocketBase;

export function getDB(): PocketBase {
    if (!db) {
        console.log("Creating new PocketBase instance");
        db = new PocketBase(API_URL);
    }

    return db;
}

export async function getResponse(query: () => Promise<any>): Promise<NextResponse> {
    let response;

    try {
        response = NextResponse.json(await query());
    }
    catch (e) {
        console.log(e);

        if (e instanceof ClientResponseError) {
            const error = (e as ClientResponseError);
            response = NextResponse.json({ error: error.response }, { status: error.status });
        }
        else {
            response = NextResponse.json({ error: e }, { status: 500 });
        }
    }

    return response;
}