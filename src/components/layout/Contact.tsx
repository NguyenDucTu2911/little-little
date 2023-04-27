import React from 'react';
import styled from '@emotion/styled'
import Bg from "../../img/bg.png"
import alax from "../../img/Alex_AR.png"
import "../css/Contact.css"

interface ContactProps { }


const Backgrounds = styled.div`
    position: relative;
    width: 1920px;
    height: 1080px;
    /* bg */
    background: radial-gradient(97.91% 60.14% at 50% 50%, #FFDB7E 0%, #FF7A00 100%);
    border-radius: 32px;

`
const Layout = styled.div`
    position: absolute;
    width: 1815px;
    height: 997px;
    left: 45px;
    top: 35px;
    background: url(${Bg});

`

const Iconalax = styled.image`
    position: absolute;
    width: 329px;
    height: 594px;
    left: -295px;
    top: 33px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background: url(${alax});
`

const Content = styled.p`
    position: absolute;
    left: 4.47%;
    right: 4.47%;
    top: 3.90%;
    bottom: 80.83%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #23221F;
    opacity: 0.7;
`

const InputName = styled.input`
    width: 293px;
    height: 56px;
    background: #FFFFFF;
    box-shadow: inset -1px 3px 3px rgba(179, 91, 11, 0.5);
    border-radius: 16px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

const InputSDT = styled.input`
    width: 293px;
    height: 56px;
    background: #FFFFFF;
    box-shadow: inset -1px 3px 3px rgba(179, 91, 11, 0.5);
    border-radius: 16px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const Contact = () => {
    return (
        <Backgrounds>
            <Layout>
                <div className="title">Liên Hệ</div>
                <div className="ContacBody">
                    <div className="contactLayout">
                        <div className="ContactBorder">
                            <Iconalax />
                            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis. </Content>
                            <div className="ContacContent">
                                <InputName type='text' placeholder='Tên' id='name' />
                                <InputSDT type='number' placeholder='Số Điện Thoại' id='SDT' />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Backgrounds>
    );
};

