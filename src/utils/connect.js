import React from 'react';

import { model } from '../model';
import { communicator } from '../services/communicator';

export const connect = (params, mapStateToProps, mapHandlersToProps) => {
  if (typeof params !== 'object') {
    throw new Error('First argument in `connect` function is mandatory');
  }
  if (typeof params.Ctrl !== 'function') {
    throw new Error('`Ctrl` property in 1st argument in `connect` function is mandatory');
  }
  return Wrapped => {
    class ConnectedView extends React.Component {
      constructor(props) {
        super(props);
        this.ctrl = new params.Ctrl(model, props);
        this.unsubscribe = communicator.subscribe(this.update);
      }

      componentWillUnmount = () => {
        this.unsubscribe();
      }

      update = () => {
        this.forceUpdate();
      }
    
      render() {
        let stateToProps;
        let handlersToProps;
        if (typeof mapStateToProps === 'function') {
          stateToProps = mapStateToProps(model);
        }
        if (typeof mapHandlersToProps === 'function') {
          handlersToProps = mapHandlersToProps(this.ctrl);
        }
        return (
          <Wrapped
            {...this.props}
            {...handlersToProps}
            {...stateToProps}
          />
        );
      }
    }

    return ConnectedView;
  }
}
