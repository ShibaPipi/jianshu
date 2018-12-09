import React from "react";
import {connect} from "react-redux";
import {CSSTransition} from "react-transition-group";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addtion,
    Button
} from "./style";
import {SEARCH_BLUR, SEARCH_FOCUS} from "./store/actionTypes";

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={500}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? "focused" : ""}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? "focused iconfont" : "iconfont"}>&#xe6e4;</i>
                </SearchWrapper>
            </Nav>
            <Addtion>
                <Button className="writing">
                    <i className="iconfont">&#xe632;</i>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addtion>
        </HeaderWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: SEARCH_FOCUS,
            };
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: SEARCH_BLUR,
            };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);