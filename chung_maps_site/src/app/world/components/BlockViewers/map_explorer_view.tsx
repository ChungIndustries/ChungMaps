'use client';

import { useRef, useState } from "react";
import { Mesh } from "three";
import { Edges, useCursor } from "@react-three/drei";
import { useSpring, animated } from '@react-spring/three'

import { BLOCK_GEOMETRY } from "./geometry";
import { MAP_EXPLORER_MATERIAL, MAP_EXPLORER_MATERIAL_SELECTED_MATERIAL } from "./material";


interface MapExplorerViewProps {
    explorer: MapExplorer;
    isSelected: boolean;
    onSelected: () => void;
}

export function MapExplorerView({ explorer, isSelected, onSelected }: MapExplorerViewProps) {
    const ref = useRef<Mesh>(null!);

    const [hovered, setHovered] = useState(false);

    useCursor(hovered);

    const { x, y, z } = useSpring({
        x: explorer.x,
        y: explorer.y,
        z: explorer.z,
    });

    return (
        <animated.mesh
            ref={ref}
            position-x={x}
            position-y={y}
            position-z={z}
            scale = {1}
            geometry={BLOCK_GEOMETRY}
            material={MAP_EXPLORER_MATERIAL}

            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={() => setHovered(false)}
            onClick={onSelected}>

            <Edges visible={isSelected} scale={1.1} renderOrder={1000} material={MAP_EXPLORER_MATERIAL_SELECTED_MATERIAL} />

            {isSelected && <axesHelper />}
        </animated.mesh>
    );
}
