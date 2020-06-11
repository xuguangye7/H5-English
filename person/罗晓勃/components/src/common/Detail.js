import React, { Component } from 'react'
import { Text,DeviceEventEmitter, View ,StyleSheet,Dimensions} from 'react-native';
import Header from '../utils/Header';
import {myFetch} from '../utils/FetchData'
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
var detail_url='word/writer';
var detail_id;
export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            item:null,
            data:[]
        }
    }
    componentDidMount(){
        DeviceEventEmitter.addListener("returnData", (params) => {
            console.log('params',params);
            detail_id=parseInt(params)
        })
        // console.log('id',id)
        myFetch.get(detail_url,{id:detail_id})
            .then(res=>{
                console.log(res.content)
                this.setState({
                    data:res.content
                })
            })
    }
    render() {
        return (
            <View>
                <Header name='优秀范文'/>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%',flexDirection:'column',alignItems:'center'}}>
                                {/* //错误 */}
                                <Text style={styles.title}>{item.title}</Text> 
                                
                                <View style={styles.cont}>
                                    <Text style={styles.txt}>{item.name}</Text>
                                    <Text style={styles.txt}>
                                    The Spring Festival is coming soon, I feel so excited, my parents
                                    will be home and get together with me. They are busy all the time
                                    and have less vacation, they told me that they would have 7 days 
                                    off and promised to stay with me. I have made some plans for the coming
                                    festival and I can’t wait to carry them out.
                                    The Spring Festival is coming soon, I feel so excited, my parents
                                    will be home and get together with me. They are busy all the time
                                    and have less vacation, they told me that they would have 7 days 
                                    off and promised to stay with me. I have made some plans for the coming
                                    festival and I can’t wait to carry them out.
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}
const styles=StyleSheet.create({
    back:{
        width:width,
        height:height,
        backgroundColor:'blue',
        
    },
    //错误
    title:{
        width:width,
        backgroundColor:'red',
        marginTop:15,
        marginLeft:50,
        color:'#ffff00',
        textShadowOffset:{width:3,hegith:3},
        textShadowRadius:2,
        textShadowColor:'#99ccff',
        fontSize:25,
        // flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center',
        lineHeight:30,
        textAlign:'center'
    },
    cont:{
        // height:30,
        width:width,
        marginTop:15,
        flexDirection:"column",
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:10,
        backgroundColor:'#99ccff',
        paddingLeft:10,
        paddingRight:10
    },
    txt:{
        fontSize:16,
    }
    
})