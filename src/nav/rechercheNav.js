import React from 'react';
import { View,Text,Image ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';

export default class RechercheNav extends React.Component{

    handleModal = () => {
        
            this.props.navigator.showModal({
                screen:'noddier.voyagerModal',
                title:'Voyager'
            })

        
    }
    render(){
        return (
            <View style={styles.navStyle}>
                <Image source={require('../../icon/ic_box.png')} resizeMode="contain" style={styles.icon}/>
                <TouchableOpacity onPress={this.props.close || this.handleModal} >
                    <Text style={{fontSize: 20,color:'#fff',paddingTop:2.5}}>{this.props.title} <Icon name="ios-arrow-down-outline" size={20} color="#fff"/></Text>
                </TouchableOpacity>
                <Image source={require('../../icon/ic_plane.png')} resizeMode="contain" style={styles.icon} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    navStyle:{
        flexDirection: 'row',
        justifyContent:'space-between',
        
    },
    icon:{
        width:30,
        height:30
    },
});