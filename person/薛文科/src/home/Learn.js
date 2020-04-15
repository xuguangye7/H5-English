import React, { Component } from 'react'
import { Text, View,Dimensions,StyleSheet, ScrollView,Image,TouchableOpacity,TextInput} from 'react-native'
import {Router,Overlay,Scene,Drawer,Lightbox,Modal, Actions} from 'react-native-router-flux'
import { Icon ,Tabs} from '@ant-design/react-native';
import Word from './Word';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
export default class Learn extends Component {
    render() {
        const tabs = [
            { title: '轻松学' },
            { title: '背单词' },
          ];
        const style = {
            alignItems: 'center',
            backgroundColor: '#fff',
            justifyContent:'center'
          };
        return (
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon                    
                            name="menu"
                                style={{
                                width:20,
                                height:50*s,
                                marginTop:16*s
                        }}/>
                    </TouchableOpacity>
                    <View style={styles.search}>
                        <TextInput 
                            placeholder="请输入您要搜索的单词"
                            placeholderTextColor='#8a8a8a'
                            style={{
                                width: 490*s,height: 50*s,
                                padding: 0,
                                paddingLeft: 10
                            }}
                        />
                    </View>    
                    <TouchableOpacity>
                            <Icon name='search' color='gray'/>
                    </TouchableOpacity>       
                </View>
                <Tabs tabs={tabs} style={{
                }}>
                    <View style={style}>
                        <ScrollView>
                            <View style={styles.card}>
                                <View style={{
                                    width:50,
                                    height:30,
                                    backgroundColor:'red',
                                }}>
                                    <Text style={{fontSize:20}}>签到</Text>
                                </View>
                                <View></View>
                            </View>
                            <View style={styles.course}>
                                <View style={styles.course1}>
                                    <View style={{padding:5}}>
                                        <Text style={{fontSize:16}}>我的课程(3)</Text>
                                    </View>
                                    <View  style={{padding:5}}>
                                        <Text>查看全部 ></Text>
                                    </View>
                                </View>    
                                <ScrollView style={styles.scroll}
                                    horizontal={true} 
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{
                                        width:width*1.3,
                                        height:280*s,
                                        flexDirection:'row',
                                        justifyContent:'space-around'
                                    }}>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../assets/course1.jpg')}
                                                />
                                            <Text style={{marginTop:10}}>维多利亚时期的</Text>
                                        </View>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../assets/course2.jpg')}
                                                />
                                            <Text style={{marginTop:10}}>维多利亚时期的</Text>
                                        </View>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../assets/course3.jpg')}
                                                />
                                            <Text style={{marginTop:10}}>维多利亚时期的</Text>
                                        </View>
                                        <View style={{width:150*s,
                                                    height:200*s,
                                                    marginTop:10,
                                                    flexDirection:'row',
                                                    alignItems:'center',
                                                    justifyContent:'space-around',
                                                    backgroundColor:'gray'
                                                    }}>
                                            <Text>查看全部</Text>
                                        </View>
                                    </View>
                                </ScrollView>    
                            </View>
                            <View style={styles.course3}>
                                <View style={{
                                        width:500*s,
                                        height:70*s,
                                        backgroundColor:'#66dd00',
                                        borderRadius:10,
                                        flexDirection:'row',
                                        justifyContent:'space-around',
                                        alignItems:'center'
                                        }}>
                                    <Text onPress={()=>Actions.word()} style={{textAlign:'center',fontSize:18}}>添加课程</Text>
                                </View>
                            </View>

                            {/* 口语课 */}
                            <View style={styles.oral}>
                                <View style={styles.course1}>
                                    <View style={{padding:5}}>
                                        <Text style={{fontSize:16}}>精选口语课(3)</Text>
                                    </View>
                                    <View  style={{padding:5}}>
                                        <Text>全部口语课 ></Text>
                                    </View>
                                </View>
                                <ScrollView style={styles.scroll}
                                    horizontal={true} 
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{
                                        width:width*1.6,
                                        height:280*s,
                                        flexDirection:'row',
                                        justifyContent:'space-around'
                                    }}>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../assets/course1.jpg')}
                                                />
                                            <Text style={{marginTop:10}}>维多利亚时期的</Text>
                                        </View>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../assets/course2.jpg')}
                                                />
                                            <Text style={{marginTop:10}}>维多利亚时期的</Text>
                                        </View>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../assets/course3.jpg')}
                                                />
                                            <Text style={{marginTop:10}}>维多利亚时期的</Text>
                                        </View>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../assets/course3.jpg')}
                                                />
                                            <Text style={{marginTop:10}}>维多利亚时期的</Text>
                                        </View>
                                        <View style={{width:150*s,
                                                    height:200*s,
                                                    marginTop:10,
                                                    flexDirection:'row',
                                                    alignItems:'center',
                                                    justifyContent:'space-around',
                                                    backgroundColor:'gray'
                                                    }}>
                                            <Text>查看全部</Text>
                                        </View>
                                    </View>
                                </ScrollView>                    
                            </View>

                            {/* 配音 */}
                            <View style={styles.dub} flex={1}>
                                <View style={styles.dub1}>
                                    <View>
                                        <Text style={{fontSize:16}}>配音片段推荐</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14}}>去配音 ></Text>
                                    </View>
                                </View>
                                <View style={styles.dub2}>
                                    <View style={{
                                        width:width*0.45,
                                        height:200,
                                        // backgroundColor:'red',
                                        borderRadius:10,
                                        marginTop:10
                                    }}>
                                        <Image 
                                            style={{
                                                width:width*0.45,
                                                height:170,
                                                borderRadius:10
                                            }} 
                                            source={require('../../assets/dub1.jpg')}
                                        />
                                        <Text>维多利亚</Text>
                                    </View>
                                    <View style={{
                                        width:width*0.45,
                                        height:200,
                                        // backgroundColor:'red',
                                        borderRadius:10,
                                        marginTop:10
                                    }}>
                                        <Image
                                            style={{
                                                width:width*0.45,
                                                height:170,
                                                borderRadius:10
                                            }} 
                                            source={require('../../assets/dub2.jpg')}
                                        />
                                        <Text>维多利亚</Text>
                                    </View>
                                    <View style={{
                                        width:width*0.45,
                                        height:200,
                                        // backgroundColor:'red',
                                        borderRadius:10,
                                        marginTop:10
                                    }}>
                                        <Image 
                                            style={{
                                                width:width*0.45,
                                                height:170,
                                                borderRadius:10
                                            }} 
                                            source={require('../../assets/dub1.jpg')}
                                        />
                                        <Text>维多利亚</Text>
                                    </View>
                                    <View style={{
                                        width:width*0.45,
                                        height:200,
                                        // backgroundColor:'red',
                                        borderRadius:10,
                                        marginTop:10,
                                        
                                    }}>
                                        <Image
                                            style={{
                                                width:width*0.45,
                                                height:170,
                                                borderRadius:10
                                            }} 
                                            source={require('../../assets/dub2.jpg')}
                                        />
                                        <Text>维多利亚</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={style}>
                        <ScrollView>
                        <Word/>
                        </ScrollView>
                    </View>
                </Tabs>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  top:{
    width:width,
    height:50*s,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white'
  },
  card:{
    marginTop:3,
    width:width,
    height:150*s,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-around'
  },
  course:{
      width:width,
      height:228,
      backgroundColor:'white',
      marginTop:10,
      flex:1
  },
  course1:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  course2:{
      flexDirection:'row',
      justifyContent:'space-around',
      height:300,
  },
  c1:{
      width:150*s,
      height:200*s,
      marginTop:10,
  },
  course3:{
      flexDirection:'row',
      justifyContent:"space-around",
      width:width,
      height:80*s,
      backgroundColor:'white',
  },
  oral:{
    width:width,
      height:240,
      backgroundColor:'white',
      marginTop:10
  },
  dub:{
    width:width,
    height:450,
    backgroundColor:'white',
    marginTop:10
  },
  dub1:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
  },
  dub2:{
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap:'wrap'
  },
  scroll:{
    flexDirection:'row',
    // justifyContent:'space-around',
    // height:200,
    // backgroundColor:'blue'
    // marginTop:10
  },
  header:{
    width:width,
    height: 70*s,
    // borderBottomColor: 'red',
    // backgroundColor:'red',
    borderBottomWidth: 1/3,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',

},
search:{
    width: 525*s,
    height: 50*s,
    borderRadius:25*s,
    borderWidth:1,
    borderColor:'gray',
    flexDirection: 'row',
    alignItems: 'center'
},
});
