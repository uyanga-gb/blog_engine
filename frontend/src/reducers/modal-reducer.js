import {
    SHOW_MODAL
} from "../actions/action-types";
import createReducer from "../utils/redux/create-reducer";

export function noop() {}

export const initialState = {
  banner: {
    open: false,
    type: null
  },
  modal: {
    type: null,
    open: false,
    content: "",
    header: "",
    loading: null,
    closeOnAction: true,
    primaryAction: {
      text: "OK",
      action: noop
    },
    secondaryAction: {
      text: "CANCEL",
      action: noop
    }
  }
}

const modalReducers = {
    [SHOW_MODAL](
        state,
        {
            modalType: type,
            className,
            content,
            heading,
            closeOnAction = true,
            hideCloseIcon = false,
            primaryAction,
            secondaryAction
        }
    ) {
      debugger
        return Object.assign({}, state, {
            modal: {
                open: true,
                loading: null,
                type,
                className,
                content,
                heading,
                closeOnAction,
                hideCloseIcon,
                primaryAction,
                secondaryAction
            }
        })
    }
}

export default createReducer(modalReducers, initialState)
