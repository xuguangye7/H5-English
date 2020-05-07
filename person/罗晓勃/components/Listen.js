import React from 'react';
import {View,Text,StyleSheet,TouchableWithoutFeedback,TouchableOpacity,Dimensions} from 'react-native';
import Video from 'react-native-video';
import {Icon} from '@ant-design/react-native';
import { Actions} from 'react-native-router-flux'
import Slider from 'react-native-slider';
import Orientation from 'react-native-orientation-locker';

let screenWidth  = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
console.log(screenWidth+"   "+screenHeight+"带有小数");

export default class WatchScreen extends React.Component{
    constructor(props){
        super(props);
        this.changePausedState   = this.changePausedState.bind(this);
        this.customerSliderValue = this.customerSliderValue.bind(this);
        this.enterFullScreen     = this.enterFullScreen.bind(this);
        this._changePauseSliderFullState = this._changePauseSliderFullState.bind(this);
        this._onStartShouldSetResponder = this._onStartShouldSetResponder.bind(this);
        this.state = {          
            isPaused: true,  //是暂停
            duration: 0,      //总时长
            currentTime: 0, //当前播放时间
            sliderValue: 0,   //进度条的进度 

            //用来控制进入全屏的属性
            videoWidth: screenWidth,
            videoHeight: 226,
            isFullScreen: false,
            isVisiblePausedSliderFullScreen: false
        }
    }
    changePausedState(){ //控制按钮显示播放，要显示进度条3秒钟，之后关闭显示
        this.setState({
            isPaused: this.state.isPaused?false:true,
            isVisiblePausedSliderFullScreen: true
        })
        let that = this;
        setTimeout(function(){
            that.setState({
                isVisiblePausedSliderFullScreen: false
            })
        },3000)
    }
    _changePauseSliderFullState(){
        let flag = this.state.isVisiblePausedSliderFullScreen?false:true; 
        this.setState({
            isVisiblePausedSliderFullScreen: flag
        })
         //这个定时调用失去了this指向
         let that = this;
         setTimeout(function(){
             that.setState({
                 isVisiblePausedSliderFullScreen: false
             })
         },3000)
    } 
     //格式化音乐播放的时间为0：00。借助onProgress的定时器调用，更新当前时间
    formatMediaTime(time) {
        let minute = Math.floor(time / 60);
        let second = parseInt(time - minute * 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;
       
    }
    //加载视频调用，主要是拿到 “总时间”，并格式化
    customerOnload(e){
        let time = e.duration;   
        this.setState({
            duration: time
        })
    }
    // 获得当前的，播放时间数，但这个数是0.104，需要处理
    customerOnprogress(e){
        let time = e.currentTime;   // 获取播放视频的秒数       
        this.setState({
            currentTime: time,
            sliderValue: time
        })           
    }
    // 移动滑块，改变视频播放进度
    customerSliderValue(value){  
        this.player.seek(value);    
    }
    enterFullScreen(){
        this.setState({
            videoWidth: screenHeight,
            videoHeight: screenWidth,
            isFullScreen: true
        })
        // 直接设置方向
        Orientation.lockToLandscape();
    }
    _onStartShouldSetResponder(e){
        console.log(e);
    }
    componentDidMount() {
        var initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
         console.log('是竖屏');
        } else {
            console.log('如果是横屏，就将其旋转过来');
            Orientation.lockToPortrait();
        }
    }
    play=()=>{
        var play=!this.state.isPaused;
        this.setState({
            isPaused:play
        })
    }
    render(){
        // 播放按钮组件：是否显示
        let playButtonComponent = (
            <TouchableWithoutFeedback
                onPress={this.changePausedState}
            >
                <Icon name='play-circle' size={50} color="#8a8a8a" style={styles.playBtn} />
            </TouchableWithoutFeedback>
        );
        let pausedBtn = this.state.isPaused?playButtonComponent:null;
        // 暂停按钮、进度条、全屏按钮 是否显示
        let pausedSliderFullComponent = (
            <View style={{position:"absolute",bottom:0}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {/* 进度条按钮     */}
                    <View style={styles.sliderBox}>
                        <Icon name={this.state.isPaused?'play-circle':'pause-circle'} size={25} color="#8a8a8a" onPress={this.play} />
                        <Text>{this.formatMediaTime(this.state.currentTime)}</Text>
                        <Slider 
                            style={{width: '70%', height: 40,marginLeft:10}} 
                            value={this.state.sliderValue}
                            maximumValue={this.state.duration}
                            thumbTintColor="#000" //开关夹点的yanse              
                            minimumTrackTintColor="red"
                            maximumTrackTintColor="#ccc"
                            step={1}
                            onValueChange={this.customerSliderValue}
                        />
                        <Text>{this.formatMediaTime(this.state.duration)}</Text>
                    </View>
                    {/* 全屏按钮 */}
                    <View>
                        <TouchableOpacity
                            onPress={this.enterFullScreen}
                        >                           
                            <Text style={{backgroundColor:'#00ff00',padding:5}}>全屏</Text>                      
                        </TouchableOpacity> 
                    </View>
                
            
                </View>   
            </View>
        );
        let pausedSliderFull = this.state.isVisiblePausedSliderFullScreen?pausedSliderFullComponent:null;
        return (
            <View>
                <View style={{height:55,width:'100%',backgroundColor:'#8a8a8a',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Icon name='left' style={{marginLeft:15}}  color="#fff" onPress={()=>{Actions.pop()}} />
                    <Text style={{color:'#fff',fontSize:23}}>视频</Text>
                    <Icon name='ellipsis' size={35} color="#fff" style={{marginRight:15}}/>
                </View>
                <View>
                    <TouchableWithoutFeedback
                        onPress={this._changePauseSliderFullState}
                        onResponderMove={this._onStartShouldSetResponder}
                    >  
                        <Video source={{uri:'http://129.211.62.80:8080/video/show?name=2.3.mp4'}}
                            ref={(ref) => {
                                this.player = ref
                            }}  
                            style={{width: this.state.videoWidth,height: this.state.videoHeight,backgroundColor:"#FFC1C1"}}
                            allowsExternalPlayback={false} // 不允许导出 或 其他播放器播放
                            paused = {this.state.isPaused} // 控制视频是否播放
                            resizeMode="cover"
                            onLoad={(e)=>this.customerOnload(e)} 
                            onProgress={(e)=>this.customerOnprogress(e)}                       
                            fullscreen={this.state.isFullScreen}
                        />
                    </TouchableWithoutFeedback> 
                    {/* 播放的按钮：点击之后需要消失 */}
                    {pausedBtn}
                    {/* 暂停按钮，进度条，全屏按钮 */}
                    {pausedSliderFull}
                </View>
</View>
        )
    }
}
var styles = StyleSheet.create({
    myVideo:{
        width: 340,
        height: 240
    },
    playBtn:{
        width: 50,
        height: 50,
        borderRadius: 50,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: -25,
        marginTop:-25,
        zIndex:999
    },
    sliderBox:{
        flex:0,
        flexDirection:'row',
        alignItems:'center',
    }
  });