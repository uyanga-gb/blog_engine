import React, { FC, useState } from "react"
import "./styles.scss"
const Header: FC = () => {

    const userSignIn = () => {
        console.log('show modal')
    }

    const createAccount = () => {
        console.log('create account')
    }

    return (
        <div className="header_container">
            <h2 className="blog_logo">Blog engine</h2>
            <div className="header_buttons_wrapper">
                <div className="sign_in_button" onClick={userSignIn}>Sign In</div>
                <div className="create_account_button" onClick={createAccount}>Create Account</div>
            </div>
        </div>
    )
}

export default Header
