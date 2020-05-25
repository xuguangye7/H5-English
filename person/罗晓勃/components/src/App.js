import React, {useState,useEffect} from 'react';
import {StyleSheet,StatusBar, AsyncStorage,View,Text, Image, BackHandler, ToastAndroid} from 'react-native';
import {Router,Overlay,Scene, Tabs,Drawer,Lightbox,Modal, Actions} from 'react-native-router-flux'
import {Icon, List} from '@ant-design/react-native' 

import SplashScreen from 'react-native-splash-screen'
import User from './src/userinfor/Userinfor'
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Publish from './src/userinfor/Publish';
import Register from './src/common/Register';
import Learn from './src/home/Learn';
import Words from './src/home/Words';
import Search from './src/common/Search';
import WordCard from './src/home/WordCard';
import Detail from './src/home/Detail';
import Review from './src/home/Review';
import Liuliba from './src/goods/Liuliba';
import WatchScreen from './src/cart/WatchScreen';
import List1 from './src/goods/List1';
import Test from './src/test/Test';
import Collect from './src/userinfor/Collect';
import Note from './src/userinfor/Note';
import Detail1 from './src/common/Detail'
import Write from './src/home/Write';
import CompositionTitle from './src/home/CompositionTitle';
import CompositionDetail from './src/common/CompositionDetail';
import Answe from './src/common/Answe';
import ScreenList from './src/cart/ScreenList';
import Listen2 from './src/cart/Listen2'

console.disableYellowBox=true;
const rootUrl='https://www.fastmock.site/mock/48a66b6b105a9c88c834ce567beb86ec/api'

const App = () => {
    let [isLogin,setLogin] = useState(false);
    let [isIntall,setInstall]=useState(true);
    //测试期间代码
    AsyncStorage.removeItem('isInstall')
    let now = 0;
    let init=()=>{
        AsyncStorage.getItem('isInstall')
        .then(res=>{
            if(res){
                setInstall(false);
            }
        })
		AsyncStorage.clear()
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
    }
	useEffect(()=>{
        init();
    },[])
    let afterInstall=()=>{
        console.log('after install');
        setInstall(false)
    }
    if(isIntall){
        return <View style={{flex:1}}>
            <SwiperPage afterInstall={afterInstall}/>
        </View>
    }
    return (
        <Router
            backAndroidHandler={()=>{
                if(Actions.currentScene != 'login'&&Actions.currentScene!='home'){
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
            <Modal 
                key="modal" 
                hideNavBar
            >
                <Lightbox key="lightbox">
                    <Drawer 
                        key="drawer"
                        contentComponent={()=><Text>drawer</Text>}
                        drawerIcon={()=><Icon name="menu"/>}
                        drawerWidth={400}
                    >
                        <Scene key="root">
                            <Tabs 
                                key='tabbar'
                                hideNavBar
                                activeTintColor="#000"
                                inactiveTintColor="#8a8a8a"
                                tabBarStyle={{backgroundColor:'#fff'}}
                            >
                                {/* 首页 */}
                                <Scene 
                                    key='homePage'
                                    title='首页'
                                    icon={
                                        ({focused})=><Icon 
                                            color={focused?'#8a8a8a':'#8a8a8a'} 
                                            size={30}
                                            name="read"
                                        />
                                    }
                                >
                                    <Scene key='home' hideNavBar={true} component={Learn}/>
                                    <Scene key='word' hideNavBar component={Words} />
                                    <Scene component={WordCard} hideNavBar hideTabBar key="wordcard" />
                                    <Scene component={Detail} hideTabBar hideNavBar key="detail" />
                                    <Scene title='单词详情' hideTabBar hideNavBar hideDrawerButton key='search' component={Search} />
                                    <Scene key="review" component={Review} hideTabBar hideNavBar hideDrawerButton />
                                    <Scene key="watchScreen" component={WatchScreen} hideTabBar hideNavBar hideDrawerButton />
                                    <Scene key='details' hideNavBar hideTabBar component={Detail1} />
                                    <Scene key="write" component={Write} hideNavBar hideTabBar />
                                    <Scene key='compositiontitle' component={CompositionTitle} hideNavBar hideTabBar/>
                                    <Scene key='compositiondetail' component={CompositionDetail} hideNavBar hideTabBar/>
                                    <Scene key="answe" component={Answe} hideNavBar hideTabBar />
                                    <Scene key="screenlist" component={ScreenList} hideNavBar hideTabBar />
                                    <Scene key="listen" component={Listen2} hideNavBar hideTabBar />
                                </Scene>
                                {/* 商品分类 */}
                                <Scene 
                                    key='goodsPage'
                                    title='英语说'
                                    icon={
                                        ({focused})=><Icon 
                                            color={focused?'#8a8a8a':'#8a8a8a'} 
                                            size={30}
                                            name="message"
                                        />
                                    }
                                    
                                >
                                    <Scene key="goods" hideNavBar={true} component={Liuliba}/>
                                    <Scene key="list" hideNavBar component={List1}/>
                                </Scene>
                                {/* 用户中心 */}
                                <Scene 
                                    key='userPage'
                                    hideDrawerButton
                                    icon={({focused})=>
                                        <Icon 
                                            color={focused?'#8a8a8a':'#8a8a8a'} 
                                            size={30}
                                            name='user'/>
                                        }
                                    title="我"
                                    hideNavBar={true}
                                    
                                >
                                    <Scene key='user' hideNavBar={true} component={User}/>
                                    <Scene key='publish' hideNavBar={true} hideTabBar component={Publish} />
                                    <Scene key='collect' hideNavBar={true} hideTabBar component={Collect} />
                                    <Scene key='note' hideNavBar={true} hideTabBar component={Note} />
                                </Scene>
                                
                            </Tabs>
                        </Scene>
                    </Drawer>
                    {/* <Scene key='light' component={Mybox}/> */}
                </Lightbox>
                <Scene key='login' initial={!isLogin} component={Login} />
                <Scene key='register' component={Register} />
                {/* <Scene key="login" component={ShowMyName}/> */}
                {/* <Scene key="login1" component={Login}/> */}
            </Modal>
            {/* <Scene component={Message}/> */}
            </Overlay>
        </Router>
    );
};


// const App=()=>{
//   return <View>
//     <Demo01 name={100222}/>
//   </View>
// }
const styles = StyleSheet.create({
  
});

export default App;
