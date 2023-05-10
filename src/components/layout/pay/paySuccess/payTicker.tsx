import React from 'react';
import Bg from "../../../../assets/img/bg.png";
import styled from '@emotion/styled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./payTicker.css"
import QRCode from 'react-qr-code';
import Tick from "../../../../assets/img/tick.png"
import { Button } from '../../../../Html/Button';
import { sendEmail } from '../../../Plugins/sendEmail';
import { useAppSelector } from '../../../../Store/hooks';
import { RootState } from '../../../../Store/store';
import Item from 'antd/es/list/Item';
import { PayCustomer } from '../../../../Store/slice/paySlice';
interface PayTickerProps { }

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

const PayTicker: React.FC<PayTickerProps> = (props) => {

    const Ticker = useAppSelector((state: RootState) => state.pay.data);
    console.log("check", Ticker)

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const handleSendEmail = async () => {
        // try {
        //     await sendEmail({
        //         to: 'recipient@example.com',
        //         subject: 'Test Email',
        //         text: 'This is a test email sent from a TypeScript React app using Nodemailer.',
        //     });
        //     console.log('Email sent successfully!');
        // } catch (error) {
        //     console.error('Error sending email:', error);
        // }
    };

    return (
        <>
            <Backgrounds>

                <Layout>
                    <header><p className='PayTicker'>Thanh toán thành công</p></header>
                    <Slider {...settings}>
                        {Ticker && Ticker.map((Item: PayCustomer, index) => {
                            return (
                                <div className="customize">
                                    <div className='event-item'
                                        key={index}
                                    >
                                        <div className="qr">
                                            <QRCode value={`<p>${Item.Name}</p>
                                            <div>số lượng vé: ${Item.quantity}</div>
                                            <div>ngày Sử dụng: ${Item.date}</div>
                                            `} />
                                        </div>
                                        <div className="TickerID">ALT2021050{index + 1}</div>
                                        <div className="titleTicker">VÉ CỔNG</div>
                                        <div className="dateTicker">Ngày sử dụng: {`${Item.date}`}</div>
                                        <div className="iconTicker" style={{ backgroundImage: `url(${Tick})` }}></div>
                                    </div>
                                </div>

                            )
                        })}


                        {/* <div className="customize">
                            <div className='event-item'
                            // key={index}
                            >
                                <div className="qr">
                                    <QRCode value="https://www.example.com" />
                                </div>
                                <div className="TickerID">ALT20210501</div>
                                <div className="titleTicker">VÉ CỔNG</div>
                                <div className="dateTicker">Ngày sử dụng: 31/05/2021</div>
                                <div className="iconTicker" style={{ backgroundImage: `url(${Tick})` }}></div>
                            </div>
                        </div>

                        <div className="customize">
                            <div className='event-item'
                            // key={index}
                            >
                                <div className="qr">
                                    <QRCode value="https://www.example.com" />
                                </div>
                                <div className="TickerID">ALT20210501</div>
                                <div className="titleTicker">VÉ CỔNG</div>
                                <div className="dateTicker">Ngày sử dụng: 31/05/2021</div>
                                <div className="iconTicker" style={{ backgroundImage: `url(${Tick})` }}></div>
                            </div>
                        </div>

                        <div className="customize">
                            <div className='event-item'
                            // key={index}
                            >
                                <div className="qr">
                                    <QRCode value="https://www.example.com" />
                                </div>
                                <div className="TickerID">ALT20210501</div>
                                <div className="titleTicker">VÉ CỔNG</div>
                                <div className="dateTicker">Ngày sử dụng: 31/05/2021</div>
                                <div className="iconTicker" style={{ backgroundImage: `url(${Tick})` }}></div>
                            </div>
                        </div>

                        <div className="customize">
                            <div className='event-item'
                            // key={index}
                            >
                                <div className="qr">
                                    <QRCode value="https://www.example.com" />
                                </div>
                                <div className="TickerID">ALT20210501</div>
                                <div className="titleTicker">VÉ CỔNG</div>
                                <div className="dateTicker">Ngày sử dụng: 31/05/2021</div>
                                <div className="iconTicker" style={{ backgroundImage: `url(${Tick})` }}></div>
                            </div>
                        </div> */}
                    </Slider>

                    <Button className="btnDown checkText">Tải vé</Button>
                    <Button className="sendEmailBTN checkText"
                        onclick={handleSendEmail}
                    >Gửi Email</Button>
                </Layout>

            </Backgrounds>
        </>
    );
};

export default PayTicker;
