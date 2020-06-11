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
import { Text, View,ScrollView,DeviceEventEmitter, Image } from 'react-native'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData'
import { Actions } from 'react-native-router-flux';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';
export default class ScreenList extends Component {
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
                <View style={{width:100,height:100,backgroundColor:'red'}}></View>
            </View>
        )
    }
}

