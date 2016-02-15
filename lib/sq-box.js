/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classnames2 = __webpack_require__(1);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _blacklist = __webpack_require__(4);

	var _blacklist2 = _interopRequireDefault(_blacklist);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Box = _react2.default.createClass({
		displayName: 'Box',

		propTypes: {
			prefixCls: _react.PropTypes.string,
			align: _react.PropTypes.oneOf(['end', 'center', 'start']),
			direction: _react.PropTypes.oneOf(['column', 'row']),
			fill: _react.PropTypes.bool,
			grow: _react.PropTypes.bool,
			justify: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['end', 'center', 'start'])]),
			scrollable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
			onScroll: _react.PropTypes.func
		},

		getDefaultProps: function getDefaultProps() {
			return {
				prefixCls: 'sq-box',
				onScroll: function onScroll() {}
			};
		},
		componentDidMount: function componentDidMount() {
			var scrollable = this.props.scrollable;

			if (scrollable && scrollable.mount) {
				scrollable.mount(this);
			}
		},
		componentWillUnmount: function componentWillUnmount() {
			var scrollable = this.props.scrollable;

			if (scrollable && scrollable.unmount) {
				scrollable.unmount(this);
			}
		},
		onScroll: function onScroll(event) {
			var _props = this.props;
			var scrollable = _props.scrollable;
			var onScroll = _props.onScroll;

			if (!scrollable) {
				return;
			}
			onScroll(event);
		},
		render: function render() {
			var _classnames;

			var _props2 = this.props;
			var direction = _props2.direction;
			var children = _props2.children;
			var fill = _props2.fill;
			var scrollable = _props2.scrollable;
			var align = _props2.align;
			var className = _props2.className;
			var prefixCls = _props2.prefixCls;

			if (!direction) {
				if ((0, _utils.hasChildrenWithVerticalFill)(this.props.children)) {
					direction = 'column';
				}
			}

			if (direction === 'column' || scrollable) {
				fill = true;
			}

			var boxClassName = (0, _classnames3.default)(className, (_classnames = {}, _defineProperty(_classnames, prefixCls, true), _defineProperty(_classnames, prefixCls + '--fill', fill), _defineProperty(_classnames, prefixCls + '--direction-column', direction === 'column'), _defineProperty(_classnames, prefixCls + '--direction-row', direction === 'row'), _defineProperty(_classnames, prefixCls + '--align-center', align === 'center'), _defineProperty(_classnames, prefixCls + '--align-start', align === 'start'), _defineProperty(_classnames, prefixCls + '--align-end', align === 'end'), _defineProperty(_classnames, prefixCls + '--justify-center', this.props.justify === 'center'), _defineProperty(_classnames, prefixCls + '--justify-start', this.props.justify === 'start'), _defineProperty(_classnames, prefixCls + '--justify-end', this.props.justify === 'end'), _defineProperty(_classnames, prefixCls + '--justified', this.props.justify === true), _defineProperty(_classnames, prefixCls + '--scrollable', this.props.scrollable), _classnames));

			var props = (0, _blacklist2.default)(this.props, 'className', 'direction', 'fill', 'justify', 'scrollable', 'onScroll');

			return _react2.default.createElement(
				'div',
				_extends({ className: boxClassName, onScroll: this.onScroll }, props),
				children
			);
		}
	});

	exports.default = Box;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = classnames;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = blacklist;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.initScrollable = initScrollable;
	exports.hasChildrenWithVerticalFill = hasChildrenWithVerticalFill;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function initScrollable(defaultPos) {
		if (!defaultPos) {
			defaultPos = {};
		}
		var pos = undefined;
		var scrollable = {
			reset: function reset() {
				pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
			},
			getPos: function getPos() {
				return { left: pos.left, top: pos.top };
			},
			mount: function mount(element) {
				var node = (0, _reactDom.findDOMNode)(element);
				node.scrollLeft = pos.left;
				node.scrollTop = pos.top;
			},
			unmount: function unmount(element) {
				var node = (0, _reactDom.findDOMNode)(element);
				pos.left = node.scrollLeft;
				pos.top = node.scrollTop;
			}
		};
		scrollable.reset();
		return scrollable;
	}

	function hasChildrenWithVerticalFill(children) {

		var result = false;

		_react2.default.Children.forEach(children, function (c) {
			if (result) return; // early-exit
			if (!c) return;
			if (!c.type) return;

			result = !!c.type.shouldFillVerticalSpace;
		});

		return result;
	}

/***/ }
/******/ ]);