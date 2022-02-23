import { Typography } from '@mui/material';

//Prints not authorized when you are not authorized
export function NonAuthorized() {
    return(
        <div className="content">
            <Typography component="h6" variant="h6">
                <p>You are not authorized to continue</p>
            </Typography>
        </div>
    );
}