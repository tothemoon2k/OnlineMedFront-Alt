import React from 'react';
import { Helmet } from 'react-helmet';

const Heyflow = () => {
    return (
        <>
            <Helmet>
                <script src="https://assets.prd.heyflow.com/builder/widget/latest/webview.js"></script>
            </Helmet>
            <div className='w-[90%] mx-auto md:w-full'>
                <heyflow-wrapper flow-id="qxl0srE91gIKp1Yk4jCq" dynamic-height scroll-up-on-navigation style-config='{"width": "100%"}'></heyflow-wrapper>
            </div>
        </>
    );
};

export default Heyflow;