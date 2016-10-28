import React from 'react'
import style from './SectionEntry.css'
import {Link} from 'react-router'
import ProgressBar from 'progressbar.js'



export default class SectionEntry extends React.Component {

    constructor(){
        super();
    }

    componentDidMount(){
        var bar = new ProgressBar.Circle(this.refs.progress, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: 'rgb(139, 195, 74)',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
        });

        bar.animate(this.getProgressPercent());
    }

    render(){
        return(
            <div className={style.wrapper}>
                <div ref="progress" className={style.progress}/>
                <Link to="section">
                    <div style={{zIndex: 9999}}>
                        <div className={style.icon}></div>
                        <div className={style.titleArea}>
                            <span className={style.point}>{this.props.capacity}/{this.props.point}</span>
                            <span className={style.title}>{this.props.title}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    getProgressPercent(){
        const {capacity, point} = this.props;

        return (point / capacity);
    }
}

SectionEntry.defaultProps = {
    capacity: 6,
    point: 2,
    title: 'بدون نام'
};