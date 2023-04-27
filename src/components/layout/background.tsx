import React from 'react';
import { Header } from './header';
import styled from '@emotion/styled'
import Bg from "../../img/bg.png"
interface BackgroundProps {

}
const Backgrounds = styled("div")`
    position: relative;
    width: 1920px;
    height: 1080px;
    /* bg */
    background: radial-gradient(97.91% 60.14% at 50% 50%, #FFDB7E 0%, #FF7A00 100%);
    border-radius: 32px;

`
const Layout = styled("div")`
    position: absolute;
    width: 1815px;
    height: 997px;
    left: 45px;
    top: 35px;
    background: url(${Bg});

`

const DamSen = styled("h1")`
    position: absolute;
    width: 322px;
    height: 100px;
    left: 397px;
    top: 104px;

    font-family: 'iCiel Koni';
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 100px;
    /* identical to box height, or 139% */


    /* W */

    color: #FFFFFF;
`


const Background: React.FC<BackgroundProps> = (props) => {
    return (
        <Backgrounds>
            <Header />
            <Layout>

            </Layout>
        </Backgrounds>
    );
};

export default Background;
