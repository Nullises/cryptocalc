import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Content, Container } from 'native-base';
import HeaderExample from './header';
import CardExample from './selector';
import FooterExample from './footer';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Container>
        <Content>
           <HeaderExample />
           <CardExample />
           <FooterExample />    
        </Content>  
      </Container>  
    );
  }
}
