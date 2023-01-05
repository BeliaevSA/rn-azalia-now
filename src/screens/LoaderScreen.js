import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';

export const LoaderScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Home'), 2500);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Azalia.png')} />
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color="#FF003C" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 40,
  },
});
