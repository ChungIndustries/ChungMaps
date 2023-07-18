import WorldViewer from './components/world_viewer';

// TODO: Not sure if this is needed
export const revalidate = 0;


export default async function World() {
    return (
        <WorldViewer />
    );
}