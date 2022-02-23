import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { BeerDetails } from "./BeerDetails";

export function BeerList(props) {
    const {searchterm} = props;
    const url = 'https://api.punkapi.com/v2/beers?beer_name=' + searchterm;
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        async function getBeers()
        {
            const result = await axios({
                method: 'GET',
                url: url
            });
            
            if (result.data != null) {
                setBeers(result.data.map(item => {
                    item["identification"] = item.id;
                    return item}))
                console.log(result.data);
            }
        }
        getBeers();
    },[searchterm, url]);

    function Beer(props)
    {
        const {selectedBeer} = props;
        if(selectedBeer != null)
        return(
          <div>
            <BeerDetails id={selectedBeer.id}></BeerDetails>
          </div>
        )
        else
            return <></>
    }

    if(beers.length > 1)
    {
        return (
        <div>
            <Typography component="h1" variant="h5" className="h1">
                Beer List
            </Typography>

            {beers.map((item) => (
                <p>{item.name} : {item.description}</p>
            ))}
        </div>
        );
    }
    else if(beers.length === 1) {
        return <Beer selectedBeer = {beers[0]}></Beer>
    }
    else {
        return (
            <Typography component="h6" variant="h6">
                <p>No Beers found</p>
            </Typography>
        );
    }
}
