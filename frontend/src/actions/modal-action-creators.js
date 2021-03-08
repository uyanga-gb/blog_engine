import {
    SHOW_MODAL,
  GET_POSTS,
  GET_POST
} from "./action-types";

export const showModal = ({
                              type: modalType = null,
                              className,
                              heading,
                              content,
                              primaryAction,
                              secondaryAction,
                              closeOnAction = true,
                              hideCloseIcon = false
                          }) => ({
    type: SHOW_MODAL,
    modalType,
    className,
    heading,
    content,
    primaryAction,
    secondaryAction,
    closeOnAction,
    hideCloseIcon
})

export const getPosts = () => (
  {type: GET_POSTS}
)
