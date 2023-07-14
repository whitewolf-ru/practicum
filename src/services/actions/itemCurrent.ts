export const ITEM_UPDATE: "ITEM_UPDATE" = 'ITEM_UPDATE';
export const ITEM_DELETE: "ITEM_DELETE" = 'ITEM_DELETE';

export interface IitemUpdateAction {
   readonly type: typeof ITEM_UPDATE;
}

export interface IitemDeleteAction {
   readonly type: typeof ITEM_DELETE;
}

export type TitemsActions = IitemUpdateAction | IitemDeleteAction;
