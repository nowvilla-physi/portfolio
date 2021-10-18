import React from 'react';
import { useForm } from 'react-hook-form';
import { send, init } from 'emailjs-com';
import styles from '../styles/contact.module.scss';
import * as Strings from '../strings';
import { Head } from '../components';

type Post = {
    name: string;
    mail: string;
    tel: string;
    message: string;
};

const Contact: React.VFC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        formState,
        reset,
    } = useForm<Post>({ mode: 'onChange' });

    const sendMail = (post: Post) => {
        init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

        const templateParams = {
            from_name: post.name,
            from_mail: post.mail,
            from_tel: post.tel,
            message: post.message,
            reply_to: post.mail,
            to_name: Strings.CONTACT_TO_NAME,
        };

        send(serviceId, templateId, templateParams)
            .then(() => {
                showAlert('送信に成功しました。');
                reset();
            })
            .catch(() => {
                showAlert('送信に失敗しました。');
            });
    };

    const showAlert = (str: string) => {
        alert(str);
    };

    return (
        <form className={styles.contact} onSubmit={handleSubmit(sendMail)}>
            <Head
                title="Tomoki's Portfolio | Contact"
                url='https://portfolio-tomoki.vercel.app/contact'
            />
            <h2 className={styles.contact__title} />
            <dl className={styles['contact__form-group']}>
                <dt className={styles['contact__form-group--label']}>
                    <label htmlFor='name'>{Strings.CONTACT_NAME_LABEL}</label>
                    <p className={styles.contact__required}>
                        {Strings.CONTACT_REQUIRED_LABEL}
                    </p>
                </dt>
                <dd className={styles['contact__form-group--input']}>
                    <input
                        className={styles['contact__form-group--input-text']}
                        id='name'
                        type='text'
                        placeholder={Strings.CONTACT_NAME_PLACEHOLDER}
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <p className={styles['contact__form-group--error-msg']}>
                            {Strings.CONTACT_NAME_VALIDATION_MESSAGE}
                        </p>
                    )}
                </dd>
                <dt className={styles['contact__form-group--label']}>
                    <label htmlFor='mail'>{Strings.CONTACT_MAIL_LABEL}</label>
                    <p className={styles.contact__required}>
                        {Strings.CONTACT_REQUIRED_LABEL}
                    </p>
                </dt>
                <dd className={styles['contact__form-group--input']}>
                    <input
                        className={styles['contact__form-group--input-text']}
                        id='mail'
                        type='text'
                        placeholder={Strings.CONTACT_MAIL_PLACEHOLDER}
                        {...register('mail', {
                            required: true,
                            pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                    />
                    {errors.mail && (
                        <p className={styles['contact__form-group--error-msg']}>
                            {Strings.CONTACT_MAIL_VALIDATION_MESSAGE}
                        </p>
                    )}
                </dd>
                <dt className={styles['contact__form-group--label']}>
                    <label htmlFor='tel'>{Strings.CONTACT_TEL_LABEL}</label>
                    <p className={styles.contact__required}>
                        {Strings.CONTACT_REQUIRED_LABEL}
                    </p>
                </dt>
                <dd className={styles['contact__form-group--input']}>
                    <input
                        className={styles['contact__form-group--input-text']}
                        id='tel'
                        type='text'
                        placeholder={Strings.CONTACT_TEL_PLACEHOLDER}
                        {...register('tel', { required: true })}
                    />
                    {errors.tel && (
                        <p className={styles['contact__form-group--error-msg']}>
                            {Strings.CONTACT_TEL_VALIDATION_MESSAGE}
                        </p>
                    )}
                </dd>
                <dt className={styles['contact__form-group--label']}>
                    <label htmlFor='message'>
                        {Strings.CONTACT_MESSAGE_LABEL}
                    </label>
                    <p className={styles.contact__required}>
                        {Strings.CONTACT_REQUIRED_LABEL}
                    </p>
                </dt>
                <dd className={styles['contact__form-group--input']}>
                    <textarea
                        className={
                            styles['contact__form-group--input-textarea']
                        }
                        id='message'
                        rows={10}
                        placeholder={Strings.CONTACT_MESSAGE_PLACEHOLDER}
                        {...register('message', { required: true })}
                    />
                    {errors.message && (
                        <p className={styles['contact__form-group--error-msg']}>
                            {Strings.CONTACT_MESSAGE_VALIDATION_MESSAGE}
                        </p>
                    )}
                </dd>
            </dl>
            <input
                className={styles.contact__submit}
                type='submit'
                value={Strings.CONTACT_SEND_BUTTON}
                disabled={!formState.isValid}
            />
        </form>
    );
};

export default Contact;
