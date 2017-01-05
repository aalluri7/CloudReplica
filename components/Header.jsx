import React, { PropTypes, Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  render() {
    const { drawerVis } = this.props;
    return (
      <header className="header">
          <AppBar title="Google Cloud Platform" style={{ backgroundColor: '#3b78e7' }} onLeftIconButtonTouchTap={drawerVis.bind(this, true)} />
      </header>
    );
  }
}

export default Header;
