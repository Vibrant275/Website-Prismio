import {useState, useEffect} from 'react';
import CustomTextField from "@/components/CustomTextField";
import CircularProgress from '@mui/material/CircularProgress';
import CustomButton from "@/components/CustomButton";
import Link from 'next/link';
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import {convertDateFormat} from "@/components/utility";
import Vibrant_ID_toolbar from "@/components/Vibrant_ID_toolbar";

import {ToastContainer, toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import PasswordStrengthMeter from "@/components/PasswordStrengthMeter";
import CountrySelector from "@/components/CountrySelector";
import MyDatePicker from "@/components/DatePicker";

const SignupForm = () => {

    const toastOption = {
        position: "bottom-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
    }

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });
    const {loading, errorMessage, countries} = countryState;
    console.log("loading", loading);
    console.log("countries", countries);
    console.log("errorMessage", errorMessage);

    const [selectedCountry, setSelectedCountry] = useState();
    console.log("selectedCountry", selectedCountry);

    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        return obj.name.common === selectedCountry;

    });
    console.log("searchSelectedCountry", searchSelectedCountry);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [country, setCountry] = useState('');
    const [dob, setDob] = useState('');

    const [vibrantId, setVibrantId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const [error, setError] = useState('');
    const [signUpButtonVisible, setSignUpButtonVisible] = useState(true)
    const [pHelperVisible, setPHelperVisible] = useState(false)

    // validated states
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);
    const [pokeDialog, setPokeDialog] = useState(false);
    const [idd, setIdd] = useState('');
    const [passValid , setPasswordValidity] = useState(false)

    const handleChange = (value) => {
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')

        if (lower.test(value)) {
            setLowerValidated(true);
        } else {
            setLowerValidated(false);
        }
        if (upper.test(value)) {
            setUpperValidated(true);
        } else {
            setUpperValidated(false);
        }
        if (number.test(value)) {
            setNumberValidated(true);
        } else {
            setNumberValidated(false);
        }
        if (special.test(value)) {
            setSpecialValidated(true);
        } else {
            setSpecialValidated(false);
        }
        if (length.test(value)) {
            setLengthValidated(true);
        } else {
            setLengthValidated(false);
        }

        let score = 0
        let regexPositive = [/[A-Z]/, /[a-z]/, /[0-9]/, /.{8,}/, /[!@#\$%\^&\*]/];
        regexPositive.forEach((regex, index) => {
            if (new RegExp(regex).test(value)) {
                score += 1
            }
        })

        if (score === 5)
            setPasswordValidity(true)
        else
            setPasswordValidity(false)

        // if (lowerValidated === true && upperValidated === true && numberValidated === true && specialValidated === true && lengthValidated === true)
        //     setPasswordValidity(true);
        // else
        //     setPasswordValidity(false);

        setPassword(value)
    }

    const handleSignUpClick = () => {

        if (firstName === '')
            toast.error('Enter your first name', toastOption);
        else if (idd === '')
            toast.error('Select your country', toastOption);
        else if (dob === '')
            toast.error('Enter your Date of birth', toastOption);
        else if (vibrantId === '')
            toast.error('Enter your email', toastOption);
        else if (!isValidEmail(vibrantId))
            toast.error('Enter a valid email', toastOption);
        else if (password === '')
            toast.error('Set a Password', toastOption);
        else if (passValid === false)
            toast.error('Password is not strong enough', toastOption);
        else if (confirmedPassword === '')
            toast.error('Confirm your Password', toastOption);
        else if (password !== confirmedPassword)
            toast.error('Both Passwords do not match!', toastOption);
        else if (phoneNo === '')
            toast.error('Enter your Mobile Number', toastOption);
        else {
            setSignUpButtonVisible(false)

            // const data = {
            //     username: yourName,
            //     email: yourEmail,
            //     subject: subject,
            //     message: yourMessage,
            //     timestamp: Date()
            // }

            // try {
            // const docRef = await addDoc(collection(db, "Contacts"), data);

            // setSubmitButtonVisible(true)

            // toast.success('Form submitted! We\'ll get back to you soon.', {
            //     position: "bottom-center",
            //     autoClose: 4000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: true,
            //     theme: "dark",
            // });

            // setYourName('')
            // setYourEmail('')
            // setSubject('')
            // setYourMessage('')

            // } catch (e) {
            //     // setSubmitButtonVisible(true)
            //
            //     toast.error(e, {
            //         position: "bottom-center",
            //         autoClose: 4000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         theme: "dark",
            //     });
            // }
        }
    }


    return (
        <main>
            <Vibrant_ID_toolbar/>
            {/*onClick={() => {setPokeDialog(!pokeDialog)}}*/}
            <div className="nav-container" >
                <div className="spacer45"></div>
                <p className="title">Create your Vibrant ID</p>
                <div className="spacer"></div>

                <CustomTextField
                    label="First name"
                    onChange={setFirstName}
                    inputType={'text'}/>

                <div className="spacer2"></div>

                <CustomTextField
                    label="Last name (Optional)"
                    onChange={setLastName}
                    inputType={'text'}/>

                <div className="spacer2"></div>

                <CountrySelector idd={setIdd} poke={pokeDialog}/>

                <div className="spacer2"></div>

                <MyDatePicker setDate={setDob} setLabel={'Date of birth'}/>

                <div className="spacer2"></div>

                <CustomTextField
                    label="Vibrant ID"
                    onChange={setVibrantId}
                    inputType={'email'}
                    adornmentIcon={1}/>

                <div className="spacer2"></div>

                <CustomTextField
                    label="Password"
                    onChange={handleChange}
                    inputType={'password'}
                    focusChange={setPHelperVisible}
                    adornmentIcon={2}/>

                {

                    pHelperVisible &&

                    <div className={''}>
                        <div className="spacer3"></div>

                        <PasswordStrengthMeter password={password} />

                        <div style={{
                            display: "grid",
                            paddingLeft: '17px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            borderRadius: 4,
                            backgroundColor: 'rgba(0,153,255,0.10)',
                        }}>

                            <div className={lowerValidated ? 'validated' : 'not-validated'}>
                                {lowerValidated ? (

                                    <FontAwesomeIcon icon={faCircleCheck} className={'list-icon green'}/>

                                ) : (
                                    <FontAwesomeIcon icon={faCircle} className={'list-icon'}/>
                                )}
                                At least one lowercase letter
                            </div>
                            <div className={upperValidated ? 'validated' : 'not-validated'}>
                                {upperValidated ? (

                                    <FontAwesomeIcon icon={faCircleCheck} style={{color: '#0f0'}}
                                                     className={'list-icon green'}/>

                                ) : (

                                    <FontAwesomeIcon icon={faCircle} className={'list-icon'}/>

                                )}At least one uppercase letter
                            </div>
                            <div className={numberValidated ? 'validated' : 'not-validated'}>
                                {numberValidated ? (

                                    <FontAwesomeIcon icon={faCircleCheck} className={'list-icon green'}/>

                                ) : (

                                    <FontAwesomeIcon icon={faCircle} className={'list-icon'}/>

                                )}
                                At least one number
                            </div>
                            <div className={specialValidated ? 'validated' : 'not-validated'}>
                                {specialValidated ? (

                                    <FontAwesomeIcon icon={faCircleCheck} className={'list-icon green'}/>

                                ) : (

                                    <FontAwesomeIcon icon={faCircle} className={'list-icon'}/>

                                )}
                                At least one special character
                            </div>
                            <div className={lengthValidated ? 'validated' : 'not-validated'}>
                                {lengthValidated ? (

                                    <FontAwesomeIcon icon={faCircleCheck} className={'list-icon green'}/>

                                ) : (

                                    <FontAwesomeIcon icon={faCircle} className={'list-icon'}/>

                                )}
                                At least 8 characters
                            </div>
                        </div>

                    </div>
                }

                <div className="spacer2"></div>

                <CustomTextField
                    label="Confirm Password"
                    onChange={setConfirmedPassword}
                    inputType={'password'}
                    adornmentIcon={4}/>

                <div className="spacer2"></div>

                <CustomTextField
                    label="Phone number"
                    onChange={setPhoneNo}
                    cc={idd}
                    inputType={'text'}
                    adornmentIcon={3}/>

                <Link href={'/forgotPassword'} className="f-p">Forgot password</Link>

                <div className="spacer"></div>
                {
                    signUpButtonVisible ?
                        <CustomButton onClick={handleSignUpClick}>Continue</CustomButton> :
                        <CircularProgress className={'progressBar'}/>
                }

                {/* Display error message if there's an error */}
                {error && <p>{error}</p>}
                <ToastContainer/>
            </div>
        </main>
    );
};

export default SignupForm;
