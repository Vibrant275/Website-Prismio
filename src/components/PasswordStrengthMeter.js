import React from 'react';

const PasswordStrengthMeter = (props) => {
    const testedResult = props.password;
    const createPasswordLabel = () => {
        let score = 0
        let regexPositive = [/[A-Z]/, /[a-z]/, /[0-9]/, /.{8,}/, /[!@#\$%\^&\*]/];
        regexPositive.forEach((regex, index) => {
            if (new RegExp(regex).test(testedResult)) {
                score += 1
            }
        })
        switch (score) {
            case 0:
                return ({
                    value: 0,
                    info: "",
                });
            case 1:
                return ({
                    value: 1,
                    info: "Weak",
                });
            case 2:
                return ({
                    value: 2,
                    info: "Fair",
                });
            case 3:
                return ({
                    value: 3,
                    info: "Good",
                });
            case 4:
                return ({
                    value: 4,
                    info: "Strong",
                });
            case 5:
                return ({
                    value: 5,
                    info: "Excellent",
                });
            default:
                return null
        }
    }
    // {props.actions(createPasswordLabel().info)}

    return (<>
            <div className="password-strength-meter">
                <progress className={`password-strength-meter-progress strength-${createPasswordLabel().info}`}
                          value={createPasswordLabel().value} max="5"/>
                <br/>
                <p className="password-strength-meter-label">
                    {props.password && (<>
                        <p className={`password__label strength-${createPasswordLabel().info}`}>Password
                            strength: <span>{createPasswordLabel().info} </span></p>
                    </>)}
                </p>
            </div>
        </>
    )
}
export default PasswordStrengthMeter;