/* @flow */

import _ from 'lodash';
import jade from 'jade';
import Promise from 'bluebird';

type JadeOptions = {
  filename?: string,
  compileDebug?: boolean,
  pretty?: boolean
};

export default function renderer(options: JadeOptions = {}): JadeRenderer {
  return new JadeRenderer(options);
}

export class JadeRenderer {
  options: JadeOptions;
  constructor(options: JadeOptions = {}) {
    this.options = options;
  }
  render(template: string, values: Object = {}) : Promise {
    return new Promise((resolve, reject) => {
      let locals = _.merge(this.options, values);
      try {
        resolve( jade.renderFile(template, locals) );
      } catch (err) {
        reject(err);
      }
    });
  }
}
