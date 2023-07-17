import { BoxGeometry, Vector3, Object3D } from "three";

export const BLOCK_TEMP_OBJECT = new Object3D();
export const BLOCK_SCALE = new Vector3(1, 1, 1);
export const BLOCK_GEOMETRY = new BoxGeometry(BLOCK_SCALE.x, BLOCK_SCALE.y, BLOCK_SCALE.z);
