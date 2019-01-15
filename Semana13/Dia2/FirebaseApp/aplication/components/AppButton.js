import React from 'react';
//importando el elemnto button de la libreria react-native elements
import { Button } from 'react-native-elements';
//Importando el elemento Dimensions de recat-native para obtener las dimensiones de la 
//pantalla del dispositivo
import {Dimensions} from 'react-native';
//importando componente para hacer uso de iconos
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AppButton extends React.Component {
  render() {
      const {title,iconName,iconColor,bgColor,action,iconSize} = this.props;
      const {width} = Dimensions.get('window');
    return (
      <Button
          onPress={action}
                    text={title}
                    title={title}
                    icon={
                        <Icon name={iconName} size={iconSize} color={iconColor}/>
                    }
                    buttonStyle = {
                        {
                            backgroundColor:bgColor,
                            height:45,
                            borderColor:"#92a8d1",
                            borderWidth:0,
                            borderRadius:5,
                            marginBottom:5,
                            width:width,
                        }
                    }

                    iconRight={true}
              >
      </Button>
    );
  }
}

