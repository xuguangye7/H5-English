import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import {WebView} from 'react-native-webview';

export default class Mybox extends Component {
    constructor(){
        super();
        this.state = {
            opacity: new Animated.Value(0),
            // num:0
        }
    }
    searchhandle = (text)=>{
        this.setState({num:text})
    }
    componentDidMount(){
        Animated.timing(this.state.opacity,{
            toValue: 1,
            duration: 500
        }).start()
    }
    back = ()=>{
        Animated.timing(this.state.opacity,{
            toValue: 0,
            duration: 500
        }).start(Actions.pop)
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View 
                    style={
                        [{opacity:this.state.opacity},styles.innerBox]
                    }
                > 
                    <View>
                        <TextInput>{this.props.num}</TextInput>
                    </View>
                    <Button 
                        title='返回'
                        onPress={
                            this.back
                        }
                    />
                   
                </Animated.View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        // backgroundColor: 'transparent',
        backgroundColor: 'rgba(50,50,50,.5)',
        position: 'absolute',
        left: 0,
        top: 0,
        right:0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerBox:{
        width: '80%',
        height: '50%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})