import React, { FC, useState } from "react"
import "./styles.scss"
import {TextField} from "@rmwc/textfield";
import {createNewPost} from "../../actions/post-action-creators";
import {connect} from "react-redux";

type Props = {
    authorUserName: string
}

const userInputs = {
    title: "",
    content: ""
}

function isValidInput(userInput) {
    return userInput.title.length &&
        userInput.content.length
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: {
            handleCreateNewUser(userInfo, post) {
                dispatch(createNewPost(userInfo, post))
            }
        }
    }
}

const NewPost: FC<Props> = ({authorUserName, handleShowModal, actions}) => {
    const [newPost, setNewPost] = useState(userInputs)

    const handlePublishPost = () => {
        if(isValidInput(newPost)) {
            actions.handleCreateNewPost(authorUserName, newPost)
            handleShowModal()
        } else {
            return
        }
    }

    const updateStateValue = (inputType, value) => {
        const updatedPost = {
            ...newPost,
            [inputType]: value
        }
        setNewPost(updatedPost)
    }
    const handleInputChange = (inputType) => (event) => {
        updateStateValue(inputType, event.target.value)
    }


    return (
        <div className="new_post_container">
            <div className="new_post_content">
                <h4 className="modal_title">Create a new post</h4>
                <label htmlFor="username-field">Post title</label>
                <TextField
                    required
                    pattern="[A-Za-z]{3}"
                    outlined
                    className="post_title"
                    value={newPost.title}
                    onChange={handleInputChange("lastname")}
                    id="post_title"
                    placeholder={"Your post title"}
                />
                <label htmlFor="username-field">Post content</label>
                <TextField
                    textarea
                    outlined
                    className="post_content"
                    value={newPost.content}
                    onChange={handleInputChange("intro")}
                    id="post_content"
                    placeholder={"Post your content here."}
                />
                <div className="modal_footer">
                    <button className="modal_button" onClick={handlePublishPost}>Publish</button>
                </div>
            </div>
        </div>

    )
}

export default connect(
    null,
    mapDispatchToProps
)(NewPost)
