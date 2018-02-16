import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import VoyagerItem from './voyagerList';
export default class VoyagerModal extends React.Component {

    constructor(props){
        super(props);
        this.props.navigator.setStyle({
            navBarCustomView:"noddier.navbarRecherche",
            navBarCustomViewInitialProps: {navigator: this.props.navigator,title:"Voyager",close:this.closeModal},
            navBarNoBorder:true,
            navBarBackgroundColor:"#0B3C5D",
            navBarTextColor:"#fff",
        });
        this.state = {
            product:[
                {
                    title:"Guitar",
                    from:"Paris,France",
                    to:"Londres, Angleterre",
                    timePublic:"12/05/2017",
                    weight:5,
                    type:"Moyen",
                    seller:{
                        name:"Djamil"
                    },
                    image:require('../../../img/guitar.jpg'),
                    id:1
                },
                {
                    title:"Poussette",
                    from:"Paris,France",
                    to:"Londres, Angleterre",
                    timePublic:"10/05/2017",
                    weight:3,
                    type:"Moyen",
                    seller:{
                        name:"Djamil"
                    },
                    image:require('../../../img/poussette.jpg'),
                    id:2
                }
            ]
        }
    }
    closeModal = () => {
        this.props.navigator.dismissModal({
            animationType: 'slide-down'
          });
    }
    render(){
        return (
            <View style={styles.container}>
            <View style={{backgroundColor:"#0B3C5D",height:40}}>
               <View style={styles.navItem}>
                        <Icon name="ios-search" size={20} color="#fff" />
                        <TouchableOpacity onPress={this.handlePress}><Text style={{color:"#fff",fontSize:15,paddingLeft:20}}>Où allez vous?</Text></TouchableOpacity>
                </View>
            </View>
            <FlatList 
                data={this.state.product}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=> <TouchableOpacity><VoyagerItem product={item}/></TouchableOpacity>}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    navItem:{
        backgroundColor:"#96858F",
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        marginLeft: 8,
        marginRight: 8,
        height:26,
        borderRadius: 5,
    }
})