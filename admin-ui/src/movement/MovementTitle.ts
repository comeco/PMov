import { Movement as TMovement } from "../api/movement/Movement";

export const MOVEMENT_TITLE_FIELD = "id";

export const MovementTitle = (record: TMovement): string => {
  return record.id || String(record.id);
};
