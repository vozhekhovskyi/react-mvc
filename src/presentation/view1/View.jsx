import React from 'react';

import { View1Ctrl } from './Controller';
import { connect } from '../../utils/connect';
import { Input } from '../../components/Input';

class View1Pure extends React.Component {
  onChange = e => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        Hello {this.props.data}
        <div>
          <Input onChange={this.onChange}/>
        </div>
      </div>
    );
  }
}

export const View1 = connect({
  Ctrl: View1Ctrl,
}, state => ({
  data: state.name,
}), ctrl => ({
  onChange: ctrl.onChange,
}))(View1Pure);
