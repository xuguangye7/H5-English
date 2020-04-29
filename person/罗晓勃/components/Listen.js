import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableWithoutFeedback,TouchableOpacity,Dimensions} from 'react-native'
import { Icon ,Tabs} from '@ant-design/react-native';
// import Sound from 'react-native-sound';
import Video from "react-native-video";
import url1 from "../components/mp3/listen.mp3";
let screenWidth  = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
export default class Listen extends Component {
    constructor() {
        super();
        this.state = {
            videoWidth: screenWidth,
            videoHeight: 226,
          rate: 1,
          volume: 1,
          muted: false,
          resizeMode: 'contain',
          duration: 0.0,
          currentTime: 0.0,
          paused: true,
        };
      }
    render() {
        
        return (
            <View>
                {/* <Video
                 ref={video => (this.player = video)}
                    source={require('../components/mp3/listen.mp3')}
                    style={styles.fullScreen}
                /> */}
                <View style={{height:55,width:'100%',backgroundColor:'#8a8a8a',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Icon name='left' style={{marginLeft:15}}  color="#fff" onPress={()=>{Actions.pop()}} />
                    <Text style={{color:'#fff',fontSize:23}}>视频</Text>
                    <Icon name='ellipsis' size={35} color="#fff" style={{marginRight:15}}/>
                </View>
                <View>
                        <Video source={require('./mp3/listen.mp3')}
                            ref={(ref) => {
                                this.player = ref
                            }}  
                            style={{width: this.state.videoWidth,height: this.state.videoHeight,backgroundColor:"red"}}
                            allowsExternalPlayback={false} // 不允许导出 或 其他播放器播放
                            paused = {this.state.isPaused} // 控制视频是否播放
                            resizeMode="cover"
                            // onLoad={(e)=>this.customerOnload(e)} 
                            // onProgress={(e)=>this.customerOnprogress(e)}                       
                            fullscreen={this.state.isFullScreen}
                        />
                    {/* 播放的按钮：点击之后需要消失 */}
                    {/* {pausedBtn} */}
                    {/* 暂停按钮，进度条，全屏按钮 */}
                    {/* {pausedSliderFull} */}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
});









