import React, {Component} from 'react';
import {View, Text,Dimensions,Alert, Image,ActivityIndicator,ImageBackground, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
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
        // if(this.state.username!=''&&this.state.pwd!=''){
        //     const post ={
        //         user:this.state.username,
        //         pwd:this.state.pwd

        //     }
        //     var newPost={}
        //     newPost.username=post.username;
        //     newPost.pwd=post.pwd
        //     post.child=newPost
        //     console.log('post',post)
        //     fetch('http://129.211.62.80:8080/api',{
        //         method:'POST',
        //         headers:{
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body:JSON.stringify(newPost),
        //     }).then(res=>{
        //         if(res.ok){
        //             return res.json()
        //         }
        //     }).then(res=>{
        //         if(res.message){
        //             Actions.homePage()
        //         }
        //     })
        // }else{
        //     Alert.alert('不能为空');
        // }
        Actions.homePage()
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
                            <Icon name="user" color="red"/>
                            <TextInput placeholder="用户名" 
                                onChange={this.userhandle}  id="username" name="username"
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
                                onChange={this.pwdhandle}  id="pwd"  name="pwd"
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