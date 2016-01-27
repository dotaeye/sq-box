import React from 'react';
import { findDOMNode } from 'react-dom';

export function initScrollable(defaultPos) {
	if (!defaultPos) {
		defaultPos = {};
	}
	let pos;
	let scrollable = {
		reset () {
			pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
		},
		getPos () {
			return { left: pos.left, top: pos.top };
		},
		mount (element) {
			var node = findDOMNode(element);
			node.scrollLeft = pos.left;
			node.scrollTop = pos.top;
		},
		unmount (element) {
			var node = findDOMNode(element);
			pos.left = node.scrollLeft;
			pos.top = node.scrollTop;
		}
	};
	scrollable.reset();
	return scrollable;
}

export function hasChildrenWithVerticalFill(children) {
	
	var result = false;

	React.Children.forEach(children, (c) => {
		if (result) return; // early-exit
		if (!c) return;
		if (!c.type) return

		result = !!c.type.shouldFillVerticalSpace;
	});

	return result;
}