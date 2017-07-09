import React, { Component } from 'react';
import {Container} from 'native-base';
import AppHeader from '../AppHeader';
import Region from './Region';

class HospitalListView extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <AppHeader navigation="navigate"/>
        <Region name="צפון" />
        <Region name="מרכז" />
        <Region name="דרום" />
      </Container>
    );
  }
}

export default HospitalListView;
