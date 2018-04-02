import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet } from 'react-native';

export default class HeaderExample extends Component {
  render() {
    return (
        <Header style={styles.header}>
          <Body style={styles.h1}>
            <Title>CryptoCalc</Title>
          </Body>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#FF9900'
    },
    h1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });