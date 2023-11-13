import React from 'react';
import Link from 'next/link';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Custom404 = () => {
    return (
        <>
            <div style={{
                height: '100vh',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000',
                color: '#fff'
            }}>

                <div style={{display: "flex" , justifyContent: 'center', marginBottom:'10px'}}>
                    <h1 className="next-error-h1 next-text" style={{justifySelf: 'center'}}>
                        404
                    </h1>
                    <div className="next-error-pipe"/>
                    <p className="next-error-text next-text">This page could not be found.</p>
                </div>

                <Link href="/sitemap">
                    <span className={'next-text'}
                        style={{color: '#0099ff', textDecoration: 'none', cursor: 'pointer'}}>Go to the sitemap</span>
                    <FontAwesomeIcon icon={faArrowRight} style={{color: "#0099ff",}}/>
                </Link>
            </div>
        </>

    );
};

export default Custom404;
