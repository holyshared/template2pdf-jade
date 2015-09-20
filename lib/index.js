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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztxQkFJd0IsUUFBUTs7Ozs7O3NCQUpsQixRQUFROzs7O29CQUNMLE1BQU07Ozs7d0JBQ0YsVUFBVTs7OztBQUVoQixTQUFTLFFBQVEsR0FBZTtNQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDM0MsU0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUNsQzs7SUFFWSxZQUFZO0FBQ1osV0FEQSxZQUFZLEdBQ0c7UUFBZCxPQUFPLHlEQUFHLEVBQUU7OzBCQURiLFlBQVk7O0FBRXJCLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0dBQ3hCOztlQUhVLFlBQVk7O1dBSWpCLGdCQUFDLFFBQVEsRUFBZTs7O1VBQWIsTUFBTSx5REFBRyxFQUFFOztBQUMxQixhQUFPLDBCQUFhLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN2QyxZQUFJLE1BQU0sR0FBRyxvQkFBRSxLQUFLLENBQUMsTUFBSyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsWUFBSTtBQUNGLGlCQUFPLENBQUUsa0JBQUssVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBRSxDQUFDO1NBQzlDLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDWixnQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7T0FDRixDQUFDLENBQUM7S0FDSjs7O1NBYlUsWUFBWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgamFkZSBmcm9tICdqYWRlJztcbmltcG9ydCBCbHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcmVyKG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IEphZGVSZW5kZXJlcihvcHRpb25zKTtcbn1cblxuZXhwb3J0IGNsYXNzIEphZGVSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgcmVuZGVyKHRlbXBsYXRlLCB2YWx1ZXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGxvY2FscyA9IF8ubWVyZ2UodGhpcy5vcHRpb25zLCB2YWx1ZXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZSggamFkZS5yZW5kZXJGaWxlKHRlbXBsYXRlLCBsb2NhbHMpICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==