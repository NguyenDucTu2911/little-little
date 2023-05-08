import React from 'react';
import { FormValues } from '../../pages/Home/Home';
import styled from '@emotion/styled'
import Bg from "../../../assets/img/bg.png"
import "./check.css"
import vector from "../../../assets/img/Vector.png"
import votay from "../../../assets/img/Votay.png"

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

const Decoration = styled.div`
    position: absolute;
    left: 9%;
    right: 35.5%;
    top: 34.61%;
    bottom: 8%;
    background: #FFCA7B;
    border-radius: 45px;
`
const DecorationBody = styled.div`
    position: absolute;
    left: 0%;
    right: 0.5%;
    top: 0%;
    bottom: -3.39%;
    border-radius: 42px;
    background: #FDE8B3;
`


const DecorationBoder = styled.div`
    position: absolute;
    left: 0.8%;
    right: 1.3%;
    border-radius: 25px;
    top: 2.09%;
    bottom: 4.7%;
    background: #FFF6D4;
    border: 3px dashed #FFB489;
`

const Margin = styled.image`
    position: absolute;
    left: 95.67%;
    right: -9.95%;
    top: 0%;
    bottom: 1.7%;
    background: url(${vector});

`

const Contact = styled.div`
    position: absolute;
    left: 64.47%;
    right: 0.07%;
    top: 35.04%;
    bottom: 6%;
`
const ContactLayOut = styled.div`
    position: absolute;
    left: 4.47%;
    right: 23.07%;
    top: -0.35%;
    bottom: 0%;
    background: #FFCA7B;
    border-radius: 52px;
`

const ContactLayOutLine = styled.div`
    position: absolute;
    left: -1.53%;
    right: 1.07%;
    top: 0.04%;
    bottom: 0.61%;
    background: #FDE8B3;
    border-radius: 48px;
`

const ContactLayOutBoder = styled.div`
    position: absolute;
    left: 3.36%;
    right: 1.95%;
    top: 2.13%;
    bottom: 3.7%;
    background: #FFF6D4;
    border: 3px dashed #FFB489;
    border-radius: 26px;
    `

const Votay = styled.image`
    position: absolute;
    width: 309.74px;
    height: 500px;
    left: -6px;
    top: 440px;
    object-fit: contain;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${votay});

`

const Check: React.FC = (props) => {
    console.log(props)
    return (
        <>
            <Backgrounds>

                <Layout>
                    <div className="titleCheck">Thanh toán</div>
                    <Decoration>
                        <DecorationBody>
                            <DecorationBoder>
                                <div className="titleCheckLayout titleL">
                                    <div className="titleCheckmaginL">
                                        <div className="titleCheckBorderL">
                                            <p className='titleCheckText'>VÉ CỔNG - VÉ GIA ĐÌNH</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="">
                                    <div className="dateCheck">
                                        <label htmlFor="date">Ngày Sử Dụng</label>
                                        <input type="text" name='date' id='date' />
                                    </div>
                                    <div className="quantityCheck">
                                        <label htmlFor="quantity">Số Tiền Thanh Toán</label>
                                        <input type="text" name='quantity' id='quantity' />vé
                                    </div>
                                    <div className="monneyCheck">
                                        <label htmlFor="Monney">Số Tiền Thanh Toán</label>
                                        <input type="text" name='Monney' id='Monney' />
                                    </div>
                                    <div className="NameCheck">
                                        <label htmlFor="Name">Thông Tin Liên Hệ</label>
                                        <input type="text" name='Name' id='Name' />
                                    </div>
                                    <div className="phoneCheck">
                                        <label htmlFor="phone">Điện Thoại</label>
                                        <input type="number" name='phone' id='phone' />
                                    </div>
                                    <div className="emailCheck">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' id='email' />
                                    </div>
                                </form>
                            </DecorationBoder>
                            <Margin />
                        </DecorationBody>
                    </Decoration >
                    <Votay />

                    <Contact>
                        <ContactLayOut>
                            <ContactLayOutLine>
                                <ContactLayOutBoder>
                                    <div className="titleCheckLayout titleR"></div>

                                </ContactLayOutBoder>
                            </ContactLayOutLine>
                        </ContactLayOut>
                    </Contact>
                </Layout>

            </Backgrounds>
        </>
    );
};

export default Check;
