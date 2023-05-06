import React, { useEffect } from 'react';
import "./detailEvent.css"
import { fetchOne } from '../../../Store/slice/eventSlice';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../Store/store';
import styled from '@emotion/styled'
import Bg from "../../../img/bg.png"
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

const DetailEvent: React.FC<DetailEventProps> = (props) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const data = useAppSelector((state: RootState) => state.events.data);
    console.log(data)

    useEffect(() => {
        dispatch(fetchOne(`${id}`))
    }, [dispatch, id])


    return (
        <>
            <Backgrounds>
                <Layout>
                    
                </Layout>
            </Backgrounds>
        </>
    );
};

export default DetailEvent;
