import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Button, Footer, Post, Input } from '@components';
import { UserProfile, Lorem } from '@assets';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HOME</Text>
      <Button />
      <Footer />
      <Post />
      <Input />
      <Image source={UserProfile} style={styles.image} />
      <Image source={Lorem} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: { width: 50, height: 50, borderRadius: 8 },
});
export default Home;
