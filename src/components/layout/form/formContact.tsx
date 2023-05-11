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
    const [formErrors, setFormErrors] = useState<Partial<Contact>>({});

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
        const errors: Partial<Contact> = {};
        // Name validation
        if (!formData.Name) {
            errors.Name = 'Name is required';
        }
        // Phone validation
        if (!formData.Phone) {
            errors.Phone = 'Phone is required';
        } else if (!/^\d{10}$/i.test(formData.Phone.trim())) {
            errors.Phone = 'Phone number must be 10 digits';
        }

        // Email validation
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
            errors.email = 'Email is invalid';
        }
        if (!formData.address) {
            errors.address = ('Address is required');
        }

        // Set errors, if any
        setFormErrors(errors);

        // Submit form if no errors
        if (!errors.Name && !errors.Phone && !errors.email && !errors.address) {
            dispatch(createAsync(formData as Contact));
            setFormData({});
            setShowAlert(true);
        }

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
                        <input className='Name text' type='text' placeholder='Tên' name='Name'
                            value={formData.Name || ""}
                            // {...register("Name")} 
                            onChange={handleInputChange}
                        />
                        {formErrors.Name && <span className='ValidateName'>{formErrors.Name}</span>}
                        <input className='Phone text' type='number' placeholder='Số Điện Thoại' name='Phone'
                            // {...register("Phone", { valueAsNumber: true })}
                            value={formData.Phone || ""}
                            onChange={handleInputChange}
                        />
                        {formErrors.Phone && <span className='ValidatePhone'>{formErrors.Phone}</span>}
                    </div>
                    <div className="contactRight">
                        <input className='email text' type='email' placeholder='Email' name='email'
                            // {...register("email")}
                            value={formData.email || ""}
                            onChange={handleInputChange}
                        />
                        {formErrors.email && <span className='Validateemail'>{formErrors.email}</span>}

                        <input className='address text' placeholder='Địa Chỉ' name='address'
                            // {...register("address")}
                            value={formData.address || ""}
                            onChange={handleInputChange}
                        />
                        {formErrors.address && <span className='Validateaddress'>{formErrors.address}</span>}

                    </div>
                    <input className="message text" placeholder='Lời Nhắn' name='message'
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
