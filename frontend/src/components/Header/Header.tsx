import React, { FC, useState } from "react"
import "./styles.scss"
import { showModal } from "../../actions/modal-action-creators"
import { connect } from "react-redux"
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogButton} from "@rmwc/dialog";
import Modal from "../Modal/Modal";
import SignUpModal from "../Modal/SignUpModal";
const USER_SIGN_IN_MODAL = "USER_SIGN_IN_MODAL"
const CREATE_ACCOUNT_MODAL = "CREATE_ACCOUNT_MODAL"

export function mapDispatchToProps(dispatch) {
    return {
        actions: {
            showModal(param) {
                dispatch(showModal(param))
            }
        }
    }
}

const Header: FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentModal, setCurrentModal] = useState(null)

    const handleModalType = (modalType) => {
        if (modalType === "signIn") {
            setCurrentModal(<SignUpModal />)
        } else if (modalType === "createAccount") {
            setCurrentModal(<Modal  />)
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
                <div className="create_account_button" onClick={() => showModal("createAccount")}>Create Account</div>
                <div className="sign_in_button" onClick={() => showModal("signIn")}>Sign In</div>
            </div>
        </div>
            {modalOpen && currentModal}
        </div>
    )
}

export default connect(
    null,
    mapDispatchToProps
)(Header)
