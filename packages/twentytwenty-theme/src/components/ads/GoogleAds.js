import React, {useEffect} from 'react';
import {connect, styled} from "frontity";

const GoogleAds = ({}) => {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    })

    return (
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-pub-5442643109134129"
             data-ad-slot="5764423148"
             data-ad-format="auto"
             data-full-width-responsive="true"/>
    );
};

export default connect(GoogleAds);
