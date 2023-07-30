import { getDB, getResponse } from '@api/util';

// TODO: Do more research on caching and on-demand revalidation
export const revalidate = 0;


export async function GET(request: Request, context: { params: { dimension: string } }) {
    const { dimension } = context.params;

    return getResponse(async () => {
        return await getDB().collection('blocks').getFullList({
            dimension,
            expand: 'last_scanned_by'
        });
    })
}


export async function POST(request: Request, context: { params: { dimension: string } }) {
    return getResponse(async () => {
        const db = getDB();
        const data = await request.json();
        data.dimension = context.params.dimension;

        const { username, api_key } = data;

        await db.collection('map_explorers').authWithPassword(username, api_key);
        const record = await db.collection('blocks').create<MinecraftBlock>(data);
        db.authStore.clear();

        return record;
    })
}
