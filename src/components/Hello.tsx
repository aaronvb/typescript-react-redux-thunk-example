import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  enthusiasmRequested: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class Hello extends React.Component<Props, object> {
  render() {
    let loading;
    const {
      name,
      enthusiasmLevel = 1,
      onIncrement,
      onDecrement,
      enthusiasmRequested,
    } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    if (enthusiasmRequested) {
      loading = <div>Incrementing...</div>;
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
        {loading}
      </div>
    );
  }
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Hello;
