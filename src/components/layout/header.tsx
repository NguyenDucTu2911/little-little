import React from 'react';
import styled from '@emotion/styled'
import LittleLittleLogo from "../../img/Logo.png"
import {
    createBrowserRouter,
    createRoutesFromElements, Link, Route, RouterProvider, BrowserRouter
} from 'react-router-dom'
import Phone from "../../img/Vector (Stroke).png"
import { Home } from '../pages/Home/Home';
import { Contact } from '../pages/Contact/Contact';
import Event from '../pages/Event/Event';

const Navbar = styled("div")`
    position: absolute;
    width: 1920.5px;
    height: 107.82px;
    left: 0px;
    top: 0px;
    z-index: 1000;
    background: #ED7200;
    box-shadow: 0px 4px 35px rgba(162, 58, 0, 0.75);
    border-radius: 0 0 40% 40%;
`

const Logo = styled("div")`
    position: absolute;
    width: 229px;
    height: 91px;
    left: 201px;
    top: 1px;

    background: url(${LittleLittleLogo});
`

const Navbody = styled("div")`
    position: absolute;
    width: 890px;
    height: 42px;
    left: 703px;
    top: 29px;
`

const HeaderNav = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 80px;

    position: absolute;
    width: 541px;
    height: 42px;
    // left: 703px;
    // top: 29px;
`

const HeaderNavLink = styled(Link)`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 24px;
gap: 10px;

width: 144px;
height: 42px;

/* W */

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
text-decoration: none;
`
const Content = styled("span")`
width: 96px;
height: 22px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
/* identical to box height */


/* W */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
text-align: center;
`

const HeaderNavRiggt = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;

position: absolute;
width: 137px;
height: 32px;
left: 1456px;
top: 34px;
`

const IconPhone = styled("div")`
width: 32px;
height: 32px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
    background: url(${Phone});

`


export const Header = () => {
    return (
        <Navbar>
            <Logo />
            <Navbody>
                <HeaderNav>
                    < HeaderNavLink to="/"
                    // className={({isActive})=>(isActive? "active" : "")}
                    ><Content>Trang chủ</Content></HeaderNavLink>
                    < HeaderNavLink to="/sukien"

                    ><Content> Sự Kiện</Content></HeaderNavLink>
                    < HeaderNavLink to="/LienHe"

                    ><Content> Liên Hệ</Content></HeaderNavLink>
                    <IconPhone />
                </HeaderNav>
            </Navbody>
        </Navbar>
    );
};
