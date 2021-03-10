import React, { FC, useState } from "react"
import "./styles.scss"
import { connect } from "react-redux"
import Modal from "../Modal/Modal";
import SignUpModal from "../Modal/SignUpModal";
import NewPost from "../Posts/NewPost";


const Header: FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [newPostOpen, setNewPostOpen] = useState(false)
    const [currentModal, setCurrentModal] = useState(null)
    const [loggedUser, setLoggedUser] = useState(null)

    const showNewPost = (username) => {
        setModalOpen(false)
        setLoggedUser(username)
    }

    const handleModalType = (modalType) => {
        if (modalType === "signIn") {
            setCurrentModal(<Modal handleModalShow={() => setModalOpen(false)}/>)
        } else if (modalType === "createAccount") {
            setCurrentModal(<SignUpModal handleNewPostModal={showNewPost} />)
        }
    }

    const showModal = (modalType) => {
        setModalOpen(true)
        handleModalType(modalType)
    }


    return (
        <div>
        <div className="header_container">
            <h2 className="blog_logo">Blog engine</h2>
            <div className="header_buttons_wrapper">
                {loggedUser && <div className="header_button new_post" onClick={() => setNewPostOpen(true)}>New Post</div>}
                <div className="header_button create_account_button" onClick={() => showModal("createAccount")}>Create Account</div>
                <div className="header_button sign_in_button" onClick={() => showModal("signIn")}>Sign In</div>
            </div>
        </div>
            {modalOpen && currentModal}
            {newPostOpen && <NewPost authorUserName={loggedUser} handleShowModal={() => setNewPostOpen(false)}/>}
        </div>
    )
}

export default Header
