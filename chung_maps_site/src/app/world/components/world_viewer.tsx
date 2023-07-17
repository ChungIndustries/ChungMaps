'use client'

import { Canvas } from "@react-three/fiber";
import {Sky, OrbitControls, Select, useSelect, Loader, GizmoHelper, GizmoViewcube, GizmoViewport} from '@react-three/drei';



export default function WorldViewer() {


    return (
        <Canvas>
            <GizmoHelper alignment="bottom-right"margin={[80, 80]}>
                <GizmoViewport />
            </GizmoHelper>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sky />

            <OrbitControls />
        </Canvas>
    );
}