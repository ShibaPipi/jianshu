import axois from "axios";
import * as constants from "./constants";
import {fromJS} from "immutable";

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
});

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage,
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axois.get("api/home.json").then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axois.get("api/homeList.json?page=" + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        });
    }
};

export const toggleToTopShow = (show) => ({
    type: constants.SCROLL_TO_TOP_SHOW,
    show,
});