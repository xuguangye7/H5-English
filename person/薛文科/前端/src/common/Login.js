import React, {Component} from 'react';
import {View, Text,Dimensions,Alert, Image,ImageBackground,ActivityIndicator, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils/FetchData'
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
        console.log('username',this.state.username);
        if(this.state.username!=''&&this.state.pwd!=''){
            const post={
                username:this.state.username,
                pwd:this.state.pwd
            }
            console.log('post',post);
            fetch('http://129.211.62.80:8088/api',{
                method:'POST',
                headers:{
                    "Accept":'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(post)
            })
            .then(res=>res.json())
            .then(res=>{
                if(res.message){
                    AsyncStorage.setItem('logininfo',post.username)
                    AsyncStorage.getItem('logininfo').then(res=>{
                        console.log('loginres',res);
                    })
                    Actions.homePage();
                }else{
                    Alert.alert('用户名或密码错误');
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
                <ImageBackground style={{width:"100%",height:"100%"}} source={require("../../assets/yun.png")}>
                <View
                  style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Image style={{width:110,height:110,marginTop:-150}} source={require("../../assets/logo.png")}></Image>
                    {/* <View onSubmit={this.check.bind(this)}> */}
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
                            <Icon name="phone" color="red"/>
                            <TextInput placeholder="手机号" 
                                onChangeText={this.userhandle}  id="username" name="username"
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
                                onChangeText={this.pwdhandle}  id="pwd"  name="pwd"
                                placeholder="密码"
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
                    {/* </View> */}
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
                        onPress={Actions.register}
                    >
                        <Text>没有账号？去注册</Text>
                    </TouchableOpacity>
                </View>
                {/* {
                    this.state.isloading
                    ?<View style={{width:'100%',marginTop:50,alignItems:'center'}}>
                        <ActivityIndicator color="#8a8a8a" size={50}/>
                    </View>
                    :null
                } */}
                
                </ImageBackground>
            </View>
        );
    }
}