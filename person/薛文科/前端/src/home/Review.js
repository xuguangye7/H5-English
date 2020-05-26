import React, { Component } from 'react'
import { Text, View, StyleSheet ,TouchableOpacity,Dimensions,TextInput, Alert, ScrollView, DeviceEventEmitter, Image, AsyncStorage} from 'react-native'
import { Actions, Scene } from 'react-native-router-flux';
// import { Icon } from '@ant-design/react-native';
import { Button, Icon } from '@ant-design/react-native';
import Sound from 'react-native-sound';
import Header from '../utils/Header';
import {myFetch} from '../utils/FetchData'
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;

let index;
// let musciPath='https://v.ylapi.cn/img/api/api_reciteword_word_list/492850dde8ca9392.mp3';
// var music=new Sound(musciPath,null,(err)=>{
//     if(err){
//         Alert.alert('播放失败');
//     }
// })
export default class WordCard extends Component {
    constructor(){
        super();
        this.state={
            review:[],
            id:1,
            idd:1,
            answe:'',
            count:0,
            number:0
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('reviewid')
        .then(res=>{
            console.log('reviewid',res);
            this.setState({
                idd:parseInt(res)
            })
            console.log('idd',this.state.idd+1)
        })
        let review_url='review/look';
        myFetch.get(review_url,{id:this.state.id})
        .then(res=>{
            console.log(res.content)
            this.setState({
                review:res.content,
            })
        })
    }
    componentDidUpdate(){
        let review_url='review/look';
        myFetch.get(review_url,{id:this.state.id})
        .then(res=>{
            this.setState({
                review:res.content
            })
        })
    }
    check=()=>{
        index=0;
        this.next(index);
    }
    check1=()=>{
        index=1;
        this.next(index);
    }
    check2=()=>{
        index=2;
        this.next(index);
    }
    check3=()=>{
        index=3;
        this.next(index);
    }
    next=(index)=>{
        var first=this.state.review[0].chinessfirst;
        console.log('first',first);
        var second=this.state.review[0].chinesssecond;
        var third=this.state.review[0].chinessthird;
        var fourth=this.state.review[0].chinessfourth;
        var arr=[first,second,third,fourth];
        console.log('arr',arr);
        if(arr[index]==this.state.review[0].answe){
            this.setState({
                answe:'正确'
            })
            var num=this.state.count+1;
            this.setState({
                count:num,
            })
            const post ={
                id:this.state.idd,
                name:this.state.review[0].name,
                grade:'正确'
            }
            console.log('post',post);
            fetch('http://129.211.62.80:8088/grade/check',{
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
                // console.log(res.id)
            }).catch((err)=>{
                console.error(err);
            })
        }else{
            this.setState({
                answe:'错误'
            })
            const post ={
                id:this.state.idd,
                name:this.state.review[0].name,
                grade:'错误'
            }
            console.log('post',post);
            fetch('http://129.211.62.80:8088/grade/check',{
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
                // console.log(res.id)
            }).catch((err)=>{
                console.error(err);
            })
        }
        var number1=this.state.number+1;
        this.setState({
            number:number1
        })
        setTimeout(this.add,1000)
    }
    add=()=>{
        var id1=this.state.id+1;
        var idd1=this.state.idd+1;
        this.setState({
            id:id1,
            answe:'',
            idd:idd1
        })
        AsyncStorage.setItem('reviewid',this.state.idd.toString());
    }
    play=(name)=>{
        let musciPath='http://dict.youdao.com/dictvoice?audio='+name;
        var music=new Sound(musciPath,null,(err)=>{
            if(err){
                console.log(1)
            }
        })
    }
    submit=()=>{
        console.log('提交成功')
        DeviceEventEmitter.emit("returngrade",{count:this.state.count,number:this.state.number,id:this.state.idd})
        console.log(this.state.count);
        this.setState({
            count:0,
            answe:''
        })
        Actions.grade()
    }
    render() {
        return (
            <View style={{backgroundColor:'#fff',width:'100%',height:800}}>
                <Header name='复习' />
                <ScrollView>
                <View style={styles.content}>
                    {
                        this.state.review.map((item)=>{
                            return (
                                <View style={styles.main}>
                                    <Text style={styles.word} >{item.name}</Text>
                                    <View style={{flexDirection:'row',width:'100%',marginTop:30,justifyContent:'center',alignItems:'center'}}>
                                        <Icon name='setting' style={styles.icon} color="#8a8a8a" size={25} />
                                        <Text style={{fontSize:20,color:'#8a8a8a',marginLeft:5}}>{item.symbol}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.footer}>
                    {/* <Button style={styles.button} onPress={this.next}>
                        <Text style={styles.text}>我认识</Text>
                    </Button> */}
                    {
                        this.state.review.map((item)=>{
                            return (
                                <View>
                                    <Button style={styles.button} onPress={this.check}>
                                        <Text style={styles.text}>{item.chinessfirst}</Text>
                                    </Button>
                                    <Button style={styles.button} onPress={this.check1}>
                                        <Text style={styles.text}>{item.chinesssecond}</Text>
                                    </Button>
                                    <Button style={styles.button} onPress={this.check2}>
                                        <Text style={styles.text}>{item.chinessthird}</Text>
                                    </Button>
                                    <Button style={styles.button} onPress={this.check3}>
                                        <Text style={styles.text}>{item.chinessfourth}</Text>
                                    </Button>
                                </View>
                            )
                        })
                    }
                    <View>
                        <Text>答案区</Text>
                        <Text>{this.state.answe}
                        {/* <Image source={this.state.answe} /> */}
                        </Text>
                    </View>
                    {/* <Text onPress={this.add}>下一个</Text> */}

                    <Text onPress={this.submit}>提交</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        width:width,
        height: 70*s,
        // borderBottomColor: 'red',
        backgroundColor:'#fff',
        borderBottomWidth: 1/3,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    search:{
        width: 525*s,
        height: 50*s,
        // backgroundColor: '#fbb8b8',
        borderRadius:25*s,
        borderWidth:1,
        borderColor:'gray',
        flexDirection: 'row',
        alignItems: 'center'
    },
    back:{
        // width:20*s,
        // height:70*s,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        width:'100%',
        height:150,
        overflow:'hidden',
        backgroundColor:'#fff',
        marginTop:50
    },
    main:{
        width:'100%',
        height:150,
        justifyContent:'center',
        alignItems:'center',
    },
    word:{
        fontSize:40
    },
    footer:{
        width:'100%',
        backgroundColor:'#fff',
        marginTop:200,
        alignItems:'center',
    },
    button:{
        width:350,
        height:50,
        borderRadius:20,
        marginTop:10,
    },
    text:{
        color:'#8b8b8b'
    }
})