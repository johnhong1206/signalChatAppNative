import React, {useState, useEffect, useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import HeaderLeft from '../components/HeaderLeft';
import {Avatar} from 'react-native-elements';
import HeaderRight from '../components/HeaderRight';
import firestore from '@react-native-firebase/firestore';
import CustomListItem from '../components/CustomListItem';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore';

const HomeScreen = ({navigation}) => {
  const db = firestore();
  const [chats, setChats] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: {backgroundColor: '#FFFFFF'},
      headerTitleStyle: {color: '#000000'},
      headerTintColor: '#000000',
      headerLeft: () => <HeaderLeft navigation={navigation} />,
      headerRight: () => <HeaderRight navigation={navigation} />,
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot =>
      setChats(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })),
      ),
    );
    return unsubscribe;
  }, []);

  const enterChat = (id, chatName) => {
    navigation.navigate('Chat', {
      id: id,
      chatName: chatName,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({id, data: {chatName}}) => (
          <CustomListItem id={id} chatName={chatName} enterChat={enterChat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
});
