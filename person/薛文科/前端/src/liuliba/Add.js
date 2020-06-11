import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity, AsyncStorage, Alert, Image  } from 'react-native'
import {myFetch} from '../utils/FetchData'
import ImagePicker from 'react-native-image-picker';
let name,touxiang1;
const options = {
    title: '上传头像',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class Add extends Component {
    constructor(){
        super();
        this.state={
            content:'',
            imageUrl:require('../../assets/touxiang.png')
        }
    }
    userhandle = (text)=>{
        this.setState({content:text})
    }
    takePhoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {  
                const source = { uri: response.uri };
                console.log('source',source)
                AsyncStorage.setItem('sourcecontent',source.uri)
                AsyncStorage.getItem('sourcecontent')
                .then(res=>{
                    console.log('res',res)
                    this.setState({
                        imageUrl: {uri:res},
                    });
                })
            }
            // AsyncStorage.removeItem('source');
        });
    }
    add=()=>{
        console.log('INSERT into essay(sno,smane,scontent,stime,touxiang,sphone) VALUES($1,$2,$3,$4,$5,$6)')
        AsyncStorage.getItem('logininfo')
        .then(res=>{
            console.log('name',res);
            name=res
        })
        AsyncStorage.getItem('source')
        .then(res=>{
            console.log('touxiang',res);
            touxiang1=res
        })
        const post={
            sno:'1',
            smane:name,
            scontent:this.state.content,
            stime:'2020-6-12',
            touxiang:touxiang1,
            spone:'123',
            tupian:this.state.imageUrl
        }
        console.log('post',post);
        fetch('http://129.211.62.80:8088/essay',{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(res=>{
            Alert.alert('成功');
        })
    }
    render() {
        return (
            <View>
                <Text> 发表 </Text>
                <View
                    style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        alignItems: 'center',
                        paddingLeft: 20,
                    }}>
                    <TextInput placeholder='内容' 
                        onChangeText={this.userhandle}
                    />
                        <TouchableOpacity style={{width:120,height:120}} onPress={()=>{this.takePhoto()}}>
                        <Image style={{width:120,height:120}} source={this.state.imageUrl} onPress={()=>{this.takePhoto()}}/>
                        </TouchableOpacity>
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
                        onPress={this.add}
                    >
                        <Text>发表</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
