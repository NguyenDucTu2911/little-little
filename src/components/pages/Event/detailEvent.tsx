import React, { useEffect } from 'react';
import "./detailEvent.css"
import { fetchOne } from '../../../Store/slice/eventSlice';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../Store/store';
import styled from '@emotion/styled'
import Bg from "../../../assets/img/bg.png"
import calendar from "../../../assets/img/calendar.png"

import FormatVND from '../../format/formatVND';
import FormatDate from '../../format/formatDate';
interface DetailEventProps { }
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

const DetailEvent: React.FC<DetailEventProps> = (props) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const data = useAppSelector((state: RootState) => state.events.data);
    console.log("check", data)

    useEffect(() => {
        dispatch(fetchOne(`${id}`))
    }, [dispatch, id])

    return (
        <>
            <Backgrounds>
                <Layout>
                    {data && data.map((item, index) => {
                        let formatVND = FormatVND(item.price)
                        let DateEnd = FormatDate(item.dateEnd)
                        let DateStart = FormatDate(item.dateStart)
                        return (
                            <>
                                <div className="title" key={index}>{item.name}</div>
                                <div className="container">
                                    <div className="container-border">
                                        <div className="container-layoutEn">
                                            <div className="container-layout-bd">
                                                <div className="eventDt-l">
                                                    <div className="eventDt-image"
                                                        style={{ backgroundImage: `url(${item.image})` }}
                                                    />
                                                    <div className="eventDT">
                                                        <div className="eventDT-content">
                                                            <div className="eventDT_date">
                                                                <Calendar />
                                                                {DateStart} - {DateEnd}
                                                            </div>
                                                            <div className="eventDT_des">
                                                                {item.description}
                                                            </div>

                                                            <div className="eventDT-price">
                                                                {formatVND}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="eventDt-LM">
                                                    {item.content}
                                                </div>
                                                <div className="eventDt-RM"></div>
                                                <div className="eventDt-R"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </Layout>
            </Backgrounds>
        </>
    );
};

export default DetailEvent;
