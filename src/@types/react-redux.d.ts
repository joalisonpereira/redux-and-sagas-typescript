import "react-redux";
import { RootState } from "../store";

declare module "react-redux" {
  declare const useSelector: <TState = RootState, Selected = unknown>(
    selector: (state: TState) => Selected,
    equalityFn?: EqualityFn<Selected> | undefined
  ) => Selected;
}
