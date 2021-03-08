import React, { FC, useState } from "react"
import {Dialog} from "@rmwc/dialog";

const AppOverlay: FC = ({modal}) => {

    return (
        <Dialog.SimpleDialog
            open
            hideCloseIcon
            title={"test"}
            message={"ttt"}
            />
    )

}

export default AppOverlay
