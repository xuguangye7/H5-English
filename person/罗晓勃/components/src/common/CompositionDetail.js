import React, { Component } from 'react'
import { Text,View,DeviceEventEmitter,Animated,Dimensions, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native'
import { Actions} from 'react-native-router-flux'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData' 
import { Button ,List, TextareaItem, } from '@ant-design/react-native'
// import LinearGradient from 'react-native-linear-gradient'
import LinearGradient from 'react-native-linear-gradient';
var detail_url='writ/detail';
var detail_id;

const { width, height } = Dimensions.get("window");

export default class CompositionDetail extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            title:[],
            securetyTipViewY: new Animated.Value(height),
            val: '',
        }
    }
    componentDidMount(){
        DeviceEventEmitter.addListener("returntitle", (params) => {
            console.log('params',params);
            detail_id=parseInt(params)
        })
        // console.log('id',id)
        myFetch.get(detail_url,{id:detail_id})
            .then(res=>{
                console.log(res.content)
                this.setState({
                    data:res.content
                })
                this.setState({
                    title:res.content[0].title
                })
            })
    }
    showView=()=>{
        Animated.timing(
            this.state.securetyTipViewY,
            {
                toValue: height - 554 - 64,
                duration: 300,   //动画时长300毫秒
            }
        ).start();
    }
    hideView=()=>{
        Animated.timing(
            this.state.securetyTipViewY,
            {
                toValue: height,
                duration: 300,   //动画时长300毫秒
            }
        ).start();
    }
    // onChange = (val: any) => {
    //     console.log(val);
    //     this.setState({ val });
    // }
    userhandle = (text)=>{
        this.setState({val:text})
        console.log('tet',text);
        console.log('sss',this.state.val)
    }
    sublimt=()=>{
        console.log('提交成功')
        myFetch.post('writ/add',{
            id:this.state.val.slice(4),
            val:this.state.val
        })
        DeviceEventEmitter.emit('returntitles',detail_id);
        Actions.answe();
    }
    render() {
        return (
            <View>
                <Header name={this.state.title} />
                <LinearGradient colors={['#ffcccc', '#ccffff', '#99ffff',]} style={{height: height}}>   
                {/* <TextareaItem editable={true} rows={4} placeholder="在此答题" count={200} /> */}
                <Text style={styles.title}>写作原题</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={styles.question}>
                                <Text style={styles.questionin} onPress={()=>this.detail(item)}>{item.directions}</Text>
                                {/* <Button onPress={this.showView} style={styles.answerclick}>开始答题</Button> */}
                            </View>
                        )
                    })
                }
                <Button onPress={this.showView} style={styles.answerclick}>开始答题</Button>
                <Animated.View style={{ position: "absolute",flex:1, top: this.state.securetyTipViewY,width:'100%'}}>
                    <List renderHeader='答题区'>
                        <TextareaItem editable={true} rows={10} onChange={this.userhandle} placeholder="在此答题" count={500} />
                    </List>
                    <Button onPress={this.sublimt} style={styles.button1}>提交</Button>
                    <Button onPress={this.hideView} style={styles.button2}>取消</Button>
                </Animated.View>
                </LinearGradient>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    touchable:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        marginTop:10,
        width:'100%',
        backgroundColor:'red'
    },
    title:{
        marginTop:15,
        color:'#ffff00',
        textShadowOffset:{width:3,hegith:3},
        textShadowRadius:2,
        textShadowColor:'#99ccff',
        fontSize:25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        lineHeight:30,
        textAlign:'center'
    },
    question:{
        // width:width,
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:10,
        marginTop:15,
        // flexDirection:"column",
        marginLeft:5,
        marginRight:5,
        paddingLeft:5,
        paddingRight:5,
        lineHeight:25,

    },
    questionin:{
       
        fontSize:18,

    },
    answerclick:{
        width:width*0.5,
        marginLeft:width*0.25,
        marginTop:20
    },
    button1:{
        width:width*0.5,
        marginLeft:width*0.25,
        marginTop:20,
        backgroundColor:'#99ff00'
    },
    button2:{
        width:width*0.5,
        marginLeft:width*0.25,
        marginTop:20,
        backgroundColor:'#ff6633'
    }
})