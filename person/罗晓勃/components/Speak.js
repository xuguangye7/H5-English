import React ,{Component} from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
} from 'react-native';
// import Swiper from 'react-native-swiper';

export default class Liuliba extends Component{
    render(){
        return(
            <View>
                <View style={{
                    width:'100%',
                    backgroundColor:'white',
                    height:80,
                    }}>
                        <View style={{
                            width:'90%',
                            height:50,
                            backgroundColor:'#eeeeee',
                            marginLeft:25,
                            marginTop:15
                        }}>
                            <TextInput 
                                placeholder={'大家正在搜：今日话题'} 
                                style={{
                                    height:50,
                                    paddingLeft:30 ,
                                    fontSize:20,
                                    
                            }}
                            >            
                            </TextInput>
                            
                        </View>
                        
                    </View>
                    <View style={{
                    marginTop:10,
                    height:200,
                    width:'90%',
                    marginLeft:28
                    }}>
                    {/* <Swiper 
                        height={400}                   
                        loop={true}                    
                        autoplay={true}                
                        autoplayTimeout={2}               
                        horizontal={true}              
                        paginationStyle={{bottom: 10}} 
                        showsButtons={false}           
                        showsPagination={false}   
                        dot={<View style={{           
                                backgroundColor: 'rgba(0,0,0,.2)',
                                width: 18,
                                height: 18,
                                borderRadius: 4,
                                marginLeft: 10,
                                marginRight: 9,
                                marginTop: 9,
                                marginBottom: 9,
                            }}/>}
                        activeDot={<View style={{    
                                backgroundColor: '#007aff',
                                width: 18,
                                height: 18,
                                borderRadius: 4,
                                marginLeft: 10,
                                marginRight: 9,
                                marginTop: 9,
                                marginBottom: 9,
                            }}/>}
                        >
                        <Image source={require('./img/a.jpg')} style={{height: 400}}/>
                        <Image source={require('./img/b.jpg')} style={{height: 400}}/>
                        <Image source={require('./img/c.jpg')} style={{height: 400}}/>
                    </Swiper> */}
                    </View>
                    <View style={{height:80,flexDirection:'row'}}>
                    <View style={{
                        width:'15%',
                        height:80,
                        marginTop:30,
                        flex: 1,
                        marginLeft:60,
                    }}>
                         <View style={{
                            padding: 5,
                            height: 50,
                            width: 50, 
                            borderRadius:400, 
                            backgroundColor:'#cccccc',
                        }}>
                        <Text style={{fontSize:30}}>&nbsp;1</Text>
                        </View>
                        <Text style={{fontSize:20}}>&nbsp;圈子</Text>
                    </View>
                    <View style={{
                        width:'15%',
                        height:80,
                        marginTop:30,
                        flex: 1,
                        marginLeft:30,
                    }}>
                         <View style={{
                            padding: 5,
                            height: 50,
                            width: 50, 
                            borderRadius:400, 
                            backgroundColor:'#cccccc',
                        }}>
                        <Text style={{fontSize:30}}>&nbsp;2</Text>
                        </View>
                        <Text style={{fontSize:20}}>&nbsp;说客</Text>
                    </View>
                    <View style={{
                        width:'15%',
                        height:80,
                        marginTop:30,
                        flex: 1,
                        marginLeft:30,
                    }}>
                        <View style={{
                            padding: 5,
                            height: 50,
                            width: 50, 
                            borderRadius:400, 
                            backgroundColor:'#cccccc',
                        }}>
                        <Text style={{fontSize:30}}>&nbsp;3</Text>
                        </View>
                        <Text style={{fontSize:20}}>&nbsp;视频</Text>
                    </View>
                    <View style={{
                        width:'15%',
                        height:80,
                        marginTop:30,
                        flex: 1,
                        marginLeft:30,
                    }}>
                         <View style={{
                            padding: 5,
                            height: 50,
                            width: 50, 
                            borderRadius:400, 
                            backgroundColor:'#cccccc',
                        }}>
                        <Text style={{fontSize:30}}>&nbsp;4</Text>
                        </View>
                        <Text style={{fontSize:20}}>&nbsp;关注</Text>
                    </View>                    
                </View>
            </View>
        )
    }
}