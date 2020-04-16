import React, {Component} from 'react';
import {View, Text,Dimensions,Alert, Image,ActivityIndicator, TextInput, AsyncStorage, TouchableOpacity, ImageBackground} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
const {width,scale}=Dimensions.get('window');
console.log('w',width);
console.log('s',scale)
const s=width/640
console.log(s)
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        if(this.state.username!=''&&this.state.pwd!=''){
            this.setState({isloading:true})
            myFetch.post('/login',{
                username:this.state.username,
                pwd:this.state.pwd}
            ).then(res=>{
                if(res.data.state!='1'){
                    this.setState({isloading:false})
                    Alert.alert('用户名或密码错误');
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                        .then(()=>{
                            this.setState({isloading:false})
                            Actions.homePage();
                        })
                }
            })
        }else{
            Alert.alert('不能为空');
        }
    }
    register=()=>{
      AsyncStorage.setItem('user',true);
      Actions.register()
    } 
    render() {
        return (
            <View>
                <ImageBackground style={{width:"100%",height:"100%"}} source={require("../../pic/yun.png")}>
                <View
                  style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Image style={{width:110,height:110,marginTop:-150}} source={require("../../pic/logo.png")}></Image>
                    <View
                      style={{
                        width: '80%',
                        marginRight: 10,
                        marginTop:60,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                      }}>
                      <Icon name="user" color="red"/>
                      <TextInput placeholder="用户名" 
                          onChangeText={this.userhandle}
                      />
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            marginTop:10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}
                      >
                        <Icon name="lock" color="red"/>
                        <TextInput 
                            onChangeText={this.pwdhandle}
                            placeholder="密码" 
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity 
                        style={{
                            width: '70%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 60,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:10
                        }}
                        onPress={this.login}
                    >
                        <Text>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            width: '70%',
                            height: 40,
                            marginTop:20,
                            backgroundColor: '#ccc',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:10
                        }}
                        onPress={this.register}
                    >
                        <Text>没有账号？去注册</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isloading
                    ?<View style={{width:'100%',marginTop:50,alignItems:'center'}}>
                        <ActivityIndicator color="#8a8a8a" size={50}/>
                    </View>
                    :null
                }
                
                </ImageBackground>
            </View>
        );
    }
}