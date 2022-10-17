

import Avatar from '@components/Avatar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={{
          fontFamily: 'Inter-black'
        }} >hello</Text>
        <Avatar/>
        <Icon name="home" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
});

export default App;
