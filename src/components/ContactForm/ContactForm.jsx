/* eslint-disable react/prop-types */
import css from './ContactForm.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { nanoid } from 'nanoid'
import * as Yup from "yup";

import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";


const contactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.number().required("Required")
});

export default function ContactForm () {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions)=> {
        values.id = nanoid();
        const {name, phone} = values;
        dispatch(addContact(name, phone));
        actions.resetForm();
    }

    return (<div>
        <Formik initialValues={{ name: "", phone: "" }} onSubmit={handleSubmit} validationSchema={contactFormSchema}>
            <Form className={css.form}>
                <div className={css.inputBox}>
                    <label htmlFor="username" className={css.label}>Name</label>
                    <Field type='text' name='name' id='username'className={css.nameInput}></Field>
                    <ErrorMessage name='name' component='span' className={css.error}/>
                </div>
                <div  className={css.inputBox}>
                    <label htmlFor="phone" className={css.label}>Phone number</label>
                    <Field type='tel' name='phone' id='phone' className={css.phoneInput}></Field>
                    <ErrorMessage name='phone' component='span' className={css.error}/>
                </div>
                
                <button type='submit' className={css.btnAdd}>Add contact</button>
            </Form>
        </Formik>
    </div>)
}