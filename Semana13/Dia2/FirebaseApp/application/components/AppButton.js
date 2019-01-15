import React, { Component } from 'react';
//importando el elemento button de la libreria react-native-elements
import { Button } from 'react-native-elements';
//importando elemento Dimesions de react-native para obtener las dimensiones de la pantalla en el dispositivo
import { Dimensions } from 'react-native';
//importando componente para hacer uso de iconos
import Icons from 'react-native-vector-icons/FontAwesome';

export default class AppButton extends Component {

    render() {
        //obteniendo las variables a traves de props ( del elemento que invoque nuestro componente)
        const { title, iconName, iconTitle, bgColor, action, iconSize } = this.props;
        //obteniendo el ancho de la pantalla
        const { width } = Dimensions.get('window');
        return (
            <Button 
                onPress={action}
                text={title}
                title={title}
                icon={<Icon name={iconName} size= {iconSize} color={iconColor} />}
                buttonStyle={
                    {
                        backgroundColor: bgColor,
                        height: 45,
                        borderColor: "transparent",
                        borederWidth: 0,
                        borederRadius: 5,
                        marginBottom: 5,
                        width: width,
                    }
                }
                iconRight={true}
                // onPress={action}
            >
            </Button>
        )
    }
}