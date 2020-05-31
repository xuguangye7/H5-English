import React, { Component } from 'react'
import { Text, View ,AsyncStorage,Button} from 'react-native'
// import ScrollableTabView from 'react-native-scrollable-tab-view'
export default class Mine extends Component {
    constructor(){
        super();
        this.state={
            ko:''
        }
    }
    // storeData = async ()=>{
    //     await AsyncStorage.setItem('clic','false',
    //         ()=>{console.log('store success')}
    //     )
    // }
    getData = ()=>{
        AsyncStorage.getItem('clic')
        .then((res)=>{
            if(res=='false'){
                AsyncStorage.setItem('clic','true',
                ()=>{
                    console.log(res) 
                })
            }else{
                AsyncStorage.setItem('clic','false',
                ()=>{
                    console.log(res)
                })
            }
        })
    }
    se=()=>{
        if(this.state.ko==''){
            this.getData();
        }
    }
    render() {
        
        return (
            <View>
               <View style={{width:30,height:30,backgroundColor:'red'}}
               >
                   
               </View>
               {/* <Button title="存储" onPress={this.storeData}/> */}
               <Button title="获取" onPress={this.getData}/>
            </View>
        )
    }
}
