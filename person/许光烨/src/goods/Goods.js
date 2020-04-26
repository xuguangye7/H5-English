import React,{Component} from 'react';
import { Icon ,Tabs} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import {
  TextInput,
  View,ScrollView,
  Image,
  TouchableOpacity,
  AsyncStorage,
//   localStorage,
  Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import { WhiteSpace } from '@ant-design/react-native';


export default class Goods extends Component{
    constructor(){
        super();

        this.state={
            data:[],
            time:'',
            img:'',
            // dian:'../img/点赞.png'
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/essay')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.content
                })
            })
        // let localStorageData=JSON.parse(AsyncStorage.getItem('data'))[0];
        // this.setState({
        //     img:localStorageData.sclass.slice(4)
        // })
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
                    width:"85%",
                    height:40,
                    backgroundColor:'#eeeeee',
                    marginLeft:14,
                    marginTop:10,
                    borderRadius:10 
                }}>
                    <TextInput 
                        // placeholder={'大家正在搜：今日话题'} 
                        style={{
                            height:40,
                            paddingLeft:10 ,
                            fontSize:18,  
                                    
                    }}
                    >
                        <Image source={require('../../pic/fang.png')}  style={{height:16,width:16}}/>
                        <Text style={{marginLeft:70,color:'#aaaaaa'}}>&nbsp;大家正在搜：今日话题</Text>
                    </TextInput>
                    
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
            {/* 中部四个按钮 */}
            {/* <View style={{height:105,flexDirection:'row'}}>

                <View style={{
                    width:'6%',
                    height:80,
                    marginTop:15,
                    flex: 1,
                    marginLeft:50,
                }}>
                    <View style={{
                        padding: 10,
                        height: 50,
                        width: 50, 
                        borderRadius:400, 
                        backgroundColor:'#66dd00',
                    }}>
                        <Icon name='' size={30} color='#fff'/>
                    </View>
                    <Text style={{fontSize:18,marginTop:10}}>&nbsp;圈子</Text>
                </View>

                <View style={{
                    width:'6%',
                    height:80,
                    marginTop:15,
                    flex: 1,
                    marginLeft:0,
                }}>
                    <View style={{
                        padding: 10,
                        height: 50,
                        width: 50, 
                        borderRadius:400, 
                        backgroundColor:'#00ffff',
                    }}>
                        <Icon name='heart' size={30} color='#fff'/>
                    </View>
                    <Text style={{fontSize:18,marginTop:10}}>&nbsp;说客</Text>
                </View>

                <View style={{
                    width:'6%',
                    height:80,
                    marginTop:15,
                    flex: 1,
                    marginLeft:0,
                }}>
                    <View style={{
                        padding: 10,
                        height: 50,
                        width: 50, 
                        borderRadius:400, 
                        backgroundColor:'yellow',
                    }}>
                    <Icon name='heart' size={30} color='#fff'/>
                    </View>
                    <Text style={{fontSize:18,marginTop:10}}>&nbsp;视频</Text>
                </View>

                <View style={{
                    width:'6%',
                    height:80,
                    marginTop:15,
                    flex: 1,
                    marginLeft:0,
                }}>
                        <View style={{
                        padding: 10,
                        height: 50,
                        width: 50, 
                        borderRadius:400, 
                        backgroundColor:'red',
                    }}>
                        <Icon name='heart' size={30} color='#fff'/>
                    </View>
                    <Text style={{fontSize:18,marginTop:10}}>&nbsp;关注</Text>
                </View>                    
            </View>
            <WhiteSpace style={{height:2,backgroundColor:"#eee"}}/> */}
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
                            padding: 5,
                            height: 55,
                            width: 55, 
                            borderRadius:40, 
                            backgroundColor:'green',
                        }}>
                            <Image source={`http://129.211.62.80:8080/images/img?name=${item.touxiang.slice(4)}`}></Image>
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
                            <Image source={require('../../pic/a.jpg')} style={{
                                height: 150,
                                width:'100%',
                                marginTop:15,
                                borderRadius:10
                                }}/>
                            <Text style={{
                                fontSize:18,
                                color:'white',
                                marginTop:5,
                                marginLeft:55,
                                paddingTop:90,
                                position:'absolute'
                            }}>
                                &#8745;话题讨论#2019年你最大的改变#
                            </Text>
                            <Text style={{color:'grey',fontSize:15,marginTop:10,marginLeft:230}}
                            >8888浏览&nbsp;&nbsp;888回复</Text>
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