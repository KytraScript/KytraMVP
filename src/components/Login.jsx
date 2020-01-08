import React from 'react';

const Login = (props) => {
    return (
        <div className={'login-main'}>
            <div className={'login-card'}>
                <div className={'login-submit'}>
                    <form>
                        <div id={'login-user'}>
                            User:
                            <input type={"text"} name={"userName"} onChange={props.handleChange}/>
                        </div>
                        <div  id={'login-password'}>
                            Password:
                            <input type={"password"} name={"password"}/>
                        </div>
                        <button id={'btn-login'} onClick={props.validate}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;