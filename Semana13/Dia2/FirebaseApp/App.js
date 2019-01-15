import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './aplication/components/AppButton';
import BackgroundImage from './aplication/components/BackgroundImage'
import PreLoader from './aplication/components/PreLoader';
import Start from './aplication/screens/Start';
import Login from './aplication/screens/Login';
import GuestNavigator from './aplication/navigations/Guest';

export default class App extends React.Component {
  render() {
    return (
      //1-PRIMER COMPONENTE
      // <View style={styles.container}>
      //    <AppButton title="Test"
      //                bgColor="rgba(220,100,20,0.7)"
      //                iconName="sign-in"
      //               iconColor="#fff"
      //                action={()=>{console.log("Me presionaron")}}>
      //    </AppButton>
      // </View>

      //2-COMPONENTE
      // <BackgroundImage source={require('./assets/images/fondo.jpg')}>
      //   <Text style={{color:"#fff",marginTop:100}}> 
      //       Hola mundo!!
      //   </Text>
      // </BackgroundImage>

      //3-COMPONENTE
      // <PreLoader/>

      //3-COMPONENTE
      // <Start/>

      //4-componente
      // <Login/>
      <GuestNavigator>

      </GuestNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
