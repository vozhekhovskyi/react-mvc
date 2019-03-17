class Communicator {
  constructor() {
    this._observers = [];
  }

  subscribe = (observer) => {
    if (typeof observer !== 'function') {
      throw new Error(`Observer can't be of type ${typeof observer}. Provide function.`)
    }
    this._subscribe(observer);
    return () => {
      this._delete(observer);
    }
  };

  notifyAll = () => {
    this._observers.forEach((observer) => observer());
  };

  _subscribe = (observer) => {
    this._observers.push(observer);
  };

  _delete = (observer) => {
    this._observers = this._observers.filter(obs => obs !== observer);
  };
}

export const communicator = new Communicator();
