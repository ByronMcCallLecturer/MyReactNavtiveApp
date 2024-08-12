// MainScreen.tsx
import { Button, StyleSheet, Text, TextInput, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackPrams';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function MainScreen({ navigation }: MainScreenProps) {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log("App starting up");
  return (
    <View>
      <SafeAreaView >
      <ScrollView >
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize}
        source={require('../img/welcome_to_react.png')} />
      </View>
      <Text style={styles.welcomeText}>Welcome your React App!</Text>        
      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}>Enter Name:</Text>
        <TextInput style={styles.InputBoxs} 
                  placeholder="First Name"
                  onChangeText={newText => setName(newText)}
                  />
      </View>
      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}>Enter Surname:</Text>
        <TextInput style={styles.InputBoxs} 
                   placeholder="Surname"
                   onChangeText={newText => setSurname(newText)}
                   />
      </View>
      <Button title = "Add User"
      onPress={() => {
        navigation.navigate('ViewDetails', {
          NameSend : Name,
          SurnameSend : Surname});
        console.log("Name: " + Name + 
                    " Surname: " + Surname)
      }}/>
      </ScrollView>
      </SafeAreaView>
    </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  welcomeText: {
    paddingTop: 20,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  mainPicture: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageSize: {
    width: 200,
    height: 200,
  },
  InputFlex: {
    width: '100%',
    marginVertical: 10,
  },
  HeadingText: {
    fontSize: 18,
    marginBottom: 5,
  },
  InputBoxs: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
