import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import Home from 'material-ui/svg-icons/action/home';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import List from 'material-ui/svg-icons/action/list';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Homepage extends Component {
  render() {
    const { dashState, actions } = this.props;

    return (
      <div style={{display: 'flex', boxSizing: 'border-box', flexGrow: 1 }}>
        <PageMenu activePage={dashState.activeDashPage} actions={actions} />
        { dashState.activeDashPage === 'dashboard' ? <DashboardSubPage /> : <ActivitySubPage /> }
      </div>
    ) ;
    
    

    // return (
    //   <div className="Menu" style={{
    //     height: "100%",
    //     width: "250px",
    //     backgroundColor: "#eff0f1",
    //   }}></div>
    // );
  }
}

class CustomHeader extends Component {
  
  render() {
  
    const color = 'rgba(0,0,0,.654)';
  
    const iconStyle = {
      width: '50px',
      height: '50px',
      color: 'inherit'      
    };

    return (
      <div style={{ flexShrink: 0, height: '50px', color: color, padding: '0 16px', width: '100%', boxSizing: 'border-box', alignitems: 'center', display: 'flex' }}>
        { 
          this.props.icon ? 
          React.cloneElement(this.props.icon, { style: iconStyle }) :
          undefined 
        }
        <h1 style={{fontWeight: '400', marginLeft: this.props.icon ? '20px' : undefined }}>{this.props.title}</h1>
      </div>
    );
  }
}

class PageMenu extends Component {
  render() {
    const textColor = 'rgba(0,0,0,.654)';
    
    const actions = this.props.actions;
    
    return (
      <div style={{ padding: '10px 0', width: '300px', boxSizing: 'border-box', borderRight: '1px solid rgb(224, 224, 224)' }}>
        <CustomHeader icon={<Home>home</Home>} title="Home" />
        <Divider />
        <div>
          <Menu autoWidth={false} listStyle={{width: '300px', boxSizing: 'border-box' }}>
            <CustomMenuItem primaryText="Dashboard" leftIcon={<Dashboard />} active={this.props.activePage === 'dashboard'} onTouchTap={actions.activeDashPage.bind(this, 'dashboard')} />
            <CustomMenuItem primaryText="Activity" leftIcon={<List />} active={this.props.activePage === 'activity'} onTouchTap={actions.activeDashPage.bind(this, 'activity')} />
          </Menu>
        </div>
      </div>
    );
  }
}

class CustomMenuItem extends Component {
  render() {
    const activeColor = 'rgb(59,120,231)';
    const activeBoxShadowColor = 'rgba(59,120,231,.2)';
    
    let styles = {
      ...this.props.styles,
      padding: '0 16px'
    };
    
    let icon = this.props.leftIcon;
    
    if (this.props.active) {
      styles = {
        ...styles,
        boxShadow: 'inset 0 0 100px ' + activeBoxShadowColor,
        color: activeColor
      };
      
      icon = React.cloneElement(icon, {
        color: activeColor
      });
    }
    
    return <MenuItem {...this.props} style={styles} leftIcon={icon} />
  }
}

const ActivitySubPage = () => <HomeSubPage title="Activity" />;

const DashboardSubPage = () => 
  <HomeSubPage title="Dashboard">
    <div style={{display: 'flex', width: '100%', justifyContent: 'center' }}>
      <div style={{width: '350px', padding: '10px'}}>
        <CustomCard backgroundColor="#3367d6" subtitleColor='rgba(255, 255, 255, 0.651)' titleColor='white'  title="Try Google Cloud Platform for free" subtitle="Sign up and get $300 in credit and 60 days to explore" />
        <CustomCard title="Try Compute Engine" subtitle="Create a Linux virtual machine instance in Compute Engine in this guided walkthrough." />
        <CustomCard title="Use Google APIs" subtitle="Enable APIs, create credentials, and track your usage" />
        <CustomCard title="Try Compute Engine" subtitle="Create a Linux virtual machine instance in Compute Engine in this guided walkthrough." />
        <CustomCard title="Use Google APIs" subtitle="Enable APIs, create credentials, and track your usage" />
        <CustomCard title="Try Compute Engine" subtitle="Create a Linux virtual machine instance in Compute Engine in this guided walkthrough." />
        <CustomCard title="Use Google APIs" subtitle="Enable APIs, create credentials, and track your usage" />
      </div>
      <div style={{width: '350px', padding: '10px'}}>
        <CustomCard title="Learn Google Cloud Platform" subtitle="Take an interactive tutorial now and learn how to deploy and build simple applications." />
        <CustomCard title="Try Compute Engine" subtitle="Create a Linux virtual machine instance in Compute Engine in this guided walkthrough." />
        <CustomCard title="Use Google APIs" subtitle="Enable APIs, create credentials, and track your usage" />
      </div>
      <div style={{width: '350px', padding: '10px'}}>
        <CustomCard title="Create a Cloud SQL instance" subtitle="Cloud SQL is a MySQL database that runs in Google's cloud, with no installation or maintenance required" />
        <CustomCard title="Try Compute Engine" subtitle="Create a Linux virtual machine instance in Compute Engine in this guided walkthrough." />
        <CustomCard title="Use Google APIs" subtitle="Enable APIs, create credentials, and track your usage" />
      </div>  
    </div>
  </HomeSubPage>

 
class CustomCard extends Component {
  render() {
   
   return (
     <Card style={{ backgroundColor: this.props.backgroundColor, marginBottom: '15px'}}>
      <CardTitle 
        title={this.props.title} 
        subtitle={this.props.subtitle} 
        style={{ padding: '30px' }} 
        titleStyle={{fontSize: '18px'}} 
        titleColor={this.props.titleColor} 
        subtitleColor={this.props.subtitleColor}
        subtitleStyle={{marginTop: '10px' }}
       />
     </Card>
   );
    
  }
}

class HomeSubPage extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1, paddingTop: '10px', display: 'flex', flexDirection: 'column' }}>
        <CustomHeader title={this.props.title} />
        <Divider style={{flexShrink: 0}} />
        <div style={{width: '100%', flexGrow: 1, overflowY: 'scroll'}}>
          {this.props.children}
        </div> 
      </div>
    );
  }
}


export default Homepage;
