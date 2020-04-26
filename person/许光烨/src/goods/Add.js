import React, { Component } from 'react'
import {View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Icon ,Tabs, TextareaItem, Button} from '@ant-design/react-native';
import TextAreaItem from '@ant-design/react-native/lib/textarea-item';
export default class Add extends Component {
    render() {
        return (
            <View>
                <View style={styles.herder}>
                    <Icon 
                        name='arrow-left'
                        size={20}
                        color={'white'}
                        style={{marginLeft:15,marginTop:12}}
                        onPress={()=>Actions.goods()}
                    />
                    <Text style={{color:'white',fontSize:18,marginTop:10,marginLeft:170}}>分享</Text>
                    <Text style={{color:'white',fontSize:30,marginLeft:165,marginTop:-10}}></Text>
                </View>
                <TextareaItem style={{width:"100%",height:300,backgroundColor:'#fff',color:"gray"}} placeholder="分享新鲜事...">

                </TextareaItem>
                <View style={{
                    width:"35%",
                    height:50,
                    backgroundColor:"red",
                    borderRadius:20,
                    marginLeft:"30%",
                    marginTop:10
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize:18,
                            textAlign:"center",
                            marginTop:12
                        }}>发表</Text>
                    </TouchableOpacity>
                </View>
            </View>   
        )
    }
}
const styles = StyleSheet.create({
    herder:{
        backgroundColor:'red',
        height:45,
        flexDirection:'row'
    }
})