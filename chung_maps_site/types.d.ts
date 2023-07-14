type MapExplorer = {
    id: string;
    created: Date;
    updated: Date;
    username: string;
    verified: boolean;
    x: number;
    y: number;
    z: number;
    dimension: string;
}

type MinecraftBlock = {
    id: string;
    created: Date;
    updated: Date;
    name: string;
    x: number;
    y: number;
    z: number;
    dimension: string;
    metadata: JSON;
    last_scanned_by: string;
}