import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import auth from '@react-native-firebase/auth';

const HeaderRight = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        marginRight: 20,
      }}>
      <TouchableOpacity activeOpacity={0.5}>
        <AntDesign name="camerao" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddChat')}
        activeOpacity={0.5}>
        <SimpleLineIcons name="pencil" size={24} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
