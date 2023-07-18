'use client'

import { Canvas } from "@react-three/fiber";
import {Sky, OrbitControls, Select, useSelect, Loader, GizmoHelper, GizmoViewport} from '@react-three/drei';

import { MinecraftBlockViewer } from "./BlockViewers";
import { useMinecraftBlocks } from "../lib";


export default function WorldViewer() {

    const blocks = useMinecraftBlocks();

    return (
        <Canvas>
            <GizmoHelper alignment="bottom-right"margin={[80, 80]}>
                <GizmoViewport />
            </GizmoHelper>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sky />

            <OrbitControls />

            <MinecraftBlockViewer blocks={blocks} />
        </Canvas>
    );
}