import { getDB, getResponse } from '@/app/api/util';

// TODO: Do more research on caching
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
