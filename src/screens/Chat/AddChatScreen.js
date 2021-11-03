import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const AddChatScreen = ({navigation}) => {
  const [input, setInput] = useState('');
  const db = firestore();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a New Chat',
      headerBackTitle: 'Chats',
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection('chats')
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => alert(error));
    alert(`${input} addd`);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a Chat Name"
        value={input}
        onChangeText={text => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="#000000" />
        }
      />
      <Button onPress={createChat} title="Create New Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    height: '100%',
  },
});
