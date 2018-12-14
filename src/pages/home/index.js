import React, {Component} from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {HomeWrapper, HomeLeft, HomeRight} from "./style";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"
                         src="//upload.jianshu.io/admin_banners/web_images/4581/29a8ad23f5e09954e694954c91a42fa9e29df7f9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;