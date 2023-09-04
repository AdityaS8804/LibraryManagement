import React from 'react'
import { Container, Box, Avatar, Typography, CssBaseline, TextField, Button, Grid, Link } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from "@mui/material/styles"
const defaultTheme = createTheme()
export const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        console.log(
            data
        )
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: 8
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Phone Number"
                            id="phoneNumber"
                            autoComplete='phone-number'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            id="email"
                            autoComplete='email'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="text"
                            label="Address"
                            id="address"
                            autoComplete='address'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="College"
                            id="college"
                            autoComplete='college'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            id="password"
                            type="password"
                            autoComplete='password'
                        />
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>Sign Up</Button>
                    </Box>
                </Box>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/" variant="body2">
                            Already have an account? Sign In
                        </Link>
                    </Grid>

                </Grid>
            </Container>
        </ThemeProvider>
    )
}
