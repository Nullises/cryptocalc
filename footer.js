import React, { Component } from 'react';
import { Container, Footer, FooterTab, Left, Text, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet } from 'react-native';

export default class FooterExample extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button full style={styles.footer}>
              <Text style={styles.footerText}>CryptoCalc (c) 2018</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#FF9900'
    },
    footerText:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    }
  });