import React,{Component} from 'react';
import {
  View,
  Text
} from 'react-native';


export default class Danci extends Component{
    render(){
        return(
            <View>
                <View style={{width:'90%',height:1000,marginLeft:'5%'}}>
                    <Text style={{
                    fontSize:30,
                    marginTop:60
                    }}>今日目标：100词</Text>
                    <Text style={{
                    fontSize:30,
                    marginTop:20
                    }}>今日已掌握：</Text>
                    <Text style={{
                    fontSize:70,
                    textAlign:'center',
                    marginTop:120
                    }}>prescription</Text>
                    <View>
                    <Text style={{
                        fontSize:40,
                        textAlign:'center',
                        marginTop:150
                    }}>会</Text>
                    </View>
                    <View>
                    <Text style={{
                        fontSize:40,
                        textAlign:'center',
                        marginTop:50
                    }}>不会</Text></View>
                    <Text style={{color:'blue',marginLeft:50,marginTop:100,fontSize:25}}>
                        查看音标 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        查看解释 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        查看例句 
                    </Text>
                </View>
            </View>
        )
    }
}