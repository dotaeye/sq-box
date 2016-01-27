import classnames from 'classnames';
import React, { PropTypes } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import blacklist from 'blacklist';
import { initScrollable, hasChildrenWithVerticalFill } from './utils';

const Box = React.createClass({

	propTypes: {
		prefixCls:PropTypes.string,
		align: PropTypes.oneOf(['end', 'center', 'start']),
		direction: PropTypes.oneOf(['column', 'row']),
		fill: PropTypes.bool,
		grow: PropTypes.bool,
		justify: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.oneOf(['end', 'center', 'start'])
		]),
		scrollable: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.object
		])
	},

	getDefaultProps(){
		return {
			 prefixCls: 'sq-box',
		}
	},

	componentDidMount () {
		let { scrollable } =this.props;
		if (scrollable && scrollable.mount) {
			scrollable.mount(this);
		}
	},
	componentWillUnmount () {
		let { scrollable } =this.props;
		if (scrollable && scrollable.unmount) {
			scrollable.unmount(this);
		}
	},

	render () {
		let { direction, children, fill, scrollable, align, className ,prefixCls } = this.props;
		if (!direction) {
			if (hasChildrenWithVerticalFill(this.props.children)) {
				direction = 'column';
			}
		}

		if (direction === 'column' || scrollable) {
			fill = true;
		}


		var boxClassName = classnames(className, {
			[prefixCls] : true,
			[prefixCls+'--fill']: fill,
			[prefixCls+'--direction-column']: direction === 'column',
			[prefixCls+'--direction-row']: direction === 'row',
			[prefixCls+'--align-center']: align === 'center',
			[prefixCls+'--align-start']: align === 'start',
			[prefixCls+'--align-end']: align === 'end',
			[prefixCls+'--justify-center']: this.props.justify === 'center',
			[prefixCls+'--justify-start']: this.props.justify === 'start',
			[prefixCls+'--justify-end']: this.props.justify === 'end',
			[prefixCls+'--justified']: this.props.justify === true,
			[prefixCls+'--scrollable']: this.props.scrollable
		});

		var props = blacklist(this.props, 'className', 'direction', 'fill', 'justify', 'scrollable');

		return (
			<div className={boxClassName} {...props}>
				{children}
			</div>
		);
	}
});


export default Box;