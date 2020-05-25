import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,TouchableOpacity, TextInput,ScrollView } from 'react-native'
import { NoticeBar,Icon ,Tabs, WhiteSpace, Button} from '@ant-design/react-native';
import { Actions} from 'react-native-router-flux'

export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={{backgroundColor:'red',height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    {/* <Icon name='left' style={{marginLeft:15}}  color="#fff" onPress={()=>{Actions.pop()}} />
                    <Text style={{color:'#fff',fontSize:23}}>{this.props.name}</Text>
                    <Icon name='ellipsis' size={35} color="#fff" style={{marginRight:15}}/> */}
                    <Icon 
                        name='left'
                        size={15}
                        style={{marginLeft:10}}
                        color={'white'}
                        onPress={()=>{Actions.pop()}}
                    />
                    <Text style={{color:'white',fontSize:18}}>{this.props.name}</Text>
                    <Text style={{color:'white',fontSize:30,marginRight:15,marginTop:-23}}>...</Text>
                </View>
            </View>
        )
    }
}


