import React from 'react';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

interface LoadingProps {
    active?: boolean | undefined
    children: string,
    spinner: Element,
}

const Loading: React.FC<LoadingProps> = ({ active, children }) => {
    return (
        <>
            {/* <LoadingOverlay
            active={active}
            spinner={<BounceLoader />}
        >
            {children}
        </LoadingOverlay> */}
        </>

    );
};

export default Loading;
