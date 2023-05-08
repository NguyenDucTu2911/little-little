import React, { useEffect, useState } from 'react';
import { Input } from '../../../Html/Input';
import "./formContact.css"
import { Button } from '../../../Html/Button';

import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { RootState } from '../../../Store/store';
import { createAsync, Contact } from '../../../Store/slice/userSlice';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../Toast/Toast';
import { compose } from 'redux';
const FormContact: React.FC = () => {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState<Partial<Contact>>({});
    const loading = useSelector((state: RootState) => state.users.loading);
    const error = useSelector((state: RootState) => state.users.error);
    const [showAlert, setShowAlert] = useState(false);

    // onchange form
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // submit form 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(createAsync(formData as Contact));
        setFormData({});
        setShowAlert(true);
    };
    const handleClose = () => {
        setShowAlert(false);
    };

    return (
        <>
            {
                showAlert && (
                    <Toast onClose={handleClose} type='success' message={'Gửi liên hệ thành công.Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!'} />
                )
            }
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="ContacContent">
                    <div className="contactLeft">
                        <input className='Name' type='text' placeholder='Tên' name='Name'
                            value={formData.Name || ""}
                            // {...register("Name")} 
                            onChange={handleInputChange}
                        />
                        <input className='Phone' type='number' placeholder='Số Điện Thoại' name='Phone'
                            // {...register("Phone", { valueAsNumber: true })}
                            value={formData.Phone || ""}
                            onChange={handleInputChange}

                        />
                    </div>
                    <div className="contactRight">
                        <input className='email' type='email' placeholder='Email' name='email'
                            // {...register("email")}
                            value={formData.email || ""}
                            onChange={handleInputChange}
                        />

                        <input className='address' placeholder='Địa Chỉ' name='address'
                            // {...register("address")}
                            value={formData.address || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input className="message" placeholder='Lời Nhắn' name='message'
                        // {...register("message")}
                        value={formData.message || ""}
                        onChange={handleInputChange}
                    />
                    <Button type="submit" className="btncontact">Gửi Liên Hệ</Button>
                </div>
            </form>
        </>
    );
};

export default FormContact;
