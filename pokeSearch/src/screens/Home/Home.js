import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-elements';

const Home = () => {
  return (
    <View style={styles.home}>
      <Text h4>
        HomeScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default Home;