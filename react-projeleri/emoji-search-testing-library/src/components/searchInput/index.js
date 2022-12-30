import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./styles.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} aria-label="search-input"/>
        </div>
      </div>
    );
  }
}
