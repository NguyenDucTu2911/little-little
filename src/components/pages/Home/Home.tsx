import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import lisa from "../../../assets/img/Lisa.png"
import Converted from "../../../assets/img/6.png"
import damsen from "../../../assets/img/logodamsen.png"
import hair from "../../../assets/img/hair.png"
import Mid from "../../../assets/img/3.png"
import Mid1 from "../../../assets/img/1.png"
import Right from "../../../assets/img/5.png"
import Buttons from "../../../assets/img/4.png"
import Bg from "../../../assets/img/bg.png"
import { Header } from '../../layout/header';
import start from "../../../assets/img/Start.png"
import vector from "../../../assets/img/Vector.png"
import { Input } from '../../../Html/Input';
import { Button } from '../../../Html/Button';
import "./Home.css"
import { useForm, SubmitHandler } from "react-hook-form";
import DatePicker from '../../../Html/DatePickers';
import { z, ZodType } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

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

const IconLisa = styled.image`
    position: absolute;
    width: 323px;
    height: 510px;
    left: -205px;
    top: 131px;
    background: url(${lisa});
`

const Iconleft = styled.image`
    position: absolute;
    width: 147.37px;
    height: 210px;
    left: -17px;
    top: 276px;
    background: url(${Converted})
`
const IconDamsen = styled.image`
    position: absolute;
    left: 10.42%;
    right: 79.60%;
    top: 14.22%;
    bottom: 71.20%;

background: url(${damsen});
`

const DamSen = styled.h1`
    position: absolute;
    width: 322px;
    height: 100px;
    left: 397px;
    top: 76px;
    font-family: 'iCiel Koni';
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 100px;
    color: #FFFFFF;
`

const Together = styled.image`
    position: absolute;
    width: 788px;
    height: 443px;
    left: 1052px;
    top: 12px;

    background: url(${hair});
`
const ImgMid = styled.image`
    position: absolute;
    left: 42.03%;
    right: 50%;
    top: 16.58%;
    bottom: 64.86%;
    background: url(${Mid});
`

const ImgMid1 = styled.image`
    position: absolute;
    left: 53.59%;
    right: 39.90%;
    top: 4.61%;
    bottom: 77.63%;
background: url(${Mid1});
`
const ImgRight = styled.image`
    position: absolute;
    left: 94.67%;
    right: -2.98%;
    top: 34.15%;
    bottom: 37.22%;
    background: url(${Right});
`

const ImgRightButton = styled.image`
    osition: absolute;
    left: 88.18%;
    right: 4.18%;
    top: 74.82%;
    bottom: 5.71%;

    background: url(${Mid});
`

const ImgButtonR = styled.image`
    position: absolute;
    left: 89.18%;
    right: 3.18%;
    top: 74.82%;
    bottom: 4.71%;
background: url(${Mid});
`

const ImgButton = styled.image`
    position: absolute;
    left: 32.81%;
    right: 61.46%;
    top: 89.78%;
    bottom: -4%;
    background: url(${Buttons});
`

const Park = styled.h1`
    position: absolute;
    width: 197px;
    height: 100px;
    left: 402px;
    top: 153px;
    font-family: 'iCiel Koni';
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 100px;
    color: #FFFFFF;
}
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

const Content = styled.p`
    position: absolute;
    left: 4.47%;
    right: 2.92%;
    top: 2%;
    bottom: 67%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #23221F;
    opacity: 0.7;

`

const ContentButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    position: absolute;
    width: 748px;
    height: 40px;
    left: 127px;
    top: 239px;
`
const ContentButtonItem = styled.div`
width: 703px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #23221F;
    opacity: 0.8;
    flex: none;
    order: 1;
    flex-grow: 0;
    padding-left: 44px;
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

const ContactHeader = styled.div`
    position: absolute;
    left: 17.18%;
    right: 18.03%;
    top: -6.33%;
    bottom: 91.41%;
    background: linear-gradient(176.02deg, #FF000A -12.67%, #C2000B 101.08%);
    border-radius: 10px 10px 50% 50%;
`
const ContactHeaderItem = styled.div`
    position: absolute;
    left: 1.18%;
    right: 2.03%;
    top: 8.67%;
    bottom: 11.41%;
    border: 1px dashed #FFFFFF;
    border-radius: 10px 10px 50% 50%;
`
const ContactHeaderContent = styled.p`
    position: absolute;
    left: 24.36%;
    right: 20.04%;
    top: -33.57%;
    bottom: 63.86%;
    font-family: 'iCiel Koni';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 41px;
    color: #FFFFFF;
`

const Inputname = styled.input`
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px 16px;
    gap: 260px;
    position: absolute;
    width: 372px;
    height: 10px;
    left: 15px;
    top: 205px;
    background: #FFFFFF;
    box-shadow: inset -1px 3px 3px rgba(179, 91, 11, 0.5);
    border-radius: 16px;
`
const InputEmail = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 16px;
    gap: 260px;
    position: absolute;
    width: 373px;
    height: 10px;
    left: 15px;
    top: 380px;
    background: #FFFFFF;
    box-shadow: inset -1px 3px 3px rgba(179, 91, 11, 0.5);
    border-radius: 16px;
`

const InputSdt = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 16px;
    gap: 260px;
    position: absolute;
    width: 372px;
    height: 10px;
    left: 12px;
    top: 290px;
    background: #FFFFFF;
    box-shadow: inset -1px 3px 3px rgba(179, 91, 11, 0.5);
    border-radius: 16px;
`

const InputQuantity = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 16px;
    gap: 260px;

    position: absolute;
    width: 150px;
    height: 17px;
    left: 18px;
    top: 127px;

    /* W */

    background: #FFFFFF;
    /* inner shadow */

    box-shadow: inset -1px 3px 3px rgba(179, 91, 11, 0.5);
    border-radius: 16px;
`

const Combobox = styled.select`
    position: absolute;
    width: 398px;
    height: 49px;
    left: 14px;
    top: 56px;
    background: #FFFFFF;
    box-shadow: inset -1px 3px 3px rgba(179, 91, 11, 0.5);
    border-radius: 16px;
`

type FormValues = {
    Name: string;
    Phone: number;
    email: string;
    quantity: number;
    // Date: Date;
};

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export const Home = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const schema: ZodType<FormValues> = z
        .object({
            Name: z.string().min(2).max(30),
            email: z.string().email(),
            quantity: z.number(),
            Phone: z.number().min(10),
            // Date: z.date().default(() => new Date())
        })
    // .refine()

    const { register, handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({ resolver: zodResolver(schema) })

    const onSubmit = (data: FormValues) => console.log(data);
    return (
        <>
            <Backgrounds>
                {/* <Header /> */}
                <Layout>
                    <DamSen>Đầm Sen</DamSen>
                    <Park>PARK</Park>
                    <IconDamsen />
                    <Iconleft />
                    <Together />
                    <ImgMid />
                    <ImgMid1 />
                    <ImgRight />
                    <ImgButton />
                    <ImgButtonR />
                    <ImgRightButton />
                    <Decoration>
                        <DecorationBody>
                            <DecorationBoder>
                                <Content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.<br /><br />
                                    Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.
                                </Content>
                                <ContentButton>
                                    <ContentButtonItem>

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                                    </ContentButtonItem>
                                </ContentButton>
                            </DecorationBoder>
                            <Margin />
                        </DecorationBody>
                        <IconLisa />
                    </Decoration>
                    <Contact>
                        <ContactLayOut>
                            <ContactLayOutLine>
                                <ContactLayOutBoder>
                                    <ContactHeader>
                                        <ContactHeaderItem>
                                            <ContactHeaderContent>
                                                Vé Của Bạn
                                            </ContactHeaderContent>
                                        </ContactHeaderItem>
                                    </ContactHeader>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* <Select
                                            className='combobox'
                                            defaultValue={selectedOption}
                                            // onChange={setSelectedOption}
                                            options={options}
                                        /> */}
                                        <Combobox name='pack' >
                                            <option value="volvo">Gói Gia Đình</option>
                                            <option value="saab">Gói Vip</option>
                                            <option value="mercedes">Gói Cặp đôi</option>
                                        </Combobox>
                                        <div className='quanyity'>
                                            <InputQuantity {...register("quantity", { valueAsNumber: true })} placeholder='Số Lượng Vé' />
                                            {/* {errors.Name && <span>vui long nhap so luong ve</span>} */}

                                        </div>
                                        <DatePicker className='Datepicker' onChange={(time) => console.log(time)} />
                                        <Inputname {...register("Name")} placeholder="Họ Và Tên" />
                                        <InputSdt {...register("Phone", { valueAsNumber: true })} placeholder="Số Điện Thoại" />
                                        <InputEmail placeholder="Địa Chỉ Email" type="email" {...register("email")} />
                                        {/* <CustomButton
                                            className="btnBuy"
                                            type="submit"
                                            onclick={() => handleBuy()}
                                            children="Đặt Vé"
                                        /> */}
                                        <Button type="submit" className="btnBuy">Đặt Vé</Button>
                                    </form>
                                </ContactLayOutBoder>
                            </ContactLayOutLine>
                        </ContactLayOut>
                    </Contact>
                </Layout>

            </Backgrounds>
        </>

    );
};

