import React, {useEffect,useState} from 'react';
import {connect, styled} from "frontity";
import AdSense from 'react-adsense';

const GoogleAds = ({actions}) => {
    const [adblockerActive, setAdblockerActive] = useState(false);

    useEffect(() => {
        actions.source.fetch("/");
        const script = document.createElement("script");
    
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.onerror = (err) => err.type == "error" ? adBlockFunction() : "";
    
        document.body.appendChild(script);
      }, [actions.source]);
      const adBlockFunction = () => {
        // Google Analytics End
        setAdblockerActive(true);
      }

    return (
        <>
        {adblockerActive ? 
        <h2>Please Deactive Adblocker Tool</h2>
    :
       <AdSense.Google
              client='ca-pub-5442643109134129'
              slot='5764423148'
              style={{ width: 500, height: 300, float: 'left' }}
              format=''
            />}
            </>
    );
};

export default connect(GoogleAds);

