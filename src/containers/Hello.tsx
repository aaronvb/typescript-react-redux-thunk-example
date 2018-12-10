import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionIncrementEnthusiasm } from '../actions/';

export function mapStateToProps({
  enthusiasmLevel,
  languageName,
  enthusiasmRequested,
}: StoreState) {
  return {
    enthusiasmLevel,
    enthusiasmRequested,
    name: languageName,
  };
}

// BEFORE THUNK
// export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
//   return {
//     onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//     onDecrement: () => dispatch(actions.decrementEnthusiasm()),
//   }
// }

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrement: () => dispatch(actionIncrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hello);
