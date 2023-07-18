import { getDB, getResponse } from '@api/util';

// TODO: Do more research on caching and on-demand revalidation
export const revalidate = 0;


export async function GET(request: Request, context: { params: { dimension: string, x: number, y: number, z: number } }) {
    const { dimension, x, y, z } = context.params;
    
    return getResponse(async () => {
        return await getDB().collection('map_explorers').getFullList({
            dimension,
            x,
            y,
            z,
            expand: 'blocks(last_scanned_by)'
        });
    });
}
