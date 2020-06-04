import React, {Component} from 'react';
import {View, Text, Image,ActivityIndicator,  TextInput, AsyncStorage, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

import {myFetch} from '../utils/FetchData'
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            phone:"",
            pwd:'',
            pwdRepeat:'',
            isRegiste:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    phonehandle = (text)=>{
        this.setState({phone:text})
    }
    pwdRepeathandle = (text)=>{
        this.setState({pwdRepeat:text})
    }
    register=()=>{
        if(this.state.username!=''&&this.state.pwd!=''&&this.state.pwdRepeat!=''){
            if(this.state.pwd==this.state.pwdRepeat){
                this.setState({isRegiste:true})
                const post={
                    nicheng:this.state.username,
                    username:this.state.username,
                    qqcom:this.state.phone.slice(9),
                    sphone:this.state.phone,
                    spwd:this.state.pwd,
                    sclass:'7'
                }
                fetch('http://129.211.62.80:8088/register',{
                    method:'POST',
                    headers:{
                        "Accept":'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(post)
                })
                .then(res=>res.json())
                .then(res=>{
                    Alert.alert('注册成功');
                    setTimeout(() => {
                        Actions.login()
                    }, 1000);
                })
                
                console.log('nicheng,sname,qqcom,sphone,spwd,sclass')
                
            }else{
                Alert.alert('两次密码不一致');
            }
        }else{
            Alert.alert('不能为空');
        }
    }
    render() {
        return (
            <View>
                <ImageBackground style={{width:"100%",height:"100%"}} source={require("../../assets/yun.png")}>
                    <View style={{flex: 1,justifyContent: 'center'}}>
                    <View
                    style={{ alignItems: 'center'}}>
                        <Image style={{width:110,height:110,marginTop:-150}} source={require("../../assets/logo.png")}></Image>
                        <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            marginTop:20,
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="phone" color="red"/>
                        <TextInput placeholder="手机号" 
                            onChangeText={this.phonehandle}
                        />
                        </View>
                        <View
                        style={{
                            width: '80%',
                            marginRight: 10,
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
                        <View
                            style={{
                                width: '80%',
                                marginRight: 10,
                                borderBottomColor: '#ccc',
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 20,
                            }}
                        >
                            <Icon name="lock" color="red"/>
                            <TextInput 
                                onChangeText={this.pwdRepeathandle}
                                placeholder="再次输入密码" 
                                secureTextEntry={true}
                            />
                        </View>
                            <TouchableOpacity 
                                style={{
                                    width: '80%',
                                    height: 40,
                                    backgroundColor: '#ccc',
                                    marginTop: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius:10
                                }}
                                onPress={this.register}
                            >
                                <Text>去登录</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.isRegiste
                            ?<View style={{width:'100%',marginTop:50,alignItems:'center'}}>
                                <ActivityIndicator color="#8a8a8a" size={50}/>
                            </View>
                            :null
                        }
                    </View>
                </ImageBackground>
            </View>
        );
    }
}