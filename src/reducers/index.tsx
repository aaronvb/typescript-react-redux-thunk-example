import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import {
  INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
  INCREMENT_ENTHUSIASM_REQUESTED,
} from '../constants/index';

export function enthusiasm(
  state: StoreState | any,
  action: EnthusiasmAction | any,
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM_REQUESTED:
      return { ...state, enthusiasmRequested: true };
    case INCREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1,
        enthusiasmRequested: false,
      };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}
