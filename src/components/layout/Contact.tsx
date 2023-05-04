import React from 'react';
import styled from '@emotion/styled'
import Bg from "../../img/bg.png"
import alax from "../../img/Alex_AR.png"
import "../css/Contact.css"
import FormContact from './form/formContact';
import phone from "../../img/telephone.png"
import email from "../../img/gmail.png"
import address from "../../img/maps.png"

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

const Phone = styled.div`
    position: absolute;
    width: 39px;
    height: 42px;
    left: 26px;
    top: 42px;
    background: url(${phone});
    background-repeat: round;
    background-position: center;

`

const Email = styled.div`
    position: absolute;
    width: 39px;
    height: 42px;
    left: 26px;
    top: 42px;
    background: url(${email});
    background-repeat: round;
    background-position: center;

`

const Address = styled.div`
    position: absolute;
    width: 39px;
    height: 42px;
    left: 26px;
    top: 42px;
    background: url(${address});
    background-repeat: round;
    background-position: center;

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
                            <FormContact />
                        </div>
                    </div>
                </div>
                <div className="contactRights">
                    <div className="contactBorder">
                        <div className="contactItem">
                            <Address />
                            <p className='contentright'>Địa chỉ:<br />
                                86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contactMid">
                    <div className="contactBorder">
                        <div className="contactItem">
                            <Email />
                            <p className='contentright'>Email:<br />
                                investigate@your-site.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contactbutton">
                    <div className="contactBorder">
                        <div className="contactItem">
                            <Phone />
                            <p className='contentright'>Điện thoại:<br />
                                +84 145 689 798
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </Backgrounds>
    );
};

