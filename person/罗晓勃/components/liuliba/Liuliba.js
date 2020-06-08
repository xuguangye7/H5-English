import React,{Component} from 'react';
import { Icon ,Tabs} from '@ant-design/react-native';
import { Actions, Scene } from 'react-native-router-flux';
import {
  TextInput,
  View,ScrollView,
  Image,
  localStorage,
  ToastAndroid,
  AsyncStorage,
  Text,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import { WhiteSpace } from '@ant-design/react-native';
// import Item from '@ant-design/react-native/lib/list/ListItem';

export default class Liuliba extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            searchData:'',
            isClick:true
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
        AsyncStorage.getItem('clic')
        .then((res)=>{
            if(res=='false'){
                this.setState({
                    isClick:true
                })
            }else{
                this.setState({
                    isClick:false
                })
            }
        })
    }
    componentDidUpdate(){
        AsyncStorage.getItem('clic')
        .then((res)=>{
            if(res=='false'){
                this.setState({
                    isClick:true
                })
            }else{
                this.setState({
                    isClick:false
                })
            }
        })
    }
    like=(idx)=>{
        console.log(idx)
        AsyncStorage.getItem('clic')
        .then((res)=>{
            if(res=='false'||res==null){
                AsyncStorage.setItem('clic','true',
                ()=>{
                    console.log(res);
                    this.setState({
                        isClick:true
                    })
                    const post ={
                        userid:15028341232,
                        scontent:idx.scontent,
                        touxiang:idx.touxiang,
                        sname:idx.smane,
                        stime:idx.stime
                    }
                    fetch('http://129.211.62.80:8080/essay/like',{
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
                    }).catch((err)=>{
                        console.error(err);
                    })
                })
            }else{
                AsyncStorage.setItem('clic','false',
                ()=>{
                    console.log(res)
                    this.setState({
                        isClick:false
                    })
                    console.log('取消收藏')
                    console.log(idx.time)
                    fetch('http://129.211.62.80:8080/essay/delete?stime='+idx.stime)
                    .then(res=>res.json())
                    .then((res)=>{
                        console.log('ok')
                    })
                })
            }
        })
    }

    render(){
        return(
          <View style={{height:"100%",backgroundColor:"#fff"}}>
            <View style={{
                width:'100%',
                backgroundColor:'#fff',
                height:50,
                flexDirection:'row',
                alignItems:'center'
                }}>
                <View style={{
                    width:'90%',
                    height:40,
                    backgroundColor:'#eeeeee',
                    marginLeft:14,
                    marginTop:10,
                    borderRadius:10,
                    flexDirection:'row',
                    alignItems:'center'
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
                <Icon name='search' size={28} color='gray' onPress={this.search} />
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
                                <Icon style={styles.icon} name="like" color={this.state.isClick?'#8a8a8a':"red"} size={30} onPress={()=>this.like(item)} />
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
        position:'absolute',
        right:'5%',
        bottom:10
    },
    icon:{
        position:'absolute',
        right:20,
        bottom:0
    }
})