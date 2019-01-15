import React, {Component} from 'react';
import BackgroundImage from '../components/BackgroundImage';
import {  View } from 'react-native';
import AppButton from '../components/AppButton';
import {NavigationActions} from 'react-navigation';


export default class Start extends Component{
    login(){
      const navigateAction = NavigationActions.navigate({
          routeName:'Login'
      });
      this.props.navigate.dispatch(navigateAction);
    }
    render(){
      
        return(
        <BackgroundImage source={require('../../assets/images/fondo.jpg')}>
             <View style={{justifyContent:'center',flex:1}}>
                  <AppButton bgColor="rgba(111,38,74,0.7)"
                             title="Entrar"
                             action={()=>{this.login.bind(this)}}
                             iconName="sign-in"
                             iconSize={30}
                             iconColor="#fff">
                   </AppButton> 

                   <AppButton bgColor="rgba(200,200,50,0.7)"
                             title="Registrarme"
                             action={()=>{}}
                             iconName="user-plus"
                             iconSize={30}
                             iconColor="#fff">
                   </AppButton>

                   <AppButton bgColor="rgba(67,67,146,0.7)"
                             title="Facebook"
                             action={()=>{}}
                             iconName="facebook"
                             iconSize={30}
                             iconColor="#fff">
                   </AppButton>
             </View>
        </BackgroundImage>
            
        )
    }
}