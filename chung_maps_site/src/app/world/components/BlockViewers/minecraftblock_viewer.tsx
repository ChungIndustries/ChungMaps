'use client';

import { useRef, useLayoutEffect } from "react";
import { InstancedMesh } from "three";
import { BLOCK_TEMP_OBJECT, BLOCK_GEOMETRY } from "./geometry";
import { GRASS_MATERIAL } from "./material";


interface MinecraftBlockViewerProps {
    blocks: MinecraftBlock[];
}

export function MinecraftBlockViewer({ blocks }: MinecraftBlockViewerProps) {
    const ref = useRef<InstancedMesh>(null!);
    
    useLayoutEffect(() => {
        blocks.forEach((block, i) => {
            BLOCK_TEMP_OBJECT.position.set(block.x, block.y, block.z);
            BLOCK_TEMP_OBJECT.updateMatrix();
            ref.current.setMatrixAt(i, BLOCK_TEMP_OBJECT.matrix);
        });

        ref.current.instanceMatrix.needsUpdate = true;
    }, [blocks]);

    return (
        <instancedMesh ref={ref} args={[BLOCK_GEOMETRY, GRASS_MATERIAL, blocks.length]} />
    )
}