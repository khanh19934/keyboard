import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class VoyagerItem extends React.Component{
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
                            <Text>{this.props.product.from}</Text>
                            <Text>{this.props.product.to}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column',alignItems: 'flex-end',flex:1,paddingRight: 20,}}>
                            <Text>Publiés le</Text>
                            <Text>{this.props.product.timePublic}</Text>
                    </View>
                </View>
                <View>
                    <View style={{alignItems: 'center',}}>
                        <Text>{this.props.product.title}</Text>
                    </View>
                    <View style={styles.imageSection}>
                        <Image 
                        source={this.props.product.image}
                        style={styles.image}
                        resizeMode="contain"
                        />
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
                        <View style={{flexDirection: 'row',justifyContent:'space-between',marginRight: 10,}}>
                            <Image source={require('../../../icon/luggage.png')} style={styles.iconStyle}/>
                            <View style={{height:36,width:36,borderRadius:18,justifyContent:"center",alignItems: 'center',backgroundColor:"#8FD8D2",marginTop:5,marginLeft: 5,}}>
                                <Icon name="weight-kilogram" size={20}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent:'space-between',marginRight: 25}}>
                            <Text>{this.props.product.type}</Text>
                            <Text>{this.props.product.weight}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    address:{
        flexDirection: 'row',
    },
    imageSection:{
        marginLeft:10,
        marginRight: 10
    },
    image:{
        width:"100%",
        height:200
    },
    moreDetail:{
        flexDirection: 'row',
        justifyContent:"space-between",
        marginLeft: 32,
        marginTop: 15,
        marginBottom: 20,
    },
    avaStyle:{
        borderRadius:30,
        height:60,
        width:60
    },
    lastDetail:{
        flex:1
    },
    iconStyle:{
        height:36,
        width:36,
        marginTop:5
    },
    container:{
        borderBottomColor: "#0B3C5D",
        borderBottomWidth: 1.2,
    }
})