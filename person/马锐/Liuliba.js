import React,{Component} from 'react';
import {
  TextInput,
  View,
  Image,
  Text
} from 'react-native';
import Swiper from 'react-native-swiper';

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
                width:'85%',
                height:50,
                backgroundColor:'#eeeeee',
                marginLeft:40,
                marginTop:15,
                borderRadius:30 
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
        width:'95%',
        marginLeft:12
        }}>
        <Swiper 
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
        </Swiper>
        </View>
        {/* 中部四个按钮 */}
        <View style={{height:120,flexDirection:'row'}}>
          {/* 按钮一 */}
          <View style={{
              width:'10%',
              height:80,
              marginTop:30,
              flex: 1,
              marginLeft:65,
          }}>
              <View style={{
                padding: 5,
                height: 50,
                width: 50, 
                borderRadius:400, 
                backgroundColor:'#ff0000',
              }}>
                <Text style={{fontSize:37}}>&nbsp;1</Text>
              </View>
              <Text style={{fontSize:20,marginTop:10}}>&nbsp;圈子</Text>
          </View>
          {/* 按钮二 */}
          <View style={{
              width:'10%',
              height:80,
              marginTop:30,
              flex: 1,
              marginLeft:0,
          }}>
                <View style={{
                  padding: 5,
                  height: 50,
                  width: 50, 
                  borderRadius:400, 
                  backgroundColor:'#00ff00',
              }}>
              <Text style={{fontSize:37}}>&nbsp;2</Text>
              </View>
              <Text style={{fontSize:20,marginTop:10}}>&nbsp;说客</Text>
          </View>
          {/* 按钮三 */}
          <View style={{
              width:'10%',
              height:80,
              marginTop:30,
              flex: 1,
              marginLeft:0,
          }}>
              <View style={{
                  padding: 5,
                  height: 50,
                  width: 50, 
                  borderRadius:400, 
                  backgroundColor:'#00ffff',
              }}>
              <Text style={{fontSize:37}}>&nbsp;3</Text>
              </View>
              <Text style={{fontSize:20,marginTop:10}}>&nbsp;视频</Text>
          </View>
          {/* 按钮四 */}
          <View style={{
              width:'10%',
              height:80,
              marginTop:30,
              flex: 1,
              marginLeft:0,
          }}>
                <View style={{
                  padding: 5,
                  height: 50,
                  width: 50, 
                  borderRadius:400, 
                  backgroundColor:'#ffff00',
              }}>
              <Text style={{fontSize:37}}>&nbsp;4</Text>
              </View>
              <Text style={{fontSize:20,marginTop:10}}>&nbsp;关注</Text>
          </View>                    
      </View>
      {/* 发布内容 */}
      <View style={{
        width:'90%',
        height:240,
        marginLeft:28,
        marginTop:50,
        flexDirection:'row'
        }}>
          {/* 头像框 */}
          <View style={{
            width:"15%",
            height:"100%"

          }}>
            <View style={{
                padding: 5,
                height: 70,
                width: 70, 
                borderRadius:400, 
                backgroundColor:'green',
              }}>
                <Text style={{fontSize:30}}>&nbsp;tou</Text>
              </View>
          </View>
          {/* 发布内容 */}
          <View style={{
            width:'80%',
            height:'100%',
            marginLeft:15,
          }}>
            <View style={{
              width:'100%',
              height:30,
              flexDirection:'row'
            }}>
              {/* 用户名（上方左侧） */}
              <View style={{
                width:110,
                height:30
              }}>
                <Text style={{fontSize:18,color:'#555555'}}>流利君@流利说:</Text>
              </View>
              {/* 话题名称（上方右侧） */}
              <View style={{
                width:220,
                height:30,
                marginLeft:50
              }}>
                <Text style={{fontSize:18,color:'grey',marginLeft:50,marginTop:10}}>
                  话题 | 新年倒计时5天
                </Text>
              </View>
            </View>
            
            {/* 进入图片（下方大图以及文字） */}
            <View style={{
              width:'100%',
              height:70,
              marginTop:18
            }}>
              <Image source={require('./img/a.jpg')} style={{
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
              <Text style={{color:'grey',fontSize:15,marginTop:10,marginLeft:260}}
              >8888浏览&nbsp;&nbsp;888回复</Text>
            </View>          
          </View>

      </View>
    </View>
        )
    }
}