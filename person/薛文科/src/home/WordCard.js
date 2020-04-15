import React, { Component } from 'react'
import { Text, View, StyleSheet ,TouchableOpacity,Dimensions,TextInput} from 'react-native'
import { Actions, Scene } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
export default class WordCard extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.back}>
                        <TouchableOpacity 
                            onPress={Actions.pop}
                        >
                            <Icon name='left' color='gray'/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.search}>
                        <TextInput 
                            placeholder="请输入您要搜索的单词"
                            style={{
                                width: 490*s,height: 50*s,
                                padding: 0,
                                paddingLeft: 10
                            }}
                        />
                    </View>    
                    <TouchableOpacity>
                            <Icon name='search' color='gray'/>
                    </TouchableOpacity>       
                </View>
                <View >

                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        width:width,
        height: 70*s,
        // borderBottomColor: 'red',
        // backgroundColor:'red',
        borderBottomWidth: 1/3,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    search:{
        width: 525*s,
        height: 50*s,
        // backgroundColor: '#fbb8b8',
        borderRadius:25*s,
        borderWidth:1,
        borderColor:'gray',
        flexDirection: 'row',
        alignItems: 'center'
    },
    back:{
        // width:20*s,
        // height:70*s,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
})