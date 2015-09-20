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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztxQkFJd0IsUUFBUTs7Ozs7O3NCQUpsQixRQUFROzs7O29CQUNMLE1BQU07Ozs7d0JBQ0gsVUFBVTs7OztBQUVmLFNBQVMsUUFBUSxHQUFlO01BQWQsT0FBTyx5REFBRyxFQUFFOztBQUMzQyxTQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ2xDOztJQUVZLFlBQVk7QUFDWixXQURBLFlBQVksR0FDRztRQUFkLE9BQU8seURBQUcsRUFBRTs7MEJBRGIsWUFBWTs7QUFFckIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7R0FDeEI7O2VBSFUsWUFBWTs7V0FJakIsZ0JBQUMsUUFBUSxFQUFlOzs7VUFBYixNQUFNLHlEQUFHLEVBQUU7O0FBQzFCLGFBQU8sMEJBQVksVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLFlBQUksTUFBTSxHQUFHLG9CQUFFLEtBQUssQ0FBQyxNQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzQyxZQUFJO0FBQ0YsaUJBQU8sQ0FBRSxrQkFBSyxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFFLENBQUM7U0FDOUMsQ0FBQyxPQUFPLEdBQUcsRUFBRTtBQUNaLGdCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDYjtPQUNGLENBQUMsQ0FBQztLQUNKOzs7U0FiVSxZQUFZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBqYWRlIGZyb20gJ2phZGUnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJlcihvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIG5ldyBKYWRlUmVuZGVyZXIob3B0aW9ucyk7XG59XG5cbmV4cG9ydCBjbGFzcyBKYWRlUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIHJlbmRlcih0ZW1wbGF0ZSwgdmFsdWVzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGxvY2FscyA9IF8ubWVyZ2UodGhpcy5vcHRpb25zLCB2YWx1ZXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZSggamFkZS5yZW5kZXJGaWxlKHRlbXBsYXRlLCBsb2NhbHMpICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==