import styled from "styled-components";
import logoImage from "../../statics/logo.png"

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: "/",
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoImage});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        color: #969696;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #969696;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:"搜索",
})`
    padding: 0 40px 0 20px;
    width: 100px;
    height: 36px;
    font-size: 14px;
    margin-left: 20px;
    margin-top: 10px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width:160px;
    }
    &.slide-enter {
        transition: all .5s ease-out;
    }
    &.slide-enter-active {
        width: 160px;
    }
    &.slide-exit {
        transition: all .5s ease-out;
    }
    &.slide-exit-active {
        width: 100px;
    }
`;

export const Addtion = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.button`
    float: right;
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        width: 100px;
        color: #fff;
        background: #ec6149;
    }
`;