import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RechercheItem from './rechercheList';
export default class Recherche extends React.Component{

    constructor(props){
        super(props);
        this.props.navigator.setStyle({
            navBarCustomView:"noddier.navbarRecherche",
            navBarCustomViewInitialProps: {navigator: this.props.navigator,title:"Expédier"},
            navBarNoBorder:true,
            navBarBackgroundColor:"#0B3C5D",
            navBarTextColor:"#fff",
        });
        this.state = { 
            order:[
                {
                    from:"Paris,France",
                    to:"Londres, Angleterre",
                    avaiableTransfer:"train",
                    dateStart:"20 MAI",
                    dateEnd:"21 MAI",
                    timeStart:"15:00",
                    timeEnd:"15:00",
                    comment:16,
                    seller:{
                        name:"Djamil",
                        start:4.5,
                    },
                    kilo:"3/5",
                    pricePerKg:5,
                    id:1
                },
                {
                    from:"Paris,France",
                    to:"Londres, Angleterre",
                    avaiableTransfer:"train",
                    dateStart:"20 MAI",
                    dateEnd:"21 MAI",
                    timeStart:"15:00",
                    timeEnd:"15:00",
                    comment:16,
                    seller:{
                        name:"Djamil",
                        start:4.5,
                    },
                    kilo:"3/5",
                    pricePerKg:5,
                    id:2
                },
                {
                    from:"Paris,France",
                    to:"Londres, Angleterre",
                    avaiableTransfer:"train",
                    dateStart:"20 MAI",
                    dateEnd:"21 MAI",
                    timeStart:"15:00",
                    timeEnd:"15:00",
                    comment:16,
                    seller:{
                        name:"Djamil",
                        start:4.5,
                    },
                    kilo:"3/5",
                    pricePerKg:5,
                    id:3
                }
            ]
        }
    }
    handlePress = () => {
        console.log(this.props.navigator);

    }
    render(){

        return (
            <View style={styles.container}>
                <View style={{backgroundColor:"#0B3C5D",height:50}}>
                    <View style={styles.navItem}>
                        <Icon name="ios-search" size={20} color="#fff" />
                        <TouchableOpacity onPress={this.handlePress}><Text style={{color:"#fff",fontSize:15,paddingLeft:20}}>Où va votrevotre colis?</Text></TouchableOpacity>
                        
                    </View>
                    
                </View>
                <FlatList 
                    data={this.state.order}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item}) => <TouchableOpacity><RechercheItem order={item}/></TouchableOpacity>}/>
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
        height:31,
        marginTop: 8,
        borderRadius: 5,
    }
})