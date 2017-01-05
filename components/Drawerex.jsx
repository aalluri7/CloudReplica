import React, { PropTypes, Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

export default class Drawerex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  handleClose = () => this.props.actions.drawerVis(false);

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.props.drawerVisibility}
          onRequestChange={(open) => this.props.actions.drawerVis(false)}
        >
          <Subheader style={{ fontSize: '18px' }}>Google Cloud Platform</Subheader>
          <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}