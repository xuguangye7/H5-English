import React,{Component} from 'react';
import { Icon ,Tabs} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import {
  TextInput,
  View,ScrollView,
  Image,
  ToastAndroid,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
//   localStorage,
  Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import { WhiteSpace } from '@ant-design/react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';

export default class Goods extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            searchData:''
        }
    }
    searchhandle = (text)=>{
        this.setState({searchData:text})
    }
    search=()=>{
        let formData=new FormData();
        formData.append('id','3');
        const post ={
            id:this.state.searchData
        }
        fetch('http://129.211.62.80:8080/essay',{
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
                Actions.list()
            }else{
                ToastAndroid.show('没有您要搜索的内容');
            }
        }).catch((err)=>{
            console.error(err);
        })
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/essay')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.content
                })
            })
    }
    componentDidUpdate(){
        fetch('http://129.211.62.80:8080/essay')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.content
                })
            })
    }
    // delete=(idx)=>{
    //     console.log(idx)
    //     fetch('http://129.211.62.80:8080/essay/delete?scontent='+idx.scontent)
    //         .then(res=>res.json())
    //         .then((res)=>{
    //             console.log('ok')
    //         })
    // }
    // change=(idx)=>{
    //     fetch('http://129.211.62.80:8080/essay?scontent='+idx.scontent)
    //         .then(res=>res.json())
    //         .then((res)=>{
    //             console.log('ok')
    //             var img1=document.getElementById('img1');
    //             img1.src="../img/点赞1.png"
    //         })
    // }
    render(){
        return(
          <View style={{height:"100%",backgroundColor:"#fff"}}>
            <View style={{
                width:'100%',
                // backgroundColor:'red',
                flexDirection:'row',
                height:50,
                }}>
                <View style={{
                    width:"78%",
                    height:40,
                    backgroundColor:'#eeeeee',
                    marginLeft:14,
                    marginTop:10,
                    borderTopLeftRadius:10,
                    borderBottomLeftRadius:10
                }}>
                    <TextInput 
                        style={{
                            height:40,
                            paddingLeft:10 ,
                            fontSize:18,
                            color:'#8a8a8a'  
                                    
                        }}
                        placeholder="大家正在搜：今日话题"
                        placeholderTextColor='#8a8a8a'
                        onChangeText={this.searchhandle}
                    />
                </View>
                <View style={{width:"8%",backgroundColor:"#eeeeee",marginTop:10,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                    <Icon name='search' size={28} color='gray' onPress={this.search} />
                </View>
                <TouchableOpacity  style={{backgroundColor:'#aaaaaa',marginTop:12,marginLeft:7,width:36,height:36,borderRadius:18}} onPress={()=>{Actions.add()}}>
                    <Image source={require('../../pic/jiahao.png')}  style={{padding:18,height:16,width:16}}/>
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop:10,
                height:200,
                backgroundColor:"#fff",
                width:'100%'
                }}>
                <Swiper 
                    height={450}                   
                    loop={true}                    
                    autoplay={true}                
                    autoplayTimeout={2}               
                    horizontal={true}              
                    paginationStyle={{bottom: 10}} 
                    showsButtons={false}           
                    showsPagination={false}   
                    dot={<View style={{           
                            // backgroundColor: 'rgba(0,0,0,.2)',
                            width: 18,
                            height: 18,
                            borderRadius: 4,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }}/>}
                    activeDot={<View style={{    
                            // backgroundColor: '#007aff',
                            width: 18,
                            height: 18,
                            borderRadius: 4,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }}/>}
                    >
                    <Image source={require('../../pic/a.jpg')} style={{height: 450}}/>
                    <Image source={require('../../pic/b.jpg')} style={{height: 450}}/>
                    <Image source={require('../../pic/c.jpg')} style={{height: 450}}/>
                </Swiper>
            </View>
            <ScrollView> 
            <View style={{backgroundColor:"#eee"}}>
            {/* 发布内容 */}
            {
                this.state.data.reverse().map((item,index)=>
            
                <View style={{
                    // width:'74%',
                    backgroundColor:"#fff",
                    // marginLeft:'10%',
                    marginTop:5,
                    height:300,
                    flexDirection:'row'
                    }}>
                    {/* 头像框 */}
                    <View style={{
                        width:"15%",
                        height:240,
                        // backgroundColor:"red",
                        marginTop:15,
                        marginLeft:15
                    }}>
                        <View style={{
                            // padding: 5,
                            height: 55,
                            width: 55, 
                            overflow:"hidden",
                            borderRadius:40, 
                            backgroundColor:'green',
                        }}>
                            <Image source={{uri:`http://129.211.62.80:8080/images/img?name=${item.touxiang.slice(4)}`}} 
                                           style={{width:55,height:55}} />
                        </View>
                    </View>
                    {/* 发布内容 */}
                    <View style={{
                        width:'80%',
                        height:240,
                        // marginLeft:25,
                    }}>
                        <View style={{
                            width:'100%',
                            height:30,
                            
                            flexDirection:'row',
                            marginTop:20
                            }}>
                            {/* 用户名（上方左侧） */}
                            <View style={{
                                width:110,
                                height:30
                            }}>
                                <Text style={{fontSize:18,color:'#555555'}}>{item.smane}</Text>
                            </View>
                            {/* 话题名称（上方右侧） */}
                            <View style={{
                                // width:220,
                                height:30,
                                marginLeft:5
                            }}>
                                <Text style={{fontSize:18,color:'grey',marginLeft:75}}>
                                {/* 话题 | 新年倒计时5天 */}
                                </Text>
                            </View>
                        </View>
                        
                        {/* 进入图片（下方大图以及文字） */}
                        <View style={{
                            width:'100%',
                            height:70,
                            marginTop:12
                            }}>
                            <View style={{
                                // width:110,
                                // height:30
                            }}>
                                <Text style={{fontSize:18,color:'#555555'}}>{item.scontent}</Text>
                            </View>
                            <Image source={{uri:`http://129.211.62.80:8080/images/img?name=${item.touxiang.slice(4)}`}}  style={{
                                    height: 150,
                                    width:'95%',
                                    borderRadius:10,
                                    marginTop:12
                                    }}
                                />
                            <Text style={styles.time}>{item.stime}</Text>
                        </View>          
                    </View>
                    <WhiteSpace style={{height:2,backgroundColor:"#eee"}}/>
                </View>
                )
            }
            </View>
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
        backgroundColor:'green',
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
        // position:'absolute',
        right:'5%',
        marginLeft:300,
        marginTop:18
    }
})