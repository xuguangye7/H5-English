import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';
import Mine from './container/Mine'
import Speak from './container/Speak'
import Learn from './container/Learn'
console.disableYellowBox = true;

const App = () => {
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
      <Overlay>
      <Modal key="modal" hideNavBar>
        <Lightbox key="lightbox">
            <Scene>
              <Tabs 
                key="tabbar" 
                hideNavBar
                activeTintColor="red" 
                inactiveTintColor='#989898'
                tabBarStyle={{backgroundColor:"#fff"}}
              >
                {/*学习*/}
                <Scene key="学习" 
                 hideNavBar 
                  icon={
                    ({focused})=><Icon  size={30} color={focused ? 'red' : '#989898'} name="home"/>
                  }
                >
                  <Scene key="learn" component={Learn} />
                  
                </Scene>
                {/*流利吧*/}
                <Scene key="流利吧" 
                hideNavBar
                  icon={
                    ({focused})=><Icon  size={30} color={focused ? 'red' : '#989898'} name="th-large"/>
                  }
                >
                  <Scene key="Speak" component={Speak} />
                </Scene>
                {/*我的*/}
                <Scene key="我"
                hideNavBar
                  backgroundColor='red'
                  icon={
                    ({focused})=><Icon  size={30} color={focused ? 'red' : '#989898'} name="user"/>
                  }
                >
                  <Scene key="Mine" component={Mine}/>
                </Scene>
              </Tabs>
            </Scene>
        </Lightbox>
      </Modal>
      </Overlay>
    </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
