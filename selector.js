import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, TextInput, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Input,
  Label,
  Content,
  Card,
  CardItem,
  Body,
  Picker,
  Form,
  Badge,
  Button,
  Item as FormItem,
} from "native-base";
const Item = Picker.Item;
  
export default class CardExample extends Component {

  constructor(props){
    super(props);
  
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount(){
      return fetch(`https://data.binance.com/api/v3/ticker/24hr`)
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
            },
            function () {
              console.log(this.state.dataSource);
              this.setState({
                coin_name: "",
                symbol: "",
                price_usd: "",
                price_usd_pure: 0,
                price_btc: "",
                price_btc_one: 0,
              });
            }
          );
        });
  }

  onValueChange(itemValue, itemIndex){
    this.setState({
      selectedValue: itemValue,
      coin_name: itemValue.symbol,
      symbol: itemValue.symbol,
      price_usd: `Precio: ${itemValue.lastPrice} $`,
      price_usd_pure: itemValue.lastPrice,
      price_btc: `${itemValue.symbol}: ${itemValue.lastPrice}`,
      price_btc_one: this.state.dataSource[11].lastPrice,
    });
  }

  calculateCurrency(){
    let floatInput = parseFloat(this.state.selectedValue);
    let floatCurrency = parseFloat(this.state.price_usd_pure);
    let floatBTC = parseFloat(this.state.price_btc_one)
    let calcUSD = floatInput / floatCurrency;
    let calcBTC = floatInput / floatBTC;
    console.log('calc', calcUSD);
    console.log('calc BTC', calcBTC);
    this.setState({
      calcUSD: `Total: ${calcUSD.toFixed(8)} ${this.state.symbol}`,
      calcBTC: `Total en Bitcoins: ${calcBTC.toFixed(8)} BTC`
    })
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Picker
              selectedValue={this.state.selectedValue}
              onValueChange={this.onValueChange.bind(this)}
            >
              {this.state.dataSource.map((item, key) => (
                <Item key={key} label={item.symbol} value={item} />
              ))}
            </Picker>
          </Form>
          <Card>
            <CardItem style={styles.h1}>
              <Text style={styles.textH1}>{this.state.coin_name}</Text>
            </CardItem>
            <CardItem style={styles.symbol}>
              <Text style={styles.textH2}>{this.state.symbol}</Text>
            </CardItem>
            <CardItem>
              <Body style={styles.cardStyle}>
                <Text style={styles.price_usd}>{this.state.price_usd}</Text>
                <Text style={styles.price_btc}>{this.state.price_btc}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body style={styles.cardStyle}>
                <TextInput
                  style={{ height: 50, width: 100 }}
                  keyboardType="numeric"
                  placeholder="$"
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                />
                <Content>
                  <Button
                    dark
                    onPress={this.calculateCurrency.bind(this)}
                    style={{ backgroundColor: "#FF9900" }}
                  >
                    <Text style={{ color: "white" }}>Calcular</Text>
                  </Button>
                </Content>
                <Text style={styles.price_usd}>{this.state.calcUSD}</Text>
                <Text style={styles.price_btc}>{this.state.calcBTC}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  symbol: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textH1: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  textH2: {
    fontSize: 22,
    color: "gray",
    fontWeight: "bold",
  },
  price_usd: {
    fontSize: 22,
    color: "black",
  },
  price_btc: {
    fontSize: 18,
    color: "black",
  },
});