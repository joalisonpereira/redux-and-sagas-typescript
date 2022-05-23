import { SelectEffect, Tail } from "redux-saga/effects";

import { StoreState } from "~/store";

declare module "redux-saga/effects" {
  export function select<Fn extends (state: StoreState, ...args: any[]) => any>(
    selector: Fn,
    ...args: Tail<Parameters<Fn>>
  ): SelectEffect;
}
