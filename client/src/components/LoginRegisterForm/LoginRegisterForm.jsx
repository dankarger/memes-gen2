import React, {useEffect, useRef} from "react";
import {LoginFormStyled} from "../../styles/LoginForm.styled";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function LoginRegisterForm({type,handleFormInputs,handleSubmitLogin,formData,handleSubmitLoginGuest}) {
    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)

    useEffect(()=>{

        if(nameInputRef.current!==null){
            nameInputRef.current.focus();
        }else {
            emailInputRef.current.focus();
        }
    },[])

    return (

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <LoginFormStyled>
                {type==='login'? null: <TextField id="filled-basic-name" label="Name"
                                                  variant="filled"
                                                  onChange={handleFormInputs}
                                                  name='name'
                                                  value={formData.name}
                                                  autoComplete="current-name"
                                                  ref={nameInputRef}
                                                  autoFocus={type!=='login'}
                />}

                <TextField id="filled-basic-email" label="Email"
                           variant="filled"
                           onChange={handleFormInputs}
                           name='email'
                           value={formData.email}
                           autoComplete="current-email"
                           ref={emailInputRef}
                           autoFocus={type==='login' }

                />

                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    onChange={handleFormInputs}
                    name='password'
                    value={formData.password}
                />
                <Stack direction="column" spacing={2}>
                    {/*<Button variant="outlined">Primary</Button>*/}
                    <Button variant="contained"  color='info' onClick={()=>handleSubmitLogin()}>
                        Submit
                    </Button>
                    <Button variant="outlined" href="#outlined-buttons" onClick={()=>handleSubmitLoginGuest()}>
                       Continue as GUEST
                    </Button>
                </Stack>

        </LoginFormStyled>
            </Box>

    );
}





