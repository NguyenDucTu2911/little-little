import React from 'react';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'
import { ColorRing } from 'react-loader-spinner';

interface LoadingProps {
    // active?: boolean | undefined
    // children: string,
    // spinner: Element,
}

const Loading: React.FC<LoadingProps> = () => {
    return (
        <>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
            />
        </>

    );
};

export default Loading;
