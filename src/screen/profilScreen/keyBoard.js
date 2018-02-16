import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default class Button extends React.Component{

    handleOutPut = () => {
        if(this.props.keypad.type === "Number" || this.props.keypad.type === "enter"){
            return <Text style={styles.textStyle}>{this.props.keypad.value}</Text>
        }else{
            return <Icon name="ios-backspace-outline" size={30}/>
        }
    }
    render(){
        return (
            
            <View >
                {this.handleOutPut()}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    keypad:{
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1,
        width:"30%",
        height:60,
        borderTopLeftRadius: 28,
        borderBottomLeftRadius: 28,
        borderTopRightRadius: 28,
        borderBottomRightRadius:28,
        marginLeft: 5,
        marginRight: 5,
        borderColor: "#DFDCE3",
    },
    textStyle:{
        fontWeight: 'bold',
        fontSize: 30,
    }
})
