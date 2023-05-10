import React, { useEffect } from 'react';
import styled from '@emotion/styled'
import Bg from "../../../assets/img/bg.png"
import "./Event.css"
import Slider from "react-slick";
import calendar from "../../../assets/img/calendar.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';
import { events, fetchAsync } from '../../../Store/slice/eventSlice';
import FormatVND from '../../format/formatVND';
import FormatDate from '../../format/formatDate';
import { Button } from '../../../Html/Button';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Loading from '../../Loading/Loading';
interface EventProps { }

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
const Calendar = styled.image`
    width: 24px;
    height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
  background: url(${calendar});
`

const Event: React.FC<EventProps> = (props) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state: RootState) => state.events.data);
    const loading = useAppSelector((state: RootState) => state.events.loading);
    const error = useAppSelector((state: RootState) => state.events.error);
    console.log("check", loading)

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchAsync());
    }, [dispatch]);


    const handleEvent = (event: events) => {
        navigate(`/detailEvent/${event.id}`)
    }


    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <>
            <Backgrounds>
                <Layout>

                    <p className='titleEvent'>Sự kiện nổi bật</p>
                    {error && <p>{error}</p>}
                    {loading === true ? <Loading /> : <LazyLoad>
                        <Slider {...settings}>
                            {data.concat(data) && data.concat(data).length > 0 && data.concat(data).map((item, index) => {
                                let formatVND = FormatVND(item.price)
                                let DateEnd = FormatDate(item.dateEnd)
                                let DateStart = FormatDate(item.dateStart)

                                return (
                                    <div className="customize">
                                        <div className='event-item'
                                            key={index}
                                        >
                                            <div className="image" style={{ backgroundImage: `url(${item.image})` }} />

                                            <div className="events">
                                                <div className="event-content">
                                                    <div className="event_item">
                                                        <div className="event_title">
                                                            {item.name}
                                                        </div>
                                                        <div className="event_des">
                                                            {item.description}
                                                        </div>
                                                    </div>

                                                    <div className="event_date">
                                                        <Calendar />
                                                        {DateStart} - {DateEnd}
                                                    </div>
                                                </div>
                                                <div className="event-price">
                                                    {formatVND}
                                                </div>
                                                <Button className="button-detail"
                                                    onclick={() => handleEvent(item)}
                                                >
                                                    xem chi tiết
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </Slider>
                    </LazyLoad>}

                </Layout>
            </Backgrounds>
        </>
    );
};

export default Event;
