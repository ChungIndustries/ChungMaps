import { MeshStandardMaterial } from "three";

export const MAP_EXPLORER_MATERIAL = new MeshStandardMaterial({color: '#ffff00'});
export const MAP_EXPLORER_MATERIAL_SELECTED_MATERIAL = new MeshStandardMaterial({ transparent: true, color: '#333333', depthTest: false });

export const GRASS_MATERIAL = new MeshStandardMaterial({color: '#00ff00'});