import React from 'react';
import comic from '../SiteImg/puddingcomic.png'

function Comic(props) {
    return (
        <>
        <div className="comic-bg">
            <img src={comic} alt="comic"/>
        </div> 
        </>
    );
}

export default Comic;