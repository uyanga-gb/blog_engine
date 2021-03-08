import React, { FC, useState } from "react"
import "./styles.scss"
import { TextField } from "@rmwc/textfield";
import {connect} from "react-redux";
import { createNewUser } from "../../actions/user-action-creators"

export function mapDispatchToProps(dispatch) {
    return {
        actions: {
            handleCreateNewUser(param) {
                dispatch(createNewUser(param))
            }
        }
    }
}

const userInputs = {
    firstname: "",
    lastname: "",
    intro: "",
    username: "",
    password:  ""
}

const SignUpModal: FC = ({actions}) => {
    const [newUser, setNewUser] = useState(userInputs)

    const handleSignIn = () => {
        actions.handleCreateNewUser(newUser)

    }
    const updateStateValue = (inputType, value) => {
        const updatedUser = {
            ...newUser,
            [inputType]: value
        }
        setNewUser(updatedUser)
    }
    const handleInputChange = (inputType) => (event) => {
        updateStateValue(inputType, event.target.value)
    }

    return (
        <div className="modal sign_up_modal">
            <div className="terms_condition">
                <h4>Terms and Condition</h4>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
            <div className="modal_content">
                <div className="modal_header">
                    <h4 className="modal_title">Sign Up to Blog Engine</h4>
                </div>
                <div className="modal_body">
                    <form onSubmit={handleSignIn}>
                        <label htmlFor="username-field">First Name</label>
                        <TextField
                            outlined
                            autoFocus
                            className="login-field"
                            value={newUser.firstname}
                            onChange={handleInputChange("firstname")}
                            id="firstname-field"
                            placeholder={"Jane"}
                        />
                        <label htmlFor="username-field">Last Name</label>
                        <TextField
                            outlined
                            className="login-field"
                            value={newUser.lastname}
                            onChange={handleInputChange("lastname")}
                            id="lastname-field"
                            placeholder={"Thomsan"}
                        />
                        <label htmlFor="username-field">Introduction</label>
                        <TextField
                            outlined
                            className="intro_field"
                            value={newUser.intro}
                            onChange={handleInputChange("intro")}
                            id="intro-field"
                            placeholder={"I am a software developer who is curious about emerging technologies."}
                        />
                        <label htmlFor="username-field">Username</label>
                        <TextField
                            outlined
                            className="login-field"
                            value={newUser.username}
                            onChange={handleInputChange("username")}
                            id="username-field"
                            placeholder={"yours@example.com"}
                        />
                        <label htmlFor="password-field">Password</label>
                        <TextField
                            outlined
                            className="login-field"
                            value={newUser.password}
                            onChange={handleInputChange("password")}
                            id="password-field"
                            placeholder={"your password"}
                            type="password"
                        />
                    </form>
                </div>
                <div className="modal_footer">
                    <button className="modal_button" onClick={handleSignIn}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default connect(
    null,
    mapDispatchToProps
)(SignUpModal)
