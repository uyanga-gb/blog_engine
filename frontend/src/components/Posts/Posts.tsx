import React, { FC, useState } from "react"
import "./styles.scss"
import { getPosts } from "../../actions/post-action-creators"
import PostPreviewCard from "./PostPreviewCard";
import {connect} from "react-redux";

type PostPreviewType = {
    authorName: string
    authorAvatar: string
    publishDate: string
    title: string
    description: string
    postPreviewImg: string
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getPosts() {
                dispatch(getPosts())
            }
        }
    }
}
const mapStateToProps = () => {

    const posts: PostPreviewType[] = [
        {authorName: "Uyanga",
            authorAvatar: "gagaga",
            publishDate: "March 1, 2021",
            title: "test",
            postPreviewImg: "img",
            description: "This post is my description This post is my description This post is my description This post is my description"},
        {authorName: "Uyanga",
            authorAvatar: "gagaga",
            publishDate: "March 5, 2021",
            title: "test",
            postPreviewImg: "img",
            description: "This post is my descriptionThis post is my description This post is my description This post is my description " }]

    return {
        posts
    }
}

const Posts: FC = ({posts, actions}) => {
    return (
        <div className='posts_container'>
            {posts.map((post, idx) => {
                return <PostPreviewCard
                    key={idx}
                    authorName={post.authorName}
                    authorAvatar={post.authorAvatar}
                    publishDate={post.publishDate}
                    title={post.title}
                    description={post.description}
                    postPreviewImg={post.postPreviewImg}
                    handleLoadPost={actions.loadPost}
                />
            })}
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)
