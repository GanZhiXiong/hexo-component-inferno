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
 * A JSX component that renders Open Graph tags.
 * @module view/misc/open_graph
 *
 * @see https://hexo.io/docs/helpers#open-graph
 * @see https://github.com/hexojs/hexo/blob/4.2.0/lib/plugins/helper/open_graph.js
 */
var urlFn = require('url');

var moment = require('moment');

var _require = require('inferno'),
    Component = _require.Component;

var _require2 = require('hexo-util'),
    encodeURL = _require2.encodeURL,
    stripHTML = _require2.stripHTML,
    escapeHTML = _require2.escapeHTML;

var localeMap = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  hu: 'hu_HU',
  id: 'id_ID',
  it: 'it_IT',
  ja: 'ja_JP',
  ko: 'ko_KR',
  nl: 'nl_NL',
  ru: 'ru_RU',
  th: 'th_TH',
  tr: 'tr_TR',
  vi: 'vi_VN'
};
var localeRegex = new RegExp(Object.keys(localeMap).join('|'), 'i');
/**
 * A JSX component that renders Open Graph tags.
 *
 * @name OpenGraph
 * @see https://hexo.io/docs/helpers#open-graph
 * @see https://github.com/hexojs/hexo/blob/4.2.0/lib/plugins/helper/open_graph.js
 * @example
 * <OpenGraph
 *     type="blog"
 *     title="Page title"
 *     language="Page language"
 *     description="Page description"
 *     date="Page publish date"
 *     updated="Page update date"
 *     author="Page author"
 *     keywords="keyword1,keyword2,..."
 *     images={[ '/path/to/image.png' ]}
 *     url="/path/to/page"
 *     siteName="Site name"
 *     twitterId="Twitter ID"
 *     twitterCard="summary"
 *     twitterSite="Twitter Site"
 *     googlePlus="/path/to/google/plus"
 *     facebookAdmins="Facebook admin ID"
 *     facebookAppId="Facebook APP ID" />
 */

module.exports = /*#__PURE__*/function (_Component) {
  _inherits(_class, _Component);

  var _super = _createSuper(_class);

  function _class() {
    _classCallCheck(this, _class);

    return _super.apply(this, arguments);
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          title = _this$props.title,
          date = _this$props.date,
          updated = _this$props.updated,
          author = _this$props.author,
          url = _this$props.url,
          siteName = _this$props.siteName,
          twitterCard = _this$props.twitterCard,
          twitterSite = _this$props.twitterSite,
          googlePlus = _this$props.googlePlus,
          facebookAdmins = _this$props.facebookAdmins,
          facebookAppId = _this$props.facebookAppId;
      var _this$props2 = this.props,
          description = _this$props2.description,
          language = _this$props2.language,
          images = _this$props2.images,
          keywords = _this$props2.keywords,
          twitterId = _this$props2.twitterId;
      var htmlTags = [];

      if (description) {
        description = escapeHTML(stripHTML(description).substring(0, 200).trim()).replace(/\n/g, ' ');
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "name": "description",
          "content": description
        }));
      }

      htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
        "property": "og:type",
        "content": type || 'website'
      }));
      htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
        "property": "og:title",
        "content": title
      }));
      htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
        "property": "og:url",
        "content": encodeURL(url)
      }));
      htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
        "property": "og:site_name",
        "content": siteName
      }));

      if (description) {
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "og:description",
          "content": description
        }));
      }

      if (language) {
        if (language.length === 2) {
          language = language.replace(localeRegex, function (str) {
            return localeMap[str];
          });
          htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
            "property": "og:locale",
            "content": language
          }));
        } else if (language.length === 5) {
          var territory = language.slice(-2);
          var territoryRegex = new RegExp(territory.concat('$'));
          language = language.replace('-', '_').replace(territoryRegex, territory.toUpperCase());
          htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
            "property": "og:locale",
            "content": language
          }));
        }
      }

      if (!Array.isArray(images)) {
        images = [images];
      }

      images.map(function (path) {
        if (!urlFn.parse(path).host) {
          // resolve `path`'s absolute path relative to current page's url
          // `path` can be both absolute (starts with `/`) or relative.
          return urlFn.resolve(url, path);
        }

        return path;
      }).forEach(function (path) {
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "og:image",
          "content": path
        }));
      });

      if (date && (moment.isMoment(date) || moment.isDate(date)) && !isNaN(date.valueOf())) {
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "article:published_time",
          "content": date.toISOString()
        }));
      }

      if (updated && (moment.isMoment(updated) || moment.isDate(updated)) && !isNaN(updated.valueOf())) {
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "article:modified_time",
          "content": updated.toISOString()
        }));
      }

      if (author) {
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "article:author",
          "content": author
        }));
      }

      if (keywords) {
        if (typeof keywords === 'string') {
          keywords = [keywords];
        }

        keywords.map(function (tag) {
          return tag.name ? tag.name : tag;
        }).filter(Boolean).forEach(function (keyword) {
          htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
            "property": "article:tag",
            "content": keyword
          }));
        });
      }

      htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
        "property": "twitter:card",
        "content": twitterCard || 'summary'
      }));

      if (images.length) {
        var image = images[0];

        if (!urlFn.parse(image).host) {
          // resolve `path`'s absolute path relative to current page's url
          // `path` can be both absolute (starts with `/`) or relative.
          image = urlFn.resolve(url, image);
        }

        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "twitter:image:src",
          "content": image
        }));
      }

      if (twitterId) {
        if (twitterId[0] !== '@') {
          twitterId = "@".concat(twitterId);
        }

        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "twitter:creator",
          "content": twitterId
        }));
      }

      if (twitterSite) {
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "twitter:site",
          "content": twitterSite
        }));
      }

      if (googlePlus) {
        htmlTags.push((0, _inferno.createVNode)(1, "link", null, null, 1, {
          "rel": "publisher",
          "href": googlePlus
        }));
      }

      if (facebookAdmins) {
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "fb:admins",
          "content": facebookAdmins
        }));
      }

      if (facebookAppId) {
        htmlTags.push((0, _inferno.createVNode)(1, "meta", null, null, 1, {
          "property": "fb:app_id",
          "content": facebookAppId
        }));
      }

      return (0, _inferno.createFragment)(htmlTags, 0);
    }
  }]);

  return _class;
}(Component);