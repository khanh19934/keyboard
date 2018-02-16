import React from 'react';
import { View,Text ,StyleSheet,TouchableOpacity} from 'react-native';
import {FormInput} from 'react-native-elements';
import Keypad from './keyBoard';
export default class Keyboard extends React.Component{
    state = {
        code:[],
        valueForm_1:'',
        valueForm_2:'',
        valueForm_3:'',
        valueForm_4:'',
        valueForm_5:'',
        valueForm_6:'',
        numberKeyboardRow1:[
            {
                value:1,
                type:"Number"
            },
            {
                value:2,
                type:"Number"
            },
            {
                value:3,
                type:"Number"
            }
        ],
        numberKeyboardRow2:[
            {
                value:4,
                type:"Number"
            },
            {
                value:5,
                type:"Number"
            },
            {
                value:6,
                type:"Number"
            }
        ],
        numberKeyboardRow3:[
            {
                value:7,
                type:"Number"
            },
            {
                value:8,
                type:"Number"
            },
            {
                value:9,
                type:"Number"
            }
        ],
        numberKeyboardRow4:[
            {
                value:0,
                type:"Number"
            },
            {
                value:"back",
                type:"button"
            },
            {
                value:"OK",
                type:"enter"
            }
        ],
        currentNum:''
    }

    handlePress = (value) => {
       this.setState({currentNum:value});
    }

    render(){
        return (
            <View>
            <View style={styles.container}>
                <Text style={{marginBottom:30}}> Nhập mã xác nhận </Text>
                <View style={styles.form}>
                    <View style={styles.formInput}  >
                        <FormInput 
                        secureTextEntry={true} 
                        maxLength={1} 
                        ref="one" 
                        returnKeyType="next" 
                        onChangeText={(text) => {
                            if(text && text.length === 1){
                                this.setState(state => ({
                                    code:state.code.concat(text),
                                    valueForm_1:text
                                }))
                                this.refs.two.focus();                               
                                }else{
                                this.setState({
                                    valueForm_1:text
                                })
                            }
                            }}
                        value={this.state.valueForm_1}
                      
                        />
                    </View>
                    <View style={styles.formInput}>
                        <FormInput 
                        secureTextEntry={true} 
                        maxLength={1} 
                        ref="two" 
                        returnKeyType="next" 
                        onChangeText={(text) => {
                            if(text && text.length === 1){
                                this.setState(state => ({
                                    code:state.code.concat(text),
                                    valueForm_2:text
                                }));
                                this.refs.three.focus();
                                }else{
                                this.setState({
                                    valueForm_2:text
                                })
                                this.refs.one.focus(); 
                            }
                                }} 
                        value={this.state.valueForm_2} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <FormInput 
                        secureTextEntry={true} 
                        maxLength={1} 
                        ref="three" 
                        returnKeyType="next" 
                        onChangeText={(text) => {
                            if(text && text.length === 1){
                                this.setState(state => ({
                                    code:state.code.concat(text),
                                    valueForm_3:text
                                }));
                                this.refs.four.focus();
                                }else{
                                this.setState({
                                    valueForm_3:text
                                })
                                this.refs.two.focus(); 
                            }
                                }}
                        value={this.state.valueForm_3}  
                        />
                    </View>
                    <View style={styles.formInput}>
                        <FormInput 
                        secureTextEntry={true} 
                        maxLength={1} 
                        ref="four" 
                        returnKeyType="next" 
                        onChangeText={(text) => {if(text && text.length === 1){
                            this.setState(state => ({
                                    code:state.code.concat(text),
                                    valueForm_4:text
                                }));
                            this.refs.five.focus();
                            }else{
                                this.setState({
                                    valueForm_4:text
                                })
                                this.refs.three.focus(); 
                            }
                            }}
                        value={this.state.valueForm_4}  
                        />
                    </View>
                    <View style={styles.formInput}>
                        <FormInput 
                        secureTextEntry={true} 
                        maxLength={1} 
                        ref="five" 
                        returnKeyType="next" 
                        onChangeText={(text) => {if(text && text.length === 1){
                            this.setState(state => ({
                                    code:state.code.concat(text),
                                    valueForm_5:text
                                }));
                            this.refs.six.focus();
                            }else{
                                this.setState({
                                    valueForm_5:text
                                })
                                this.refs.four.focus(); 
                            }
                            }} 
                        value={this.state.valueForm_5}     
                        />
                    </View>
                    <View style={styles.formInput}>
                        <FormInput 
                        secureTextEntry={true} 
                        maxLength={1} 
                        ref="six" 
                        returnKeyType="next"
                        onChangeText={text => {
                            if(text.length ===1){
                                this.setState(state => ({
                                    code:state.code.concat(text),
                                    valueForm_6:text
                                }));
                            }else{
                                this.setState({
                                    valueForm_6:text
                                })
                                this.refs.five.focus(); 
                            }
                        }}
                        value={this.state.valueForm_6} 
                        />
                    </View>

                </View>
               
            </View>
            <View style={{marginTop:150}}>
                <View style={styles.mainKeyboard}>
                    {this.state.numberKeyboardRow1.map(item => <TouchableOpacity onPress={() => this.handlePress(item.value)} key={item.value} style={styles.keypad}><Keypad  style={styles.keypad} keypad={item}/></TouchableOpacity>)}
                </View>
                <View style={styles.mainKeyboard}>
                    {this.state.numberKeyboardRow2.map(item => <TouchableOpacity key={item.value} style={styles.keypad}><Keypad  style={styles.keypad} keypad={item}/></TouchableOpacity>)}
                </View>
                <View style={styles.mainKeyboard}>
                    {this.state.numberKeyboardRow3.map(item => <TouchableOpacity key={item.value} style={styles.keypad}><Keypad style={styles.keypad} keypad={item}/></TouchableOpacity>)}
                </View>
                <View style={styles.mainKeyboard}>
                    {this.state.numberKeyboardRow4.map(item => <TouchableOpacity key={item.value} style={styles.keypad}><Keypad style={styles.keypad} keypad={item}/></TouchableOpacity>)}
                </View>
            </View>
           
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        marginTop:100
    },
    form:{
        flexDirection: 'row',
        marginTop:30,
        marginLeft: 50,
        marginRight:50
    },
    formInput:{
        width:"22%"
    },
    mainKeyboard:{
        flexDirection: 'row',
        height:80,

    },
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
    }
})