import { TconstructorElement } from '../../utils/types'

export const ITEM_ADD: "ITEM_ADD" = 'ITEM_ADD';
export const ITEM_DELETE: "ITEM_DELETE" = 'ITEM_DELETE';
export const ITEMS_SWAP: "ITEMS_SWAP" = 'ITEMS_SWAP';
export const BUN_DELETE: "BUN_DELETE" = 'BUN_DELETE';
export const BUN_ADD: "BUN_ADD" = 'BUN_ADD';
export const CONSTRUCTOR_CLEAR: "CONSTRUCTOR_CLEAR" = 'CONSTRUCTOR_CLEAR';

export interface IitemAddAction {
   readonly type: typeof ITEM_ADD;
   item: TconstructorElement;
}

export interface IitemDeleteAction {
   readonly type: typeof ITEM_DELETE;
   readonly uniqueId: number;
   item: TconstructorElement;
}

export interface IitemSwapAction {
   readonly type: typeof ITEMS_SWAP;
   itemSource: any;
   itemTarget: any;
}

export interface IbunDeleteAction {
   readonly type: typeof BUN_DELETE;
}

export interface IbunAddAction {
   readonly type: typeof BUN_ADD;
   item: TconstructorElement;
}

export interface IconstructorClearAction {
   readonly type: typeof CONSTRUCTOR_CLEAR;
}

export type TconstructorActions =
   | IitemAddAction
   | IitemDeleteAction
   | IitemSwapAction
   | IbunDeleteAction
   | IbunAddAction
   | IconstructorClearAction;

