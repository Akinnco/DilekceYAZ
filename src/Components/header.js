import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Utils} from '../utils';
import Back from './icons/Back';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ww, wh} from '../helpers/responsive';

const {width} = Utils;

const TAB_WIDTH = (width - 50) / 3;

const Header = ({left, center, right, style}) => {
  let centerText = center && center.name;
  if (center && center.name && center.name.length > 23) {
    centerText = center.name.slice(0, 23) + '...';
  }

  return (
    <View style={[styles.c_header, style]}>
      <View style={styles.c_header_contain}>
        {left && left.status ? (
          <TouchableOpacity
            onPress={left.action}
            hitSlop={{
              top: 15,
              left: 15,
              right: 15,
              bottom: 15,
            }}
            style={[
              styles.itemWidth,
              {
                justifyContent: 'flex-start',
                width: wh(0.52),
              },
            ]}>
            {left.icon === 'back' ? (
              <Icon name="arrow-left" size={25} color="black" />
            ) : (
              <Text style={styles.menuItemLeft}>{left.name}</Text>
            )}
            {left.icon === 'menu' ? (
              <Icon name="ellipsis-v" size={25} color="white" />
            ) : null}
          </TouchableOpacity>
        ) : (
          <View style={styles.itemWidth} />
        )}

        {center && center.status ? (
          <TouchableOpacity
            onPress={center.action}
            hitSlop={{
              top: 15,
              left: 15,
              right: 15,
              bottom: 15,
            }}
            style={[
              styles.itemWidth,
              {
                justifyContent: 'center',
                marginLeft: wh(-0.47),
                width: ww(0.7),
                paddingLeft: -wh(0.2),
              },
            ]}>
            <Text style={styles.menuItemCenter}>{center.name}</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        {right && right.status ? (
          <TouchableOpacity
            onPress={right.action}
            hitSlop={{
              top: 15,
              left: 15,
              right: 15,
              bottom: 15,
            }}
            style={[
              styles.itemWidth,
              {justifyContent: 'flex-end'},
            ]}></TouchableOpacity>
        ) : (
          <View style={styles.itemWidth} />
        )}
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  c_header: {
    width,
    height: wh(0.06),
  },
  c_header_contain: {
    flex: 1,
    padding: wh(0.015),
    width: ww(1),
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    shadowColor: '#000',
    elevation: 20,
  },

  menuItem: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemCenter: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemWidth: {
    width: TAB_WIDTH,
    flexDirection: 'row',
  },
  menuItemLeft: {
    color: 'white',
    fontSize: wh(0.014),
  },
});
