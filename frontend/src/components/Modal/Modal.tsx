import React, { FC, useState } from "react"
import "./styles.scss"
import { TextField } from "@rmwc/textfield";

const LoginModal: FC = () => {

    const handleSignIn = () => {

    }
    const updateStateValue = (inputType, value) => {
        this.setState({
            userInputs: {
                ...this.state.userInputs,
                [inputType]: value
            }
        })
    }
    const handleInputChange = (inputType) => (event) => {
        updateStateValue(inputType, event.target.value)
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                    <h4 className="modal_title">Login to Blog Engine</h4>
                </div>
                <div className="modal_body">
                    <form onSubmit={handleSignIn}>
                        <label htmlFor="username-field">Username</label>
                        <TextField
                            outlined
                            autoFocus
                            className="login-field"
                            value={""}
                            onChange={handleInputChange("username")}
                            id="username-field"
                            placeholder={"yours@example.com"}
                        />
                        <label htmlFor="password-field">Password</label>
                        <TextField
                            outlined
                            className="login-field"
                            value={""}
                            onChange={handleInputChange("password")}
                            id="password-field"
                            placeholder={"your password"}
                            type="password"
                        />
                    </form>
                </div>
                <div className="modal_footer">
                    <button className="modal_button">Log in</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
