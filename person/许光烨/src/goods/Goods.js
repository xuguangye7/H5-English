import React,{Component} from 'react';
import { Icon ,Tabs} from '@ant-design/react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TextInput,
  View,ScrollView,
  Image,
  localStorage,
  Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import { WhiteSpace } from '@ant-design/react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';

export default class Goods extends Component{
    // constructor(){
    //     super();

    //     this.state={
    //         data:[],
    //         time:'',
    //         img:'',
    //         // dian:'../img/点赞.png'
    //     }
    // }
    // componentDidMount(){
    //     fetch('http://129.211.62.80:8080/essay')
    //         .then(res=>res.json())
    //         .then(res=>{
    //             this.setState({
    //                 data:res.content
    //             })
    //         })
    //     let localStorageData=JSON.parse(localStorage.getItem('data'))[0];
    //     this.setState({
    //         img:localStorageData.sclass.slice(4)
    //     })
    // }
    // componentDidUpdate(){
    //     fetch('http://129.211.62.80:8080/essay')
    //         .then(res=>res.json())
    //         .then(res=>{
    //             this.setState({
    //                 data:res.content
    //             })
    //         })
    // }
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
    //             // var img1=document.getElementById('img1');
    //             // img1.src="../img/点赞1.png"
    //         })
    // }
    render(){
        return(
          <View style={{height:"100%",backgroundColor:"#fff"}}>
            <View style={{
                width:'100%',
                backgroundColor:'#fff',
                height:50,
                }}>
                <View style={{
                    width:'95%',
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
            <View style={{height:105,flexDirection:'row'}}>
                {/* 按钮一 */}
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
                {/* 按钮二 */}
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
                {/* 按钮三 */}
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
                {/* 按钮四 */}
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
            <WhiteSpace style={{height:2,backgroundColor:"#eee"}}/>
            <ScrollView> 
            

            {/* 发布内容 */}
            <View style={{
                // width:'74%',
                // backgroundColor:"red",
                // marginLeft:'10%',
                // marginTop:50,
                height:250,
                flexDirection:'row'
                }}>
                {/* 头像框 */}
                <View style={{
                    width:"15%",
                    height:"100%",
                    marginTop:15,
                    marginLeft:15
                }}>
                    <View style={{
                        padding: 5,
                        height: 55,
                        width: 55, 
                        borderRadius:400, 
                        backgroundColor:'green',
                    }}>
                        <Text style={{fontSize:30}}>tou</Text>
                    </View>
                </View>
                {/* 发布内容 */}
                <View style={{
                    width:'80%',
                    height:'100%',
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
                            <Text style={{fontSize:18,color:'#555555'}}>流利君</Text>
                        </View>
                        {/* 话题名称（上方右侧） */}
                        <View style={{
                            // width:220,
                            height:30,
                            marginLeft:5
                        }}>
                            <Text style={{fontSize:18,color:'grey',marginLeft:75}}>
                            话题 | 新年倒计时5天
                            </Text>
                        </View>
                    </View>
                    
                    {/* 进入图片（下方大图以及文字） */}
                    <View style={{
                        width:'100%',
                        height:70,
                        marginTop:12
                        }}>
                        <Image source={require('../../pic/a.jpg')} style={{
                            height: 150,
                            width:'100%',
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
            
            </View>
            <WhiteSpace style={{height:2,backgroundColor:"#eee"}}/>
            
            </ScrollView>
        </View>
        )
    }
}