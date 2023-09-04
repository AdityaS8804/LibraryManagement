import React, { useState, useContext, useEffect } from 'react'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { Container, CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthContext from '../context/AuthContext';
//import { } from ''

const defaultTheme = createTheme()
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});
export const SignIn = () => {
    const { loginUser } = useContext(AuthContext)
    const [noUser, setNoUser] = useState(false)
    //const [checkbox, setCheckBox] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            loginUser(values)
        },
    });
    const { status } = useContext(AuthContext)

    useEffect(() => {
        if (status === 401) {
            setNoUser(true)
        }
    }, [status])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            autoComplete='email'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            autoComplete='current-password'
                        />
                        {
                        /*
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" onChange={(e) => {
                                setCheckBox(_ => !_)
                            }} />}
                            label="Remember me"
                        />
                        */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >Sign In</Button>
                        <Link href="/signup" variant="body2">Don't have an account? Sign Up</Link>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
