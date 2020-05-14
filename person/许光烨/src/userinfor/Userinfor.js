import React, { Component } from 'react'
import {AsyncStorage, View,Text,StatusBar,TouchableOpacity,SafeAreaView, StyleSheet, ScrollView ,Image,Dimensions, TouchableHighlight, ImageBackground} from 'react-native' ;
import {Grid,Icon, WhiteSpace, List, Button} from '@ant-design/react-native' 
import {Actions} from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker';
const {width,scale}=Dimensions.get('window');
const s=width/640


const IconName=['setting','environment','audit','file-done','qrcode','hdd','star']
const name=['账户管理','收货地址','我的信息','我的订单','我的二维码','我的积分','我的收藏']
const data = Array.from(new Array(7)).map((_val, i) => ({
    icon: <Icon size={30} color={'#aeaeae'} name={IconName[i]}/>,
    text: <Text style={{fontSize:17,color:'#4f4e4e'}}>{name[i]}</Text>,
}));

const IconName1=['tool','car','user','desktop','flag','form'];
const name1=['居家维修','出行接送','我的受赠人','我的住宿优惠','我的活动','我的发布']
const data1 = Array.from(new Array(6)).map((_val, i) => {
    if(i==5){
        return {
            icon: <Icon onPress={()=>Actions.publish()} size={30} color={'#aeaeae'} name={IconName1[i]}/>,
            text: <Text onPress={()=>Actions.publish()} style={{fontSize:17,color:'#4f4e4e'}}>{name1[i]}</Text>,
        }
    }else{
        return {
            icon: <Icon size={30} color={'#aeaeae'} name={IconName1[i]}/>,
            text: <Text style={{fontSize:17,color:'#4f4e4e'}}>{name1[i]}</Text>,
        }
    }
});

const options = {
    title: '上传头像',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

const Item = List.Item;
export default class Mine extends Component {

    constructor(){
        super();
        this.state={
            imageUrl:require('../../assets/touxiang.png'),
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('source')
        .then(res=>{
            // console.log('res',res)
            if(res!=null){
                this.setState({
                    imageUrl: {uri:res},
                });
            }else{
                this.setState({
                    imageUrl:require('../../assets/touxiang.png')
                })
            }
        })
    }
    componentDidUpdate(){
        AsyncStorage.getItem('source')
        .then(res=>{
            // console.log('res',res)
            if(res!=null){
                this.setState({
                    imageUrl: {uri:res},
                });
            }else{
                this.setState({
                    imageUrl:require('../../assets/touxiang.png')
                })
            }
        })
    }
    takePhoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {  
                const source = { uri: response.uri };
                console.log('source',source)
                AsyncStorage.setItem('source',source.uri)
                AsyncStorage.getItem('source')
                .then(res=>{
                    console.log('res',res)
                    this.setState({
                        imageUrl: {uri:res},
                    });
                })
            }
            // AsyncStorage.removeItem('source');
        });
    }
    logoff=()=>{
        AsyncStorage.removeItem('user')
        Actions.login();
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor='red'/>
                <SafeAreaView>
                    <View style={{height:55,width:'100%',backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Icon name='unordered-list' style={{marginLeft:15}}  color="#8a8a8a"/>
                        <Text style={{color:'#000',fontSize:23}}>我的</Text>
                        <Icon name='setting' size={25} color="#8a8a8a" style={{marginRight:15}}/>
                    </View>
                    <ScrollView style={{backgroundColor:'#fff'}}>
                        <View style={styles.header}>
                            <TouchableHighlight style={{width:120*s,height:120*s,borderRadius:60*s,overflow:'hidden',marginLeft:30,marginTop:35}} onPress={()=>{this.takePhoto()}}>
                                <View style={styles.mineHead}>
                                    <Image style={{width:120*s,height:120*s}} source={this.state.imageUrl} />
                                </View>
                            </TouchableHighlight>
                            <View>
                                <Text style={styles.mineName}>AnnyLee</Text>
                                <Text style={styles.mineId}>ID:12345678</Text>
                            </View>
                            <Icon name="right" 
                                  color="#8a8a8a" 
                                  size={20} 
                                  style={{
                                      position:'absolute',
                                      right:20,
                                      top:60
                                  }}
                            />
                        </View>
                        <View  style={styles.content}>
                            <WhiteSpace style={{backgroundColor:'#eee'}}/>
                            <View style={styles.item}>
                                <Icon name='desktop' size={30} color="red" style={styles.icon}/>
                                <Text style={styles.text}>英语水平定级测试</Text>
                                <TouchableOpacity style={styles.leve}>
                                    <Text style={{color: '#fff',fontSize:18}}>Lv3 初级</Text>
                                </TouchableOpacity>
                                <Icon name="right" color="#8a8a8a" size={20} 
                                    style={{
                                        position:'absolute',
                                        right:25,
                                    }}
                                />
                            </View>
                            <WhiteSpace style={{backgroundColor:'#eee',height:1}}/>
                            <View style={styles.item}>
                                <Icon name='flag' size={30} color="red" style={styles.icon}/>
                                <Text style={styles.text}>我的任务</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={{color: 'red',fontSize:18}}>3个待完成</Text>
                                </TouchableOpacity>
                                <Icon name="right" color="#8a8a8a" size={20} 
                                    style={{
                                        position:'absolute',
                                        right:25,
                                    }}
                                />
                            </View>
                            <WhiteSpace style={{backgroundColor:'#eee'}} />
                            <View style={styles.item}>
                                <Icon name='table' size={30} color="red" style={styles.icon}/>
                                <Text style={styles.text}>已完成的课程</Text>
                                <Icon name="right" color="#8a8a8a" size={20} 
                                    style={{
                                        position:'absolute',
                                        right:25,
                                    }}
                                />
                            </View>
                            <WhiteSpace style={{backgroundColor:'#eee',height:1}}/>
                            <View style={styles.item}>
                                <Icon name='flag' size={30} color="red" style={styles.icon}/>
                                <Text style={styles.text}>我的任务</Text>
                                <Icon name="right" color="#8a8a8a" size={20} 
                                    style={{
                                        position:'absolute',
                                        right:25,
                                    }}
                                />
                            </View>
                            <WhiteSpace style={{backgroundColor:'#eee'}} />
                            <View style={styles.item}>
                                <Icon name='file' size={30} color="red" style={styles.icon}/>
                                <Text style={styles.text}>已完成的课程</Text>
                                <Icon name="right" color="#8a8a8a" size={20} 
                                    style={{
                                        position:'absolute',
                                        right:25,
                                    }}
                                />
                            </View>
                            <WhiteSpace style={{backgroundColor:'#eee',height:1}}/>
                            <View style={styles.item}>
                                <Icon name='like' size={30} color="red" style={styles.icon}/>
                                <Text style={styles.text}>我的任务</Text>
                                <Icon name="right" color="#8a8a8a" size={20} 
                                    style={{
                                        position:'absolute',
                                        right:25,
                                    }}
                                />
                            </View>
                            <WhiteSpace style={{backgroundColor:'#eee'}} />
                            <View style={styles.item}>
                                <Icon name='file' size={30} color="red" style={styles.icon}/>
                                <Text style={styles.text}>已完成的课程</Text>
                                <Icon name="right" color="#8a8a8a" size={20} 
                                    style={{
                                        position:'absolute',
                                        right:25,
                                    }}
                                />
                            </View>
                            {/* <WhiteSpace style={{backgroundColor:'#eee',height:1}}/> */}
                            {/* <View style={styles.item}>
                                <Icon name='like' size={30} color="red" style={styles.icon}/>
                                <Text style={styles.text}>我的任务</Text>
                                <Icon name="right" color="#8a8a8a" size={20} 
                                    style={{
                                        position:'absolute',
                                        right:25,
                                    }}
                                />
                            </View> */}
                            <View style={{backgroundColor:"#eeeeee"}}>
                            <View style={{marginLeft:50,marginTop:20,backgroundColor:"#eeeeee"}}>
                                <View style={{
                                        width:500*s,
                                        height:70*s,
                                        backgroundColor:'#66dd00',
                                        borderRadius:10,
                                        flexDirection:'row',
                                        justifyContent:'space-around',
                                        alignItems:'center'
                                        }}>
                                    <Text onPress={()=>Actions.login()} style={{textAlign:'center',fontSize:18}}>退出登录</Text>
                                </View>
                            </View>
                            </View>
                            
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:150,
        borderTopColor:'#8a8a8a',
        borderTopWidth:1,
        flexDirection:'row',
    },
    mineHead:{
        overflow:'hidden',
    },
    mineName:{
        fontSize:18,
        marginTop:50,
        marginLeft:15
    },
    mineId:{
        marginLeft:15,
        fontSize:18,
        color:'#8a8a8a',
        marginTop:15
    },
    content:{
        width:'100%',
    },
    text: {
        color: '#000',
        fontSize: 17,
        marginLeft:30,
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:5,
        height:60,
    },
    icon:{
        marginLeft:35
    },
    leve:{
        backgroundColor:'red',
        position:'absolute',
        right:70,
        width:100,
        height:30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#ccc',
        position:'absolute',
        right:68,
        width:100,
        height:30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
})