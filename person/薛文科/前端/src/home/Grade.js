import React, { Component } from 'react'
import { Text, View, DeviceEventEmitter } from 'react-native'
import Header from '../utils/Header'

var sort;
export default class Grade extends Component {
    constructor(){
        super();
        this.state={
            sort:0
        }
    }
    componentDidMount(){
        DeviceEventEmitter.addListener("returngrade",(params)=>{
            console.log(params)
            sort=params;
            console.log('sort',sort)
        })
        this.setState({
            sort:sort
        })
        console.log(this.state.sort)
    }
    look=()=>{
        console.log('this.state.sort',this.state.sort);
    }
    render() {
        return (
            <View>
                <Header name="成绩" />
                <View>
                    <Text onPress={this.look}>您的分数：</Text>
                    <Text>{this.state.sort}</Text>
                </View>
            </View>
        )
    }
}
