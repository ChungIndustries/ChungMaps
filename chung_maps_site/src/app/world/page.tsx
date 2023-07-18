import WorldViewer from './components/world_viewer';

// FIXME: Not sure if this is needed
export const revalidate = 0;


export default async function World() {
    return (
        <WorldViewer />
    );
}