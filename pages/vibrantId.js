import React from 'react';

import BrandIcon from '@/public/images/VibrantOutline.png';
import Image from "next/image";
import Vibrant_ID_toolbar from "@/components/Vibrant_ID_toolbar";
import Button from "@mui/material/Button";
import {useRouter} from 'next/router';

const AccountPage = () => {
    const router = useRouter();

    return (
        <main>
            <Vibrant_ID_toolbar/>
            <div className={'account-page'}>
                <Image src={BrandIcon} alt="Brand Icon" className={'brand-icon'}/>

                <div style={{width: '50px'}}/>

                <div>
                    <div className={'title'}>Vibrant ID</div>
                    <div style={{height: '10px'}}/>
                    <div className={'description'}>Access all Vibrant Products with a single Vibrant ID</div>

                    <div style={{height: '18px'}}/>

                    <div style={{display: 'flex', justifyContent: 'center'}}>

                        <Button
                            variant="outlined"
                            className={'buttonSignUp'}
                            onClick={() => {
                                router.push('/signup')
                            }}>
                            Sign Up
                        </Button>

                        <div style={{width: '15px'}}/>

                        <Button
                            variant={'contained'}
                            className={'buttonSignIn'}
                            onClick={() => {
                                router.push('/signin')
                            }}>
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AccountPage;
