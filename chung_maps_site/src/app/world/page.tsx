
import PocketBase from 'pocketbase';
// import eventsource from 'eventsource';

// global.EventSource = eventsource as any;

// const pb = new PocketBase('http://127.0.0.1:8090');

// pb.collection('blocks').subscribe('*', (e) => {
//     console.log(e.action);
//     console.log(e.record);
// });


export default function World() {
    return (
        <main>
            <h1>World</h1>
        </main>
    )
}