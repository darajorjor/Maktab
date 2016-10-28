/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */

import React from 'react'
import {Card, CardMedia, CardTitle} from 'material-ui/Card'
import {Link} from 'react-router'
import style from './LessonEntry.css'
import Done from 'material-ui/svg-icons/action/done'
import {lightGreenA700} from 'material-ui/styles/colors'

export default class LessonEntry extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const {item} = this.props;

        return(
            <Link to="lesson">
                <Card zDepth={1} className={style.card}>
                    <CardMedia style={{height: 250,overflow: 'hidden', position: 'relative'}}>
                        <div className={style.completedDiv}>
                            <Done className={style.doneIcon} color={lightGreenA700}/>
                        </div>
                        <img src={item.img} />
                    </CardMedia>
                    <CardTitle
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                </Card>
            </Link>
        )
    }
}
