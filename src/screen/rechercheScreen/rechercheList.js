import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';


export default class RechercheItem extends React.Component{

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.address}>
                    <View>
                        <Image 
                        source={require('../../../icon/linker.png')}
                        resizeMode="contain"
                        style={{height:45,width:48}}/>
                    </View>
                    <View>
                        <View style={{flexDirection: 'column',paddingTop: 3,}}>
                            <Text>{this.props.order.from}</Text>
                            <Text>{this.props.order.to}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent:'flex-end',flex:1,paddingRight: 20,}}>
                        <Image 
                        source={require('../../../icon/train.png')}
                        resizeMode="contain"
                        style={styles.iconStyle}
                        />
                    </View>
                </View>
                <View style={styles.detailOrder}>
                    <View>
                        <Text style={styles.titleStyle}>RDV avant</Text>
                        <Text style={styles.dateStyle}>20 MAL</Text>
                        <Text style={styles.timeStyle}>15 : 00</Text>
                    </View>
                    <View>
                        <Text style={styles.titleStyle}>Livraison</Text>
                        <Text style={styles.dateStyle}>21 MAL</Text>
                        <Text style={styles.timeStyle}>15 : 00</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.titleStyle}>Volume disponible</Text>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent:"space-between"}}>
                            <Image source={require('../../../icon/email.png')} style={styles.iconStyle}/>
                            <Image source={require('../../../icon/luggage.png')} style={styles.iconStyle}/>
                            <Image source={require('../../../icon/package.png')} style={styles.iconStyle}/>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent:"space-between",marginLeft:13,marginRight: 13,}}>
                         
                            <Text style={styles.titleStyle}>S</Text>
                            <Text style={styles.titleStyle}>M</Text>
                            <Text style={styles.titleStyle}>L</Text>
                        </View>
                        
                    </View>
                </View>
                <View style={styles.moreDetail}>
                    <View style={{flexDirection: 'row',}}>
                        <Image 
                            source={require('../../../img/ava-1.png')}
                            resizeMode="cover"
                            style={styles.avaStyle}
                        />
                        <Image source={require('../../../icon/star.png')}
                            resizeMode="contain"
                            style={{height:29,width:29,marginLeft: -14,}}
                            />
                    </View>
                    <View>
                        <Text style={{color:"#0375B4",fontSize:13}}>4.5 (16 commentaires)</Text>
                        <Text style={{color:"#062F4F",fontSize:25,fontWeight:'bold'}}>Djamil</Text>
                    </View>
                    <View style={style.lastDetail}>
                        <View style={styles.kilodispos}>
                            <Text style={{fontSize: 10,fontWeight:"bold",color:"#062F4F",alignSelf: 'center',}}>Kilo dispos</Text>
                            <Text style={{fontSize: 15,color:"#062F4F",alignSelf: 'center',}}>3/5</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={{fontSize: 15,fontWeight:"bold",color:"#fff",alignSelf: 'center',paddingTop:6}}>5€ | Kg</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        borderBottomWidth: 1.2,
        borderBottomColor: "#0B3C5D",
    },
    address:{
        flexDirection: 'row'
    },
    detailOrder:{
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 32,
        marginRight: 32,
        justifyContent:"space-between"
    },
    titleStyle:{
        color:"#062F4F",
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    dateStyle:{
        paddingTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color:"#0375B4"
    },
    timeStyle:{
        alignSelf: 'center',
        fontSize: 24,
        color:"#0375B4"
    },
    iconStyle:{
        height:36,
        width:36,
        marginTop:5
    },
    moreDetail:{
        flexDirection: 'row',
        justifyContent:"space-between",
        marginLeft: 32,
        marginTop: 15,
    },
    avaStyle:{
        borderRadius:30,
        height:60,
        width:60
    },
    kilodispos:{
        backgroundColor:"yellow",
        height:35,
        width:120,
        borderTopLeftRadius: 34,
    },
    lastDetail:{
        flex:1
    },
    price:{
        backgroundColor:"#062F4F",
        height:35,
        width:120,
        borderBottomLeftRadius: 34,
    }
})