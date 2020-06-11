import React, { Component } from 'react'
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native'
import { Icon ,Tabs} from '@ant-design/react-native';
import { Actions,} from 'react-native-router-flux';
import Header from '../utils/Header';
export default class List1 extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/essay/like')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.content
            })
        })
    }
    componentWillUpdate(){
        fetch('http://129.211.62.80:8080/essay/like')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.content
            })
        })
    }
    delete=(idx)=>{
        console.log(idx.stime)
        fetch('http://129.211.62.80:8080/essay/delete?stime='+idx.stime)
        .then(res=>res.json())
        .then((res)=>{
            console.log('ok')
        })
    }
    render() {
        return (
            <View>
                <Header name="收藏" />
                <ScrollView>
                    {
                        this.state.data.map((item)=>{
                            return (
                                <View>
                                    <View style={styles.main}>
                                        <View style={styles.touxiang}>
                                            <Image source={{uri:`http://129.211.62.80:8080/images/img?name=${item.touxiang.slice(4)}`}} 
                                                style={{width:55,height:55}} />
                                        </View>
                                        <Text style={styles.nicheng}>{item.smane}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.text}>{item.scontent}</Text>
                                        <Image source={{uri:`http://129.211.62.80:8080/images/img?name=${item.touxiang.slice(4)}`}}  style={{
                                            height: 150,
                                            width:'95%',
                                            borderRadius:10,
                                            marginBottom:50
                                            }}
                                        />
                                        <Text style={styles.time}>{item.stime}</Text>
                                        <Text style={styles.delete} onPress={()=>this.delete(item)}>取消收藏</Text>
                                    </View>
                                
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    text:{
        fontSize:20,
        marginBottom:10,
        marginTop:5
    },
    touxiang:{
        height: 55,
        width: 55, 
        borderRadius:400, 
        // backgroundColor:'green',
        overflow:'hidden'
    },
    main:{
        marginTop:15,
        marginLeft:15,
        flexDirection:'row',
    },
    nicheng:{
        fontSize:18,
        color:'#555555',
        marginTop:15,
        marginLeft:15
    },
    content:{
        width:'80%',
        marginLeft:80
    },
    time:{
        fontSize:15,
        position:'absolute',
        right:'25%',
        bottom:10
    },
    delete:{
        fontSize:15,
        position:'absolute',
        right:'5%',
        bottom:10
    }
})