import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { ValidatorForm } from "react-material-ui-form-validator";
import { useState } from "react";
import { BeerList } from "./BeerList";

export function Search() {
    const [searchterm, setSearchterm] = useState([]);

    const handleSubmit = (event) => {
        setSearchterm(event.target[0].value);
        event.preventDefault();
    }

    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <Box sx={{ marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Typography component="h1" variant="h5">
                    Search
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <ValidatorForm component="form" onSubmit={handleSubmit} onError={errors => console.log(errors)}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                            Search
                        </Button>
                    </ValidatorForm>
                </Box>
            </Box>
            <Box sx={{ marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Box sx={{ mt: 3 }}>
                    <BeerList searchterm={searchterm} />
                </Box>
            </Box>
        </Container>
    );
}
