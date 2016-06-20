import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Asidebar extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  renderHeader() {
    if (this.props.title) {
      return <div className="aside-header">
        {props.title}
        <span className="close" onClick={this.props.onHide} aria-hidden="true">&times;</span>
      </div>;
    } else {
      return null;
    }
  }

  render() {
    return <ReactCSSTransitionGroup
      transitionName="asidebar"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      <div className="aside" id={this.props.show}>
        {this.renderHeader()}
        <div className="aside-contents">
          {this.props.children}
        </div>
      </div>
    </ReactCSSTransitionGroup>;
  }
}

Asidebar.defaultProps = {title: null, show: false, onHide: () => true};
