import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Bg from "../../../../assets/img/bg.png";
import "./check.css";
import vector from "../../../../assets/img/Vector.png";
import votay from "../../../../assets/img/Votay.png";
import { Input } from '../../../../Html/Input';
import { Button } from '../../../../Html/Button';
import { PayCustomer } from '../../../../Store/slice/paySlice';
import useSessionStorage from '../../../customHook/useSessionStorage';
import formatVND from '../../../format/formatVND';
import { addPay } from '../../../../Store/slice/paySlice';
import { useAppDispatch } from '../../../../Store/hooks';
import { useNavigate } from 'react-router-dom';

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


const Check: React.FC = () => {
    const [formData, setFormData] = useSessionStorage<Partial<PayCustomer>>("pay", {});
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        checkPrice()
    }, [])

    const checkPrice = () => {
        if (formData && formData.package) {
            let price;
            let quantity = formData.quantity
            if (formData.package === "GD") {
                price = quantity ? quantity * 50000 : 0
            }
            if (formData.package === "VIP") {
                price = quantity ? quantity * 10000 : 0
            }
            if (formData.package === "CUPER") {
                price = quantity ? quantity * 25000 : 0
            }
            if (price) {
                const pricevnd = formatVND(price)
                // const priceNB = parseInt(pricevnd.replace(/[^0-9]/g, ""));
                // console.log("ádasda", priceNB)
                return setFormData({ ...formData, price: pricevnd })

            }
        }
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addPay(formData as PayCustomer))
        navigate('/Ticker');
        setFormData({})
    }

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
                                        <label className='CheckText' htmlFor="date">Ngày Sử Dụng</label>
                                        <Input className='dateCheck-IP text' type="text" name='date' id='date'
                                            handleChange={handleInputChange}
                                            value={formData.date}
                                        />

                                    </div>
                                    <div className="quantityCheck">
                                        <label className='CheckText' htmlFor="quantity">Số lượng vé</label>
                                        <div className="group-Quantity">
                                            <Input className='quantityCheck-IP text' type="text" name='quantity' id='quantity'
                                                handleChange={handleInputChange}
                                                value={formData.quantity}
                                            />
                                            <p className='quantity-ve'>Vé</p>
                                        </div>

                                    </div>
                                    <div className="monneyCheck">
                                        <label className='CheckText' htmlFor="Monney">Số Tiền Thanh Toán</label>
                                        <Input className='monneyCheck-IP text' type="text" name='Monney' id='Monney'
                                            handleChange={handleInputChange}
                                            value={formData.price} />
                                    </div>
                                    <div className="NameCheck">
                                        <label className='CheckText' htmlFor="Name">Thông Tin Liên Hệ</label>
                                        <Input className='NameCheck-IP text' type="text" name='Name' id='Name'
                                            handleChange={handleInputChange}
                                            value={formData.Name} />
                                    </div>
                                    <div className="phoneCheck">
                                        <label className='CheckText' htmlFor="phone">Điện Thoại</label>
                                        <Input className='phoneCheck-IP text' type="tel" name='phone' id='phone'
                                            handleChange={handleInputChange}
                                            value={formData.phone} />
                                    </div>
                                    <div className="emailCheck">
                                        <label className='CheckText' htmlFor="email">Email</label>
                                        <Input className='emailCheck-IP text' type="email" name='email' id='email'
                                            handleChange={handleInputChange}
                                            value={formData.email}
                                        />
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
                                    <div className="titleCheckLayout titleR">
                                        <div className="CheckLayoutR">
                                            <div className="checkBorderR">
                                                <p className='titleCheckText'>THÔNG TIN THANH TOÁN</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bank">
                                        <form onSubmit={handleSubmit}>
                                            <div className="card">
                                                <label className='CheckText' htmlFor="card">Số thẻ</label>
                                                <Input type='number' className='inputCard text' name='card' id='card'
                                                    placeholder='Số Thẻ'
                                                    handleChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="Namecard">
                                                <label className='CheckText' htmlFor="Namecard">Họ tên chủ thẻ</label>
                                                <Input type='text' className='inputCard text' name='Namecard' id='Namecard'
                                                    placeholder='Họ tên chủ thẻ'
                                                    handleChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="Datecard">
                                                <label className='CheckText' htmlFor="Datecard">Ngày hết hạn</label>
                                                <Input type='date' className='inputCard text' name='Datecard' id='Datecard'
                                                    placeholder='Ngày hết hạn'
                                                    handleChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="cvvcard ">
                                                <label className='CheckText' htmlFor="cvv">CVV/CVC</label>
                                                <Input type='number' className='inputCvv text' name='cvv' id='cvv'
                                                    placeholder='CVV/CVC'
                                                    handleChange={handleInputChange}
                                                />
                                            </div>
                                            <Button type="submit" className="cardBtn">Thanh toán</Button>
                                        </form>
                                    </div>
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
