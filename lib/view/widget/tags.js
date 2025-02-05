"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _inferno = require("inferno");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Tags widget JSX component.
 * @module view/widget/tags
 */
var _require = require('inferno'),
    Component = _require.Component;

var _require2 = require('../../util/cache'),
    cacheComponent = _require2.cacheComponent;
/**
 * Tags widget JSX component.
 *
 * @example
 * <Tags
 *     title="Widget title"
 *     showCount={true}
 *     tags={[
 *         {
 *             url: '/path/to/category/page',
 *             name: 'Category name',
 *             count: 1
 *         }
 *     ]} />
 */


var Tags = /*#__PURE__*/function (_Component) {
  _inherits(Tags, _Component);

  var _super = _createSuper(Tags);

  function Tags() {
    _classCallCheck(this, Tags);

    return _super.apply(this, arguments);
  }

  _createClass(Tags, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tags = _this$props.tags,
          title = _this$props.title,
          showCount = _this$props.showCount;
      return (0, _inferno.createVNode)(1, "div", "card widget", (0, _inferno.createVNode)(1, "div", "card-content", (0, _inferno.createVNode)(1, "div", "menu", [(0, _inferno.createVNode)(1, "h3", "menu-label", title, 0), (0, _inferno.createVNode)(1, "div", "field is-grouped is-grouped-multiline", tags.map(function (tag) {
        return (0, _inferno.createVNode)(1, "div", "control", (0, _inferno.createVNode)(1, "a", "tags has-addons", [(0, _inferno.createVNode)(1, "span", "tag", tag.name, 0), showCount ? (0, _inferno.createVNode)(1, "span", "tag", tag.count, 0) : null], 0, {
          "href": tag.url
        }), 2);
      }), 0)], 4), 2), 2, {
        "data-type": "tags"
      });
    }
  }]);

  return Tags;
}(Component);
/**
 * Cacheable tags widget JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @see https://github.com/hexojs/hexo/blob/4.2.0/lib/plugins/helper/list_tags.js
 * @example
 * <Tags.Cacheable
 *     site={{ tags: {...} }}
 *     helper={{
 *         url_for: function() {...},
 *         _p: function() {...}
 *     }}
 *     tags={{...}}
 *     widget={{
 *       order_by: "name",
 *       amount: 100,
 *       show_count: true
 *     }} />
 */


Tags.Cacheable = cacheComponent(Tags, 'widget.tags', function (props) {
  var helper = props.helper,
      _props$widget = props.widget,
      widget = _props$widget === void 0 ? {} : _props$widget;
  var _widget$order_by = widget.order_by,
      order_by = _widget$order_by === void 0 ? 'name' : _widget$order_by,
      amount = widget.amount,
      _widget$show_count = widget.show_count,
      show_count = _widget$show_count === void 0 ? true : _widget$show_count;
  var tags = props.tags || props.site.tags;
  var url_for = helper.url_for,
      _p = helper._p;

  if (!tags || !tags.length) {
    return null;
  }

  tags = tags.sort(order_by).filter(function (tag) {
    return tag.length;
  });

  if (amount) {
    tags = tags.limit(amount);
  }

  return {
    showCount: show_count,
    title: _p('common.tag', Infinity),
    tags: tags.map(function (tag) {
      return {
        name: tag.name,
        count: tag.length,
        url: url_for(tag.path)
      };
    })
  };
});
module.exports = Tags;