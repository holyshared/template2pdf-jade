'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = renderer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _jade = require('jade');

var _jade2 = _interopRequireDefault(_jade);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function renderer() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return new JadeRenderer(options);
}

var JadeRenderer = (function () {
  function JadeRenderer() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, JadeRenderer);

    this.options = options;
  }

  _createClass(JadeRenderer, [{
    key: 'render',
    value: function render(template) {
      var _this = this;

      var values = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return new _bluebird2['default'](function (resolve, reject) {
        var locals = _lodash2['default'].merge(_this.options, values);
        try {
          resolve(_jade2['default'].renderFile(template, locals));
        } catch (err) {
          reject(err);
        }
      });
    }
  }]);

  return JadeRenderer;
})();

exports.JadeRenderer = JadeRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztxQkFZd0IsUUFBUTs7Ozs7O3NCQVZsQixRQUFROzs7O29CQUNMLE1BQU07Ozs7d0JBQ0gsVUFBVTs7OztBQVFmLFNBQVMsUUFBUSxHQUEwQztNQUF6QyxPQUFvQix5REFBRyxFQUFFOztBQUN4RCxTQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ2xDOztJQUVZLFlBQVk7QUFFWixXQUZBLFlBQVksR0FFZ0I7UUFBM0IsT0FBb0IseURBQUcsRUFBRTs7MEJBRjFCLFlBQVk7O0FBR3JCLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0dBQ3hCOztlQUpVLFlBQVk7O1dBS2pCLGdCQUFDLFFBQWdCLEVBQWlDOzs7VUFBL0IsTUFBYyx5REFBRyxFQUFFOztBQUMxQyxhQUFPLDBCQUFZLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxZQUFJLE1BQU0sR0FBRyxvQkFBRSxLQUFLLENBQUMsTUFBSyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsWUFBSTtBQUNGLGlCQUFPLENBQUUsa0JBQUssVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBRSxDQUFDO1NBQzlDLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDWixnQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7T0FDRixDQUFDLENBQUM7S0FDSjs7O1NBZFUsWUFBWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgamFkZSBmcm9tICdqYWRlJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxudHlwZSBKYWRlT3B0aW9ucyA9IHtcbiAgZmlsZW5hbWU/OiBzdHJpbmcsXG4gIGNvbXBpbGVEZWJ1Zz86IGJvb2xlYW4sXG4gIHByZXR0eT86IGJvb2xlYW5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcmVyKG9wdGlvbnM6IEphZGVPcHRpb25zID0ge30pOiBKYWRlUmVuZGVyZXIge1xuICByZXR1cm4gbmV3IEphZGVSZW5kZXJlcihvcHRpb25zKTtcbn1cblxuZXhwb3J0IGNsYXNzIEphZGVSZW5kZXJlciB7XG4gIG9wdGlvbnM6IEphZGVPcHRpb25zO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBKYWRlT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICByZW5kZXIodGVtcGxhdGU6IHN0cmluZywgdmFsdWVzOiBPYmplY3QgPSB7fSkgOiBQcm9taXNlIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGxvY2FscyA9IF8ubWVyZ2UodGhpcy5vcHRpb25zLCB2YWx1ZXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZSggamFkZS5yZW5kZXJGaWxlKHRlbXBsYXRlLCBsb2NhbHMpICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==