import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ww, wh} from '../../../helpers/responsive';

const Index = ({navigation}) => {
  return (
    <Fragment>
      <Header
        left={{
          icon: 'back',
          name: 'Geri',
          action: () => navigation.navigate('Home'),
          status: true,
        }}
        center={{
          name: 'Fatura İtiraz Dilekceleri',
          status: true,
        }}
        right={null}
      />
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={{marginTop: ww(0.02)}}>
            <Image
              // resizeMode="contain"
              style={{
                resizeMode: 'contain',
                width: ww(0.4),
                height: wh(0.2),
              }}
              source={require('../../../assets/fatura.png')}
            />
          </View>

          <View
            style={{
              backgroundColor: 'black',
              width: ww(1),
              height: wh(0.07),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: ww(0.01),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: wh(0.025),
                marginLeft: ww(0.08),
              }}>
              Ne kadar para kazandığınız değil ne kadar para tuttuğunuz
              önemlidir
            </Text>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('electricityBill')}>
            <View style={styles.icon}>
              <Icon name="angle-right" size={30} color="white" />
            </View>
            <Text style={styles.buttonText}>
              Elektrik Faturası İtiraz Dilekcesi
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('waterBill')}>
            <View style={styles.icon}>
              <Icon name="angle-right" size={30} color="white" />
            </View>
            <Text style={styles.buttonText}>Su Faturası İtiraz Dilekcesi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('naturalGas')}>
            <View style={styles.icon}>
              <Icon name="angle-right" size={30} color="white" />
            </View>
            <Text style={styles.buttonText}>
              Doğalgaz Faturasına İtiraz Dilekcesi
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Fragment>
  );
};
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: ww(0.07),
  },
  button: {
    width: '90%',
    height: wh(0.07),
    backgroundColor: '#4C93FF',
    justifyContent: 'center',
    borderRadius: wh(0.017),
    marginTop: ww(0.02),
  },
  textYakinda: {
    color: '#F0EBD8',
    fontSize: 16,
    fontWeight: '200',
  },
  buttonText: {
    color: '#F0EBD8',
    fontSize: wh(0.016),
    fontWeight: '600',
    marginLeft: ww(0.17),
  },
  buttonArea: {
    alignItems: 'center',
    marginTop: wh(0.02),
    justifyContent: 'center',
  },
});
