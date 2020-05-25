import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    View,
    Slider,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Animated,
    Easing
} from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions} from 'react-native-router-flux'
var {width,height} = Dimensions.get('window');
import Video from 'react-native-video'
import {myFetch} from './src/utils/FetchData'

var lyrObj = []   // 存放歌词
var myAnimate;
//       http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=10&offset=0    //总列表
//       http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.lry&songid=213508   //歌词文件
//       http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=877578   //播放
 
 
export default class Main extends Component {
 
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        this.state = {
            songs: [],   //歌曲id数据源
            playModel:1,  // 播放模式  1:列表循环    2:随机    3:单曲循环
            btnModel:require('../pic/bofang.png'), //播放模式按钮背景图
            pic_small:'',    //小图
            pic_big:'',      //大图
            file_duration:0,    //歌曲长度
            song_id:'',     //歌曲id
            title:'',       //歌曲名字
            author:'',      //歌曲作者
            file_link:'',   //歌曲播放链接
            songLyr:[],     //当前歌词
            sliderValue: 0,    //Slide的value
            pause:false,       //歌曲播放/暂停
            spin:'false',
            currentTime: 0.0,   //当前时间
            duration: 0.0,     //歌曲时间
            currentIndex:0,    //当前第几首
            isplayBtn:require('../pic/bofang.png'),  //播放/暂停按钮背景图
            url:'http://129.211.62.80:8080/sound/play?name=U2.mp3'
        }
    }
    //上一曲
    prevAction = (index) =>{
        this.recover()
        // lyrObj = [];
        if(index == -1){
            index = this.state.songs.length - 1 // 如果是第一首就回到最后一首歌
        }
        this.setState({
            currentIndex:index  //更新数据
        })
        console.log(this.state.currentIndex)
        this.loadSongInfo(index)  //加载数据
    }
    //下一曲
    nextAction = (index) =>{
        this.recover()
        lyrObj = [];
        if(index > 2){
            index = 0 //如果是最后一首就回到第一首
        }
        this.setState({
            currentIndex:index,  //更新数据
        })
        console.log(this.state.currentIndex)
        this.loadSongInfo(index)   //加载数据
    }
    //换歌时恢复进度条 和起始时间
    recover = () =>{
        this.setState({
            sliderValue:0,
            currentTime: 0.0
        })
    }
    //播放模式 接收传过来的当前播放模式 this.state.playModel
    playModel = (playModel) =>{
        playModel++;
        playModel = playModel == 4 ? 1 : playModel
        //重新设置
        this.setState({
            playModel:playModel
        })
        //根据设置后的模式重新设置背景图片
        if(playModel == 1){
            this.setState({
                btnModel:require('../pic/bofang.png'),
            })
        }else if(playModel ==  2){
            this.setState({
                btnModel:require('../pic/bofang.png'),
            })
        }else{
            this.setState({
                btnModel:require('../pic/bofang.png'),
            })
        }
    }
    //播放/暂停
    playAction =() => {
        this.setState({
            pause: !this.state.pause
        })
        //判断按钮显示什么
        if(this.state.pause == true){
            this.setState({
                isplayBtn:require('../pic/pause.png')
            })
        }else {
            this.setState({
                isplayBtn:require('../pic/bofang.png')
            })
        }
 
    }
    //播放器每隔250ms调用一次
    onProgress =(data) => {
        let val = parseInt(data.currentTime)
        this.setState({
            sliderValue: val,
            currentTime: data.currentTime
        })
        
        //如果当前歌曲播放完毕,需要开始下一首
        // if(val == this.state.file_duration){
        //     if(this.state.playModel == 1){
        //         //列表 就播放下一首
        //         this.nextAction(this.state.currentIndex + 1)
        //     }else if(this.state.playModel == 2){
        //         let  last =  this.state.songs.length //json 中共有几首歌
        //         let random = Math.floor(Math.random() * last)  //取 0~last之间的随机整数
        //         this.nextAction(random) //播放
        //     }else{
        //         //单曲 就再次播放当前这首歌曲
        //         this.refs.video.seek(0) //让video 重新播放
        //         _scrollView.scrollTo({x: 0,y:0,animated:false});
        //     }
        // }
 
    }
    //把秒数转换为时间类型
    formatTime(time) {
        // 71s -> 01:11
        let min = Math.floor(time / 60)
        let second = time - min * 60
        min = min >= 10 ? min : '0' + min
        second = second >= 10 ? second : '0' + second
        return min + ':' + second
    }
    // 歌词
    renderItem() {
        // 数组
        var itemAry = [];
        for (var i = 0; i < lyrObj.length; i++) {
            var item = lyrObj[i].txt
            if (this.state.currentTime.toFixed(2) > lyrObj[i].total) {
                //正在唱的歌词
                itemAry.push(
                    <View key={i} style={styles.itemStyle}>
                        <Text style={{ color: 'blue' }}> {item} </Text>
                    </View>
                );
                _scrollView.scrollTo({x: 0,y:(25 * i),animated:false});
            }
            else {
                //所有歌词
                itemAry.push(
                    <View key={i} style={styles.itemStyle}>
                        <Text style={{ color: 'red' }}> {item} </Text>                         
                    </View>
                )
            }
        }
 
        return itemAry;
    }
    // 播放器加载好时调用,其中有一些信息带过来
    onLoad = (data) => {
        this.setState({ duration: data.duration });
    }
 
    loadSongInfo = (index) => {
        //加载歌曲
        let songid =  this.state.songs[index]
        let url = 'http://129.211.62.80:8080/sound/play?name=' + songid
        this.setState({
            url:url
        })
 
                //加载歌词
 
            
    }
    componentDidMount(){
        var song_url='sound';
        myFetch.get(song_url)
        .then(res=>{
            var songs1=[];
            for(var i=0;i<res.content.length;i++){
                songs1.push(res.content[i].song_name)
            }
            console.log('song1',songs1)
            this.setState({
                songs:songs1
            })
        })
    }
    componentWillMount() {
        // if(this.state.spin=='false'){
            this.spin()   //   启动旋转
        // }
        
 
    }
 
    //旋转动画
    spin () {
        this.spinValue.setValue(0)
        myAnimate = Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
 
    }
 
    render() {
            const spin = this.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            })
            return (
                <View style={styles.container}>
                    {/*背景大图*/}
                    {/* <Image source={{uri:this.state.pic_big}} style={{flex:1}}/> */}
                    {/*背景白色透明遮罩*/}
                    <View style = {{position:'absolute',width: width,height:height,backgroundColor:'#f8f6f1',opacity:0.8}}/>
                        <View style={{height:45,width:'100%',backgroundColor:'#e9e4d9',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Icon name='left' style={{marginLeft:15}}  color="#fff" onPress={()=>{Actions.pop()}} />
                            <Text style={{color:'#fff',fontSize:23}}>听力</Text>
                            <Icon name='ellipsis' size={35} color="#fff" style={{marginRight:15}}/>
                        </View>
                    <View style = {{position:'absolute',width: width,height:500,backgroundColor:'red'}}>
                        <View style={{
                            width:width,
                            height:500,
                            backgroundColor:'red'
                        }}>
                            {/*胶片光盘*/}
                            {/* <Image source={require('../../assets/timg.jpg')} style={{width:220,height:220,alignSelf:'center'}}/> */}
    
                            {/*旋转小图*/}
                            <Animated.Image
                                ref = 'myAnimate'
                                style={{width:240,height:240,marginTop: 150,alignSelf:'center',borderRadius: 240*0.5,transform: [{rotate: spin}]}}
                                source={require('../pic/timg.jpg')}
                            />
                        </View>
                        {/*播放器*/}
                        <Video
                            source={{uri:this.state.url}}
                            ref='video'
                            volume={1.0}
                            paused={this.state.pause}
                            onProgress={(e) => this.onProgress(e)}
                            onLoad={(e) => this.onLoad(e)}
                        />
                        {/*歌曲信息*/}
                        <View style={styles.playingInfo}>
                            {/*作者-歌名*/}
                            <Text>{this.state.author} - {this.state.title}</Text>
                            {/*时间*/}
                            <Text>{this.formatTime(Math.floor(this.state.currentTime))} - {this.formatTime(Math.floor(this.state.duration))}</Text>
                        </View>
                        {/*播放模式*/}
                        <View style = {{marginTop: 5,marginBottom:5,marginLeft: 20}}>
                            <TouchableOpacity onPress={()=>this.playModel(this.state.playModel)}>
                                <Image source={this.state.btnModel} style={{width:20,height:20}}/>
                            </TouchableOpacity>
                        </View>
                        {/*进度条*/}
                        <Slider
                            ref='slider'
                            style={{ marginLeft: 10, marginRight: 10}}
                            value={this.state.sliderValue}
                            maximumValue={this.state.duration}
                            step={1}
                            minimumTrackTintColor='#FFDB42'
                            onValueChange={(value) => {
                              this.setState({
                                  currentTime:value
                              })
                                        }
                                    }
                            onSlidingComplete={(value) => {
                                         this.refs.video.seek(value)
                                    }}
                        />

                        {/*歌曲按钮*/}
                        <View style = {{flexDirection:'row',justifyContent:'space-around'}}>
                            <TouchableOpacity onPress={()=>this.prevAction(this.state.currentIndex - 1)}>
                                <Image source={require('../pic/shangyiqu101.png')} style={{width:40,height:40}}/>
                            </TouchableOpacity>
 
                            <TouchableOpacity onPress={()=>this.playAction()}>
                                <Image source={this.state.isplayBtn} style={{width:50,height:50}}/>
                            </TouchableOpacity>
 
                            <TouchableOpacity onPress={()=>this.nextAction(this.state.currentIndex + 1)}>
                                <Image source={require('../pic/xiayiqu101.png')} style={{width:40,height:40}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
 
                </View>
            )
        // }
 
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"#e9e4d9"
    },
    image: {
        flex: 1
    },
    playingControl: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    playingInfo: {
        flexDirection: 'row',
        alignItems:'stretch',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:'rgba(255,255,255,0.0)'
    },
    text: {
        color: "black",
        fontSize: 22
    },
    modal: {
        height: 300,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingTop: 5,
        paddingBottom: 50
    },
    itemStyle: {
        paddingTop: 20,
        height:25,
        backgroundColor:'rgba(255,255,255,0.0)'
    }
})