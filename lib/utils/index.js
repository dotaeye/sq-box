'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initScrollable = initScrollable;
exports.hasChildrenWithVerticalFill = hasChildrenWithVerticalFill;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

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
