import React, { FC, useState } from "react"
import "./styles.scss"
import defaultPostPreview from "../../assets/images/defaultPostPreview.png"
import defaultAvatar from "../../assets/images/defaultAvatar.png"
import cx from "classnames"

type Props = {
    authorName: string
    authorAvatar: string
    publishDate: string
    title: string
    description: string
    postPreviewImg: string
    handleLoadPost: (postId: number) => void
}
const PostPreviewCard: FC<Props> = ({authorName, authorAvatar, publishDate, title, description, postPreviewImg, handleLoadPost}) => {
    return (
        <div className="post_prev_card">
          <div className="post_prev_image">
            <img src={defaultPostPreview} />
          </div>
          <div className="post_prev_body">
            <h4>{title}</h4>
            <p className={cx(title.length > 34 && "two-line-title")}>{description}</p>
            <div className="post_prev_info">
              <img className="author_avator" src={defaultAvatar} />
              <div className="author_info">
                  <div>{authorName}</div>
                  <div>{publishDate}</div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PostPreviewCard
