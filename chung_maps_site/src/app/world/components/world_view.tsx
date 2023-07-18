'use client'

import { Canvas } from "@react-three/fiber";
import { 
    OrbitControls, 
    GizmoHelper, GizmoViewport, 
    Sky, 
    Select, useSelect, 
} from "@react-three/drei";

import { MinecraftBlocksView, MapExplorerView } from "./BlockViewers";
import { useMinecraftBlocks, useMapExplorers } from "../lib";

import { useState } from "react";



export default function WorldView() {

    const blocks = useMinecraftBlocks();
    const mapExplorers = useMapExplorers();

    const [selectedID, setSelectedID] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setSelectedID(id === selectedID ? null : id);
    }

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

            { mapExplorers?.map((explorer) => (
                <MapExplorerView key={explorer.id} explorer={explorer} isSelected={selectedID === explorer.id} onSelected={() => handleSelect(explorer.id)} />
            )) }
            
        </Canvas>
    );
}