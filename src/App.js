import React, {Component} from 'react';
import {Provider} from "react-redux";
import Header from "./common/header";
import store from "./store";
import {GlobalStyle} from './style';
import {GlobalIconfont} from "./statics/iconfont/iconfont";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <GlobalIconfont/>
                <Header/>
            </Provider>
        );
    }
}

export default App;
