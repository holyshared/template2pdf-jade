import _ from 'lodash';
import jade from 'jade';
import Bluebird from 'bluebird';

export default function renderer(options = {}) {
  return new JadeRenderer(options);
}

export class JadeRenderer {
  constructor(options = {}) {
    this.options = options;
  }
  render(template, values = {}) {
    return new Bluebird((resolve, reject) => {
      let locals = _.merge(this.options, values);
      try {
        resolve( jade.renderFile(template, locals) );
      } catch (err) {
        reject(err);
      }
    });
  }
}
