import { getDB, getResponse } from '@api/util';

// TODO: Do more research on caching and on-demand revalidation
export const revalidate = 0;


function getAdjacent(block: MinecraftBlock) {

}

function AStar(blocks: MinecraftBlock[], start: MinecraftBlock, goal: MinecraftBlock) {

}


export async function GET(request: Request, context: { params: any }) {
    const { dimension } = context.params;

    const blocks = getResponse(async () => {
        return await getDB().collection('blocks').getFullList({
            dimension
        });
    })

    

}
