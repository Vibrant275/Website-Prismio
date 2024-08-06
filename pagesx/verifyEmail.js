import React from 'react';
import Image from "next/image";
import EmailBackground from '@/public/images/emailBackground.png' ;

const VerifyEmail = () => {
    return (
        <main>
            {/*<div style={{height: 10}}/>*/}
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{height: '300px', width: 'fit-content'}} src={EmailBackground} alt={''}/>
                <div className={'verifyEmailHeading'}>Verify your email address</div>
                <div style={{height: 7}}/>
                <div className={'verifyEmailBody'}>You've entered archansamma@gmail.com as the mail address for your account. Please verify the email address by entering the 6 digit OTP sent to your email </div>


            </div>
        </main>
    );
}

export default VerifyEmail;