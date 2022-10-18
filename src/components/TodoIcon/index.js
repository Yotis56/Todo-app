import React from "react";
import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as EditSVG } from './edit.svg'
import { ReactComponent as DeleteSvg } from './delete.svg'
import './todoIcon.css'

const iconTypes = {
    "check": color => (
        <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "edit": color => (
        <EditSVG className="Icon-svg Icon-svg--edit" fill={color} />
    ),
    "delete": color => (
        <DeleteSvg className="Icon-svg Icon-svg--delete" fill={color} />
    )
}

function TodoIcon ( {type, color = 'gray', onClick}) {
    return (
        <span className={`Icon-container Icon-container--${type}`} onClick={onClick} >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }