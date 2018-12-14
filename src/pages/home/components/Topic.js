import React, {Component} from "react";
import {TopicWrapper, TopicItem} from "../style";

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img className="topic-img" src="//upload.jianshu.io/users/upload_avatars/6539412/824c3d2f-b0d2-43a6-885a-d2acd37fd364.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    社会热点
                </TopicItem>
            </TopicWrapper>
        );
    }
}

export default Topic;