type InventoryItem = {
    name: string;
    count: number;
}

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
    rotation: number;
    inventory: Array<InventoryItem>;
    selected_slot: number;
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
    metadata: JSON | null;
    last_scanned_by: string;
}
