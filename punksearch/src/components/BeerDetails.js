import { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import { Typography } from "@mui/material";

export function BeerDetails(props) {
    const url = 'https://api.punkapi.com/v2/beers/';
    const [item, setItem] = useState([])
    const {id} = props

    useEffect(() => {
        async function fetchData() {
            const result = await axios({
                method: 'GET',
                url: url + id.toString(),
            });
            
            if(result.data != null) {
                setItem(result.data[0])
            }
        }
        
        fetchData();
        
    },[id]);

    return(
        [
            <div>
                <Typography component="h6" variant="h6" className="subtitle">
                    {item.name}
                </Typography>
                <div className = "beerlist">
                    <p>{item.description}</p>
                </div>
            </div>
        ]
    );
}