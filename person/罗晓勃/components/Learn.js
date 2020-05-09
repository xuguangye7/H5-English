import React, { Component } from 'react'
import { Text, View,Dimensions,StyleSheet, ScrollView,Image, TouchableOpacity,TextInput,ToastAndroid} from 'react-native'
import { Icon ,Tabs} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Learn1 from './Learn1'
import Word from './Word'
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
export default class Learn2 extends Component {
    constructor(){
        super();
        this.state={
            searchData:''
        }
    }
    searchhandle = (text)=>{
        this.setState({searchData:text})
    }
    search=()=>{
        let formData=new FormData();
        formData.append('id','3');
        var opts={
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:formData
        }
        const post ={
            id:this.state.searchData
        }
        fetch('http://129.211.62.80:8080/word',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(post),
        }).then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(res=>{
            console.log(res);
            console.log(res.id)
            console.log(res.message)
            if(res.message){
                Actions.search()
            }else{
                ToastAndroid.show('没有搜索到你要的词汇');
            }
        }).catch((err)=>{
            console.error(err);
        })
    }
    log=()=>{
        console.log('ok')
    }
    render() {
        const tabs = [
            { title: '轻松学' },
            { title: '背单词' },
          ];
          const style = {
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#e9e4d9',
          };
        return (
            <View style={{flex:1,zIndex:1}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput 
                            placeholder="请输入您要搜索的单词"
                            placeholderTextColor='#8a8a8a'
                            style={{
                                width: 490*s,height: 50*s,
                                padding: 0,
                                paddingLeft: 10
                            }} 
                            onChangeText={this.searchhandle}
                        />
                    </View>    
                    <TouchableOpacity onPress={
                        this.search
                    }>
                        <Icon name='search' color='gray'/>
                    </TouchableOpacity>       
                </View>
                <Tabs tabs={tabs} 
                    tabBarActiveTextColor='#7eaedc'
                    usePaged='true'
                    tabBarBackgroundColor='#e9e4d9'
                    // tabBarTextStyle='bolder'
                >
                    <Learn1/>
                    <Word/>
                </Tabs>
                
                
               
            </View>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        width:width,
        height: 75*s,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:"#e9e4d9",
        marginBottom:3
    },
    search:{
        width: 525*s,
        height: 60*s,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listenclick:{
        width:100*s,
        height:100*s,
        position:'absolute',
        right:10,
        bottom:10,
        backgroundColor:'red',
        borderRadius:50*s,
        // zIndex:99
    }
})