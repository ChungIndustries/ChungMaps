import { getDB, getResponse } from '@api/util';

// TODO: Do more research on caching and on-demand revalidation
export const revalidate = 0;


export async function GET(request: Request, context: { params: { dimension: string, x: number, y: number, z: number } }) {
    const { dimension, x, y, z } = context.params;
    
    return getResponse(async () => {
        return await getDB().collection('blocks').getFullList({
            dimension,
            x,
            y,
            z,
            expand: 'last_scanned_by'
        });
    });
}


export async function POST(request: Request, context: { params: { dimension: string, x: number, y: number, z: number } }) {
    return getResponse(async () => {
        const { x, y, z, dimension } = context.params;
        const db = getDB();
        const data = await request.json();
        data.x = x;
        data.y = y;
        data.z = z;
        data.dimension = dimension;

        const { username, api_key } = data;

        await db.collection('map_explorers').authWithPassword(username, api_key);
        const record = await db.collection('blocks').create<MinecraftBlock>(data);
        db.authStore.clear();

        return record;
    })
}