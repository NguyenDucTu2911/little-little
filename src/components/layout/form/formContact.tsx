import React, { useEffect } from 'react';
import { Input } from '../../../Html/Input';
import "./formContact.css"
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodType } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '../../../Html/Button';

import { useAppDispatch, useAppSelector } from '../../../Store/hooks';

import { ref, child, get } from "firebase/database";
import { db } from '../../../firebase/config';


import { fetchTodos, addTodo } from '../../../Store/slice/userSlice';

interface FormContactProps { }

type FormValues = {
    Name: string;
    Phone: number;
    email: string;
    address: string;
    message: string;
};

const FormContact: React.FC<FormContactProps> = (props) => {
    const dispatch = useAppDispatch();

    const dbRef = ref(db);

    // get(child(dbRef, `users/1`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         const response = snapshot.val()
    //         console.log(response)
    //         return response
    //     } else {
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });

    const schema: ZodType<FormValues> = z
        .object({
            Name: z.string().min(2).max(30),
            email: z.string().email(),
            address: z.string(),
            Phone: z.number().min(10),
            message: z.string()
        })


    const { register, handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({ resolver: zodResolver(schema) })

    const onSubmit = (data: FormValues) => {
        console.log(data.Name)
        const name = data.Name;
        const Phone = data.Phone;
        const email = data.email;
        const address = data.address;
        const message = data.message
        // dispatch(addTodo({ name, Phone, email,address,message }));
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="ContacContent">
                    <div className="contactLeft">
                        <input className='Name' type='text' placeholder='Tên'
                            {...register("Name")} />
                        <input className='Phone' type='number' placeholder='Số Điện Thoại'
                            {...register("Phone", { valueAsNumber: true })}
                        />
                    </div>
                    <div className="contactRight">
                        <input className='email' type='email' placeholder='Email'
                            {...register("email")} />
                        <input className='address' placeholder='Địa Chỉ'
                            {...register("address")} />
                    </div>
                    <input className="message" placeholder='Lời Nhắn'
                        {...register("message")} />
                    <Button type="submit" className="btncontact">Gửi Liên Hệ</Button>
                </div>
            </form>
        </>
    );
};

export default FormContact;
