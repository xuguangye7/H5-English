import React, { Component } from 'react'
import { Text, View, StyleSheet ,Dimensions,TextInput, TouchableOpacity,Animated,Data,ToastAndroid} from 'react-native'
import { Icon ,Modal} from '@ant-design/react-native';
import { Actions, Scene } from 'react-native-router-flux';
import Progress from './Progress';
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
export default class Word extends Component {
    constructor(){
        super();
        this.state={
            display:false,
            resday:0,//剩余天数
            plandatas:0,
            num:0,
            len:0,
            data:[]
        }
    }
    show=()=>{
        this.setState({
            display:true,
        })
    }
    hidde=()=>{
        this.setState({
            display:false
        })
    }
    
    searchhandle = (text)=>{
        // if(text==this.state.plandatas){
        //     return;
        // }else if(text==''){
        //     this.setState({plandatas:this.state.plandatas})
        // }else{
        //     this.setState({plandatas:text})
        // }
        this.setState({plandatas:text})
        // console.log(1)
    }
    sure=()=>{
        if(parseInt(this.state.plandatas)<=100 && parseInt(this.state.plandatas)>=10 ){
            this.setState({
                resday:this.state.plandatas,
                display:false
            })
            
        }
        else if(parseInt(this.state.plandatas)>100){
            alert('时间太长,10-100');
        }else if(parseInt(this.state.plandatas)<10){
            alert('时间太短,10-100');
        } 
        
    }
    // showdata=()=>{
    //     var d=new Data("2018-02-19");
    //     console.log(d)
    // }
    count=()=>{
            
            timer=setInterval(()=>{
                if(this.state.num>0){
                    this.setState({
                        resday:this.state.plandatas-1,
                        // len:this.state.len+10
                    })
                    // console.log(this.state.num)
                }
            },10000)  
    }
    componentDidMount(){
        this.count();
        fetch('http://129.211.62.80:8080/word')
        .then(res=>res.json())
        .then(res=>{
            var jsonLength = 0;
            for(var item in res.content){
            jsonLength++;
            }
            this.setState({
                data:res,
                len:jsonLength/resday
            })
        });
    }
    componentWillUnmount() {
        clearInterval(this.timer);
      }

    render() {
        return (
            <View>
                <View style={styles.word}>
                    <View style={styles.main}>
                        <View style={styles.plan}>
                            <View style={styles.plan1}>
                                <View style={styles.plan2}>
                                    <Text style={{fontSize:20,width:200*s,height:70*s,lineHeight:70*s,textAlign:'center'}}>剩余</Text>
                                    <View style={{width:200*s,height:130*s,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:50,width:170*s,height:130*s,textAlign:'center'}}>{this.state.resday}</Text>
                                        <Text style={{fontSize:20,width:30*s,height:40*s,textAlign:'center',}}>天</Text>
                                    </View>
                                </View>
                                <View style={styles.plan2}>
                                    <Text style={{fontSize:20,width:200*s,height:70*s,lineHeight:70*s,textAlign:'center'}}>今日背单词</Text>
                                    <View style={{width:200*s,height:130*s,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:50,width:100*s,height:130*s,textAlign:'center'}}>{this.state.len}</Text>
                                        <Text style={{fontSize:20,width:30*s,height:40*s,textAlign:'center',}}>个</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.changeplan}>
                                <View style={styles.changeitem}>
                                    {/* <Text style={{fontSize:17,lineHeight:50*s}}>{this.state.plandatas}</Text> */}
                                </View>
                                <TouchableOpacity onPress={this.show}>
                                <View style={styles.changebtn}>
                                    <Text style={{fontSize:16,lineHeight:50*s,color:'#b5ac95'}}>修改计划</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.progress}>
                                <View style={styles.protext}>
                                    <Text style={{fontSize:16}}>已完成</Text>
                                    <Text style={{fontSize:20}}>150</Text>
                                    <Text style={{fontSize:20}}>/</Text>
                                    <Text style={{fontSize:20}}>2000</Text>
                                </View>
                                <View style={styles.probar}>
                                    <Progress/>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={Actions.wordcard}>
                        <View style={styles.button}>
                            <Text style={{color:'#fff',fontSize:20,width:520*s,height:70*s,lineHeight:70*s,textAlign:"center"}}>开始背单词</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.timer}>
                        <View style={styles.button}>
                            <Text style={{color:'#fff',fontSize:20,width:520*s,height:70*s,lineHeight:70*s,textAlign:"center"}}>复习单词</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={styles.container} > */}
                    <View style={this.state.display?styles.active:styles.active1}>
                        <View>
                            <Text style={{fontSize:18}}>修改计划天数</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            marginTop:10
                        }}>
                            <TextInput onChangeText={this.searchhandle} style={{backgroundColor:'white',width:40*s,height:25*s,borderBottomWidth:1}}></TextInput>
                            <Text style={{fontSize:18}}>天</Text>
                        </View>
                        <View style={{
                            width:400*s,
                            flexDirection:"row",
                            justifyContent:'space-around'
                        }}> 
                            <TouchableOpacity onPress={this.sure}>
                                <View style={{width:50*s,height:30*s,backgroundColor:'white',marginTop:20}}>    
                                    <Text>确定</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.hidde}>
                                <View style={{width:50*s,height:30*s,backgroundColor:'white',marginTop:20}}>    
                                    <Text>返回</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                {/* </View> */}
            </View>
        )
    }
}
const styles=StyleSheet.create({
    word:{
        backgroundColor:'#e9e4d9',
        width:width,
        height:height,
        position:'relative'
    },
    main:{
        width:width,
        flexDirection:'column',
        height:height-70,
        backgroundColor:'#e9e4d9',
        // backgroundColor:'#fff',
        // justifyContent:'center',
        alignItems:'center'
    },
    plan:{
        marginTop:30,
        width:520*s,
        height:520*s,
        backgroundColor:'#f8f6f1',
        // backgroundColor:'#fff',
        borderRadius:20,
        borderWidth:1,
        borderColor:'#b5ac95',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    plan1:{
        width:520*s,
        height:240*s,
        // backgroundColor:'green',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-around"
    },
    plan2:{
        width:200*s,
        height:200*s,
        // backgroundColor:'red'
    },
    changeplan:{
        width:400*s,
        height:70*s,
        // backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:2,
        borderBottomColor:'#e9e4d9'

    },
    changeitem:{
        width:120*s,
        height:70*s,
        // backgroundColor:'#fff',
        
    },
    changebtn:{
        width:100*s,
        height:50*s,
        // backgroundColor:'#fff',
        borderColor:'#e9e4d9',
        borderWidth:1,
        borderRadius:15
    },
    progress:{
        width:520*s,
        height:200*s,
        // backgroundColor:'pink',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:"center"
    },
    protext:{
        width:420*s,
        height:40*s,
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    probar:{
        width:420*s,
        height:50*s,
        marginTop:10
    },
    button:{
        width:520*s,
        height:70*s,
        marginTop:30,
        backgroundColor:'#7eaedc',
        borderRadius:20
    },
    active:{
        display:'flex',
        position:"absolute",
        top:'15%',
        width:width*0.8,
        marginLeft:width*0.1,
        height:200*s,
        backgroundColor:'#fff',
        flexDirection:'column',
        alignItems:'center',
        borderWidth:1
        // justifyContent:'space-between'
        // borderRadius:50*s
    },
    active1:{
      display:'none',
    }
});
