import React, { Component } from 'react';
import {View} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import {Card} from 'react-native-elements';
import FormValidation from '../utils/validation';

import t from 'tcomb-form-native';
const Form = t.form.Form;

export default class Login extends Component {
    
    login(){
        //validate obtiene el formulario como un getElementById mediante 
        //el atributo "ref del formulario"
        const validate = this.refs.form.getValue();
        console.log(validate.email);
        console.log(validate.password);
    }
    render(){
        //creando el modelo user

        const user = t.struct({
            email: FormValidation.email,
            password: FormValidation.password,
        });

        const options = {
            fields:{
                email:{
                    help:'Introduce tu email',
                    error:'Email Inconrrecto',
                    autoCapitalize:'none'
                },
                password:{
                    help:'Introduce tu password',
                    error:'Password Inconrrecto',
                    Password:true,
                    secureTextEntry:true,
                }
            }
        }
        return(
            <BackgroundImage source={require('../../assets/images/fondo.jpg')}>
                <View>
                    <Card wrapperStyle={{paddingLeft:10}} title="Iniciar Sesion">
                        <Form   ref="form"
                                type={user}
                                options={options}/>
                        <AppButton bgColor="rgba(11,38,74,0.7)" 
                                title="Login"
                                action={this.login.bind(this)}
                                iconName="sign-in"
                                iconSize={30}
                                iconColor="#fff"/>
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}

