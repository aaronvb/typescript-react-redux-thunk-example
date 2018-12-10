import * as constants from '../constants';
import { Dispatch } from 'redux';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface IncrementEnthusiasmRequested {
  type: constants.INCREMENT_ENTHUSIASM_REQUESTED;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction =
  | IncrementEnthusiasm
  | DecrementEnthusiasm
  | IncrementEnthusiasmRequested;

function incrementEnthusiasmRequested(): IncrementEnthusiasmRequested {
  return {
    type: constants.INCREMENT_ENTHUSIASM_REQUESTED,
  };
}

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  };
}

export function actionIncrementEnthusiasm() {
  return (dispatch: Dispatch<EnthusiasmAction>) => {
    dispatch(incrementEnthusiasmRequested());

    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(incrementEnthusiasm());
    }, 1000);
  };
}
