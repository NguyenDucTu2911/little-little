import React, { useRef, useEffect } from 'react';
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
import { PayCustomer } from '../../../../Store/slice/paySlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import Loading from '../../../Loading/Loading';
import html2canvas from 'html2canvas';
import emailjs from '@emailjs/browser';

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
    const loading = useAppSelector((state: RootState) => state.pay.loading);

    const divRef = useRef(null);
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (Ticker.map((a) => Number(a.quantity) === 0)) {
    //         navigate('/')
    //     }
    // }, [])

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    const sendEmail = () => {
        // e.preventDefault();
        if (divRef.current) {
            emailjs.sendForm('service_n4895xg', 'template_tn80jia', divRef.current, 'o3Cbjm-DMJh0v7Vee')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }

    };

    const handleDownloadClick = () => {
        if (divRef.current) {
            html2canvas(divRef.current).then((canvas) => {
                const link = document.createElement('a');
                link.download = 've.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        }
    };

    return (
        <>
            <Backgrounds>

                <Layout>
                    <header><p className='PayTicker'>Thanh toán thành công</p></header>
                    
                        {loading === true ? <Loading /> : <LazyLoad>
                            <Slider {...settings}>
                                {Ticker && Ticker.map((Item: PayCustomer, index) => {

                                    return (
                                        <div ref={divRef} className="customize">
                                            <div className='event-item'
                                                key={index}
                                            >
                                                <div className="qr">

                                                    <QRCode
                                                        value={`<p>${Item.Name}</p>
                                            <div>số lượng vé: ${Item.quantity}</div>
                                            <div>ngày Sử dụng: ${Item.date}</div>
                                            `}
                                                    />
                                                </div>
                                                <div className="TickerID">ALT2021050{index + 1}</div>
                                                <div className="titleTicker">VÉ CỔNG</div>
                                                <div className="dateTicker">Ngày sử dụng: {`${Item.date}`}</div>
                                                <div className="iconTicker" style={{ backgroundImage: `url(${Tick})` }}></div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </Slider>
                        </LazyLoad>}


                        <Button className="btnDown checkText"
                            onClick={handleDownloadClick}
                        >Tải vé</Button>
                        <Button className="sendEmailBTN checkText"
                            type="submit"
                        >Gửi Email</Button>
                </Layout>

            </Backgrounds>
        </>
    );
};

export default PayTicker;
