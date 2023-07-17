import { getDB, getResponse } from '@/app/api/util';

// TODO: Do more research on caching
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
