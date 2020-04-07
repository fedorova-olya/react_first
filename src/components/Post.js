import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                < User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pr7N6o9gjOAwbg9vw3D2f8OypvYvKPos5K1dkv3Jw_KBObFp&usqp=CAU"
                    alt="girl"
                    name="Sheila"
                    min />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ea illum voluptate cum eum iusto aut doloremque delectus, eos natus, excepturi, reiciendis ipsam repudiandae? Minima animi optio pariatur necessitatibus mollitia. Voluptatibus fugit dicta illo impedit?
                </div>
            </div>
        )
    }
}