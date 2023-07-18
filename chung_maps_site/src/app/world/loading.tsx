'use client'

import { TailSpin } from 'react-loader-spinner'


export default function Loading() {
    return <TailSpin
        height="100"
        width="100"
        color="#000"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
    />;
}