import React, { useEffect, useState } from 'react';
import { connect, styled } from "frontity";
import AdSense from 'react-adsense';

const GoogleAds = ({ actions, slot, width, height }) => {
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
        setAdblockerActive(false);
    }

    return (
        <>
            {adblockerActive ?
                <Adblock>
                    <h2>Please Deactive Adblocker Tool</h2>
                </Adblock>
                : ""}
            <AdSense.Google
                client='ca-pub-5442643109134129'
                slot={slot}
                style={{ width: width, height: height, float: 'left' , display:"inline-block" }}
                format=''
            />
            {/* <AdSense.Google
                client='ca-pub-5442643109134129'
                slot='5764423148'
                style={{ width: 500, height: 300, float: 'left' }}
                format=''
            /> */}
{/*             
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-5442643109134129"
     data-ad-slot="6445886756"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */}

        </>
    );
};

export default connect(GoogleAds);

const Adblock = styled.adblock`
h2 {
    width: 1888px;
    position: fixed;
    top: -59px;
    left: 0px;
    right: 0px;
    background: #747070b5;
    height: 100vh;
    text-align: center;
    padding-top: 20%;
    color: #fff;
    z-index: 999999999;
  }

`;
