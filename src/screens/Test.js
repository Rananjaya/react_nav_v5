import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

const CustomDrawer = () => {
  return (
    <View>
      <Button
        title="Main"
        onPress={() => this.props.navigation.navigate('Main')}
      />

      <Button
        title="p1"
        onPress={() => this.props.navigation.navigate('p1')}
      />

      <Button
        title="p2"
        onPress={() => this.props.navigation.navigate('p2')}
      />

    </View>
  );
};

export default CustomDrawer;