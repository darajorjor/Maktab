import React from 'react'
import style from './CardList.css'

export default class CardList extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div style={{backgroundColor: this.props.backgroundColor}}>
                {this.props.title ? <h1 style={{marginRight: 50, color: this.props.titleColor ? this.props.titleColor : ''}}>{this.props.title}</h1> : null}
                <div className={style.sliderWrapper}>
                    <div className={style.slider}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
