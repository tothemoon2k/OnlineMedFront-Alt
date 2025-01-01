import React from 'react';
import { Widget } from '@typeform/embed-react';
import SaleBanner from '../../components/SaleBanner';

const Work = () => {
    const isTest = window.location.href.includes('banner');

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            {isTest && <SaleBanner />}
            {isTest && <Widget id="GlPNq4e7" style={{ width: '100%', height: '100%' }} className="my-form" />}
            {!isTest && <Widget id="RW2PAcY5" style={{ width: '100%', height: '100%' }} className="my-form" />}
        </div>
    );
};

export default Work;