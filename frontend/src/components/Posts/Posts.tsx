import React, {FC, useEffect, useState} from "react"
import "./styles.scss"
import {getAllPosts} from "../../actions/post-action-creators"
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
                dispatch(getAllPosts())
            }
        }
    }
}
const mapStateToProps = (state) => {
    const { post } = state

    return {
        posts: post.posts || []
    }
}

const Posts: FC = ({posts, actions}) => {

    useEffect(() => {
        actions.getPosts()
    }, [])

    return (
        <div className='posts_container'>
            {posts.map((post) => {
                return <PostPreviewCard
                    key={post.id}
                    authorName={`${post.authorfirstname} ${post.authorlastname}`}
                    authorAvatar={post.authorAvatar}
                    publishDate={post.publishedat}
                    title={post.title}
                    description={post.postcontent}
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
