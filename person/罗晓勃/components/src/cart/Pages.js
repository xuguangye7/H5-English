// import React, { Component } from 'react'
// import FirstPage from './FirstPage';
// import SecondPage from './SecondPage';
// import ThirdPage from './ThirdPage';
// import {
//     StackNavigator,
//     TabNavigator,
//     DrawerNavigator
// } from 'react-navigation';
// export default class Pages extends Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return (
//             <View>
//                 <SimpleAppNavigator/>
//             </View>
//         )
//     }
// }
// const SimpleAppNavigator = DrawerNavigator({
//     page1: {screen: FirstPage},
//     page2: {screen: SecondPage},
//     page3: {screen: ThirdPage},
    
// },{
//      initialRouteName: 'page1',
//      swipeEnabled: true,
//      animationEnabled: true,
//      lazy: false,
//      tabBarPosition:'bottom',
//  });
import React, { Component } from 'react'
import { Text, View,ScrollView,DeviceEventEmitter, Image ,TouchableOpacity,Dimensions,StyleSheet,ImageBackground} from 'react-native'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData'
import { Actions } from 'react-native-router-flux';
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';
export default class Pages extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            data1:[],
            data2:[]

        }
    }
    
    render() {
        return (
            <View>
                <Header name="全部视频" />
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',}}>
                    <TouchableOpacity onPress={Actions.first}>
                        <ImageBackground 
                         source={require('../../../pic/siji.png')}
                         style={{width: 300, height: 180,marginTop:20,zIndex:0,opacity:0.8}}
                        >
                        <Text style={styles.cet4}>cet4</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground 
                         source={require('../../../pic/xgn.jpg')}
                         style={{width: 300, height: 180,marginTop:20,zIndex:0,opacity:0.8}}
                        >
                        <Text style={styles.xgn}>新概念</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground 
                         source={require('../../../pic/kouyu.jpg')}
                         style={{width: 300, height: 180,marginTop:20,zIndex:0,opacity:0.8}}
                        >
                       <Text style={styles.kouyu}>口语</Text>
                        </ImageBackground>
                    </TouchableOpacity>
               </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    cet4:{
        fontSize:50,
        // marginTop:20,
        // backgroundColor:'red',
        lineHeight:180,
        textAlign:'center',
        // color:'#fff',
        textShadowOffset:{width:3,hegith:3},
        textShadowRadius:2,
        textShadowColor:'#99ccff',
    },
    xgn:{
        fontSize:50,
        // backgroundColor:'red',
        // marginTop:20,
        lineHeight:180,
        textAlign:'center',
        textShadowOffset:{width:3,hegith:3},
        textShadowRadius:2,
        textShadowColor:'#99ccff',
    },
    kouyu:{
        fontSize:50,
        // backgroundColor:'red',
        // marginTop:20,
        lineHeight:180,
        textAlign:'center',
        textShadowOffset:{width:3,hegith:3},
        textShadowRadius:2,
        textShadowColor:'#99ccff',
    }
})
