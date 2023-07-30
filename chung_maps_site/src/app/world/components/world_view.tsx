'use client'

import { Canvas } from "@react-three/fiber";
import { 
    OrbitControls, 
    GizmoHelper, GizmoViewport, 
    Sky 
} from "@react-three/drei";
import { MOUSE } from "three";

import { MinecraftBlocksView, MapExplorerView } from "./BlockViewers";
import { useMinecraftBlocks, useMapExplorers } from "../lib";

import { Suspense, useState } from "react";


export default function WorldView() {

    const blocks = useMinecraftBlocks();
    const mapExplorers = useMapExplorers();

    const [selectedID, setSelectedID] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setSelectedID(id === selectedID ? null : id);
    }

    const getSelectedExplorer = () => {
        return mapExplorers?.find((explorer) => explorer.id === selectedID);
    }

    return (
        <Suspense fallback={<h1 style={{zIndex: 10000}}>"Loading..."</h1>}>
        <Canvas>
            <GizmoHelper alignment="bottom-right"margin={[80, 80]}>
                <GizmoViewport />
            </GizmoHelper>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sky />

            <OrbitControls target={getSelectedExplorer() ? [getSelectedExplorer()!.x, getSelectedExplorer()!.y, getSelectedExplorer()!.z] : undefined} mouseButtons={{
                LEFT: MOUSE.PAN,
                MIDDLE: MOUSE.DOLLY,
                RIGHT: MOUSE.ROTATE
            }}
                        
            />

            <MinecraftBlocksView blocks={blocks} />

            { mapExplorers?.map((explorer) => (
                <MapExplorerView key={explorer.id} explorer={explorer} isSelected={selectedID === explorer.id} onSelected={() => handleSelect(explorer.id)} />
            ))}
        </Canvas>
        </Suspense>
    );
}