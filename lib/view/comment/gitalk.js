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
 * Gitalk comment JSX component.
 * @module view/comment/gitalk
 */
var crypto = require('crypto');

var _require = require('inferno'),
    Component = _require.Component;

var _require2 = require('../../util/cache'),
    cacheComponent = _require2.cacheComponent;
/**
 * Gitalk comment JSX component.
 *
 * @see https://github.com/gitalk/gitalk
 * @example
 * <Gitalk
 *     id="******",
 *     repo="******",
 *     owner="******",
 *     admin={["******"]},
 *     clientId="******",
 *     clientSecret="******",
 *     createIssueManually={false},
 *     distractionFreeMode={false},
 *     pagerDirection="last",
 *     perPage={10},
 *     proxy="******",
 *     flipMoveOptions={...},
 *     enableHotKey={true},
 *     language="zh-CN",
 *     jsUrl="/path/to/gitalk.js",
 *     cssUrl="/path/to/gitalk.css" />
 */


var Gitalk = /*#__PURE__*/function (_Component) {
  _inherits(Gitalk, _Component);

  var _super = _createSuper(Gitalk);

  function Gitalk() {
    _classCallCheck(this, Gitalk);

    return _super.apply(this, arguments);
  }

  _createClass(Gitalk, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          repo = _this$props.repo,
          owner = _this$props.owner,
          admin = _this$props.admin,
          clientId = _this$props.clientId,
          clientSecret = _this$props.clientSecret,
          _this$props$createIss = _this$props.createIssueManually,
          createIssueManually = _this$props$createIss === void 0 ? false : _this$props$createIss,
          _this$props$distracti = _this$props.distractionFreeMode,
          distractionFreeMode = _this$props$distracti === void 0 ? false : _this$props$distracti,
          _this$props$pagerDire = _this$props.pagerDirection,
          pagerDirection = _this$props$pagerDire === void 0 ? 'last' : _this$props$pagerDire,
          _this$props$perPage = _this$props.perPage,
          perPage = _this$props$perPage === void 0 ? 10 : _this$props$perPage,
          proxy = _this$props.proxy,
          flipMoveOptions = _this$props.flipMoveOptions,
          enableHotKey = _this$props.enableHotKey,
          language = _this$props.language,
          jsUrl = _this$props.jsUrl,
          cssUrl = _this$props.cssUrl;

      if (!id || !repo || !owner || !admin || !clientId || !clientSecret) {
        return (0, _inferno.createVNode)(1, "div", "notification is-danger", [(0, _inferno.createTextVNode)("You forgot to set the "), (0, _inferno.createVNode)(1, "code", null, "owner", 16), (0, _inferno.createTextVNode)(", "), (0, _inferno.createVNode)(1, "code", null, "admin", 16), (0, _inferno.createTextVNode)(", "), (0, _inferno.createVNode)(1, "code", null, "repo", 16), (0, _inferno.createTextVNode)(","), (0, _inferno.createVNode)(1, "code", null, "client_id", 16), (0, _inferno.createTextVNode)(", or "), (0, _inferno.createVNode)(1, "code", null, "client_secret", 16), (0, _inferno.createTextVNode)(" for Gitalk. Please set it in"), (0, _inferno.createTextVNode)(' '), (0, _inferno.createVNode)(1, "code", null, "_config.yml", 16), (0, _inferno.createTextVNode)(".")], 0);
      }

      var js = "var gitalk = new Gitalk({\n            id: ".concat(JSON.stringify(id), ",\n            repo: ").concat(JSON.stringify(repo), ",\n            owner: ").concat(JSON.stringify(owner), ",\n            clientID: ").concat(JSON.stringify(clientId), ",\n            clientSecret: ").concat(JSON.stringify(clientSecret), ",\n            admin: ").concat(JSON.stringify(admin), ",\n            createIssueManually: ").concat(!!createIssueManually, ",\n            distractionFreeMode: ").concat(!!distractionFreeMode, ",\n            perPage: ").concat(JSON.stringify(perPage), ",\n            pagerDirection: ").concat(JSON.stringify(pagerDirection), ",\n            ").concat(proxy ? "proxy: ".concat(JSON.stringify(proxy), ",") : '', "\n            ").concat(flipMoveOptions ? "flipMoveOptions: ".concat(JSON.stringify(flipMoveOptions), ",") : '', "\n            enableHotKey: ").concat(enableHotKey ? !!enableHotKey : true, ",\n            ").concat(language ? "language: ".concat(JSON.stringify(language), ",") : '', "\n        })\n        gitalk.render('comment-container')");
      return (0, _inferno.createFragment)([(0, _inferno.createVNode)(1, "div", null, null, 1, {
        "id": "comment-container"
      }), (0, _inferno.createVNode)(1, "link", null, null, 1, {
        "rel": "stylesheet",
        "href": cssUrl
      }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
        "src": jsUrl
      }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
        "dangerouslySetInnerHTML": {
          __html: js
        }
      })], 4);
    }
  }]);

  return Gitalk;
}(Component);
/**
 * Cacheable Gitalk comment JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <Gitalk.Cacheable
 *     comment={{
 *         repo: '******',
 *         owner: '******',
 *         admin: ['******'],
 *         client_id: '******',
 *         client_secret: '******',
 *         create_issue_manually: false,
 *         distraction_free_mode: false,
 *         pager_direction: 'last',
 *         per_page: 10,
 *         proxy: '******',
 *         flip_move_options: {...},
 *         enable_hotkey: true,
 *         language: 'zh-CN'
 *     }}
 *     page={{ path: '/path/to/page' }}
 *     helper={{ cdn: function() {...} }} />
 */


Gitalk.Cacheable = cacheComponent(Gitalk, 'comment.gitalk', function (props) {
  var helper = props.helper,
      comment = props.comment; // FIXME: config name change

  var id = crypto.createHash('md5').update(props.page.path).digest('hex');
  return {
    id: id,
    repo: comment.repo,
    owner: comment.owner,
    admin: comment.admin,
    clientId: comment.client_id,
    clientSecret: comment.client_secret,
    createIssueManually: comment.create_issue_manually,
    distractionFreeMode: comment.distraction_free_mode,
    pagerDirection: comment.pager_direction,
    perPage: comment.per_page,
    proxy: comment.proxy,
    flipMoveOptions: comment.flip_move_options,
    enableHotKey: comment.enable_hotkey,
    language: comment.language,
    cssUrl: !comment.cssUrl || !comment.cssUrl.trim() ? helper.cdn('gitalk', '1.7.2', 'dist/gitalk.css') : comment.cssUrl,
    jsUrl: helper.cdn('gitalk', '1.7.2', 'dist/gitalk.min.js')
  };
});
module.exports = Gitalk;