import { getDB, getResponse } from '@/app/api/util';

// import eventsource from 'eventsource';
// global.EventSource = eventsource as any;

// TODO: Do more research on caching
export const revalidate = 0;


// const pb = new PocketBase(API_URL);

// pb.collection('blocks').subscribe('*', async (e) => {
//     console.log(e);
//     let url = new URL('/api/revalidate', 'http://localhost:3000');
//     url.searchParams.set('path', '/api/blocks');
//     url.searchParams.set('revalidation_token', process.env.REVALIDATION_TOKEN!)
//     const response = await fetch(url);
//     console.log(response.text());
// });



export async function GET() {
    return getResponse(async () => {
        return await getDB().collection('blocks').getFullList({
            expand: 'last_scanned_by'
        })
    })
}


export async function POST(request: Request) {
    return getResponse(async () => {
        const db = getDB();
        const body = await request.json();

        const { username, api_key } = body;

        await db.collection('map_explorers').authWithPassword(username, api_key);
        const record = await db.collection('blocks').create(body);
        db.authStore.clear();

        return record;
    })
}
