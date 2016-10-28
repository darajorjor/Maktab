import React from 'react'
import {Link} from 'react-router'

let style = {
    titleLink: {
        fontSize: 22
    }
};

export default class ClassName extends React.Component {

    render(){
        return(
            <div>
                <Link to="/" className={style.titleLink}>{this.props.account}</Link>/<Link to="/" className={style.titleLink}>{this.props.title}</Link>
            </div>
        )
    }
}