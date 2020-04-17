import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
    return (
        <div className="container profile">
            < User
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pr7N6o9gjOAwbg9vw3D2f8OypvYvKPos5K1dkv3Jw_KBObFp&usqp=CAU"
                alt="girl"
                name="Sheila" />
            < Palette / >
        </div>
    )
};

export default Profile;