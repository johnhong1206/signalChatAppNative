import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const HeaderLeft = ({navigation}) => {
  const signOutUser = () => {
    auth()
      .signOut()
      .then(() => {
        alert('signout');
        navigation.replace('Login');
      });
  };

  return (
    <View style={{marginLeft: 20}}>
      <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
        <Avatar
          rounded
          source={{
            uri: auth()?.currentUser?.photoURL,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLeft;
