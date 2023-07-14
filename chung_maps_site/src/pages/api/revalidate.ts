import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.query.revalidation_token !== process.env.REVALIDATION_TOKEN) {
        return response.status(401).json({ revalidated: false, message: 'Invalid token' })
    }

    const path = request.query.path as string;

    if (!path) {
        return response.status(400).json({ revalidated: false, message: 'Invalid path' })
    }

    // TODO: try catch

    await response.revalidate(path);

    return response.status(200).json({ revalidated: true, message: 'Revalidate success' })
}