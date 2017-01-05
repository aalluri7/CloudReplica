import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Drawerex from '../components/Drawerex';
import Homepage from '../components/Homepage';
import MainSection from '../components/MainSection';
import * as DashActions from '../actions/dash';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    const { dashState, actions } = this.props;
    return (
      <div style={{ height: '100%' }}>
        <MuiThemeProvider muiTheme={theme}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Header dashState={dashState} drawerVis={actions.drawerVis}/>
            <Drawerex drawerVisibility={dashState.drawerVisibility} actions={actions}/>
            <Homepage dashState={dashState} actions={actions} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  dashState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    dashState: state.dash
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DashActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
