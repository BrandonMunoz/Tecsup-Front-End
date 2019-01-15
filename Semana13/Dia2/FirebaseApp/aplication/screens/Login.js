import React, {Component} from 'react';
import {  View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import {Card} from 'react-native-elements';
import FormValidation from '../utils/validation';

import t from 'tcomb-form-native';
const Form = t.form.Form;

export default class Login extends Component{

    login(){
        //validate obtiene el formulario como un getElementById mediante 
        //el atributo "ref del formulario"
        const validate = this.refs.form.getValue();
        console.log(validate.email);
        console.log(validate.password);
    }

    render(){
    //CREANDO EL MODELO USER
    this.user = t.struct({
        email: FormValidation.email,
        password: FormValidation.password,
    })

    this.options = {
        fields:{
            email:
            {
                help:"Introduce tu email",
                error:"Email Incorrecto",
                autoCapitalize:'none'
            },
            password:{
                help:"Introduce tu password",
                error:"Password Incorrecto",
                password:true,
                secureTextEntry:true //cifrado
            }
        }
    }

        return(
           <BackgroundImage source={require('../../assets/images/fondo.jpg')}>
            <View>
                <Card wrapperStyle={{paddingLeft:10}} title="Iniciar Secion">
                    <Form ref="form"
                          type={this.user}
                          options={this.options}
                          />
                    <AppButton bgColor="rgba(111,38,74,0.7)"
                               title="Login"
                               action={this.login.bind(this)}
                               iconName="sign-in"
                               iconSize={30}
                               iconColor="#fff">
                    </AppButton>
                </Card>
            </View>
           </BackgroundImage>
        )
    }
}