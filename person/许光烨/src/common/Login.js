import React, {Component} from 'react';
import {View, Text,Dimensions,Alert, Image,ActivityIndicator, TextInput, AsyncStorage, TouchableOpacity, ImageBackground} from 'react-native';
import { Icon, Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
const {width,scale}=Dimensions.get('window');
console.log('w',width);
console.log('s',scale)
const s=width/640
console.log(s)
export default class Login extends Component {
    constructor(props){

        super(props);
        this.state={
            data:[],
            url:'',
            username:'',
            pws:''
        }
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    handleChange=(e)=>{
        this.setState({
            username: e.target.value
        })
    }
    handleChange1=(e)=>{
        this.setState({
            pws: e.target.value
        })
    }
    check(e){
        // this.state.data.map((item)=>{
        //     if(this.state.username==item.sname&&this.state.pws==item.spwd){
        //         this.props.history.push('/home')
        //     }
        // })
        e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            user:this.state.username,
            password:this.state.pws
        }
        fetch('http://129.211.62.80:8080/api',{
            // post提交
            method:"POST",
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.message){
                AsyncStorage.setItem('data',data.content);
                Actions.homePage
                // this.props.history.push(()=>{Actions.learn()})
                // this.props.onPress={Actions.learn()}
            }else{
                // onPress={()=>{Actions.learn()}} 
                alert('登录失败')
            }
        })
    }
    render() {
        return (
            <View>
                <ImageBackground style={{width:"100%",height:"100%"}} source={require("../../pic/yun.png")}>
                <View
                  style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Image style={{width:110,height:110,marginTop:-150}} source={require("../../pic/logo.png")}></Image>
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
                                onChange={this.handleChange}  id="username" name="username"
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
                                onChange={this.handleChange1}  id="pwd"  name="pwd"
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
                            // onPress={Actions.homePage}
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