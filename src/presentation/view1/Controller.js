import { improveNameService } from '../../services/improveName';

export class View1Ctrl {
  constructor(model, props) {
    this.model = model;
    this.props = props;
  }

  onChange = (value) => {
    this.model.name = improveNameService(value);
  }
}
