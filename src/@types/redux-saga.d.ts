import { SelectEffect, Tail } from "redux-saga/effects";

import { RootState } from "../store";

declare module "redux-saga/effects" {
  export function select<Fn extends (state: RootState, ...args: any[]) => any>(
    selector: Fn,
    ...args: Tail<Parameters<Fn>>
  ): SelectEffect;
}
