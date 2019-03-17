import { communicator } from './communicator';

class Mediator {
  constructor() {
    this._state = {
      name: 'World',
    };
    this._UIstate = {};
  }

  _notifyAll = () => {
    communicator.notifyAll();
  };

  get name() {
    return this._state.name;
  }

  set name(value) {
    this._state.name = value;
    this._notifyAll();
  }
}

export const mediator = new Mediator();
