'use client'

import { Canvas } from "@react-three/fiber";
import { 
    OrbitControls, 
    GizmoHelper, GizmoViewport, 
    Sky, 
    Select, useSelect, 
    Edges, 
    useCursor } from "@react-three/drei";

import { MinecraftBlocksView } from "./BlockViewers";
import { useMinecraftBlocks } from "../lib";


export default function WorldView() {

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

            <MinecraftBlocksView blocks={blocks} />
            
        </Canvas>
    );
}