import React, { FC, useState } from "react"
import "./styles.scss"
import { TextField } from "@rmwc/textfield";
import {loginUser} from "../../actions/user-action-creators";
import {connect} from "react-redux";

export function mapDispatchToProps(dispatch) {
    return {
        actions: {
            handleUserLogin(param) {
                dispatch(loginUser(param))
            }
        }
    }
}

const userInputs = {
    username: "",
    password:  ""
}

type Props = {
    handleModalShow: () => void
}

const LoginModal: FC<Props> = ({handleModalShow, actions}) => {
    const [user, setUser] = useState(userInputs)

    const handleSignIn = () => {
        actions.handleUserLogin(user)
        handleModalShow()
    }

    const updateStateValue = (inputType, value) => {
        const updatedUser = {
            ...user,
            [inputType]: value
        }
        setUser(updatedUser)
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
                            value={user.username}
                            onChange={handleInputChange("username")}
                            id="username-field"
                            placeholder={"yours@example.com"}
                        />
                        <label htmlFor="password-field">Password</label>
                        <TextField
                            outlined
                            className="login-field"
                            value={user.password}
                            onChange={handleInputChange("password")}
                            id="password-field"
                            placeholder={"your password"}
                            type="password"
                        />
                    </form>
                </div>
                <div className="modal_footer">
                    <button className="modal_button" onClick={handleSignIn}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default connect(
    null,
    mapDispatchToProps
)(LoginModal)
