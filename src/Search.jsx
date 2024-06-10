import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import './Search.css'
import { useState } from 'react';

export default function Search({data}) {
    let [search,setSearch]=useState("");
    let [error,setError]=useState(false);

    let apiCall=async()=>{
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6a1d9e2146685c78804d304d75e5daec&units=metric`);
        let jsonResponse=await response.json();
        let weather={
            city:search,
            temp:jsonResponse.main.temp,
            temp_max:jsonResponse.main.temp_max,
            temp_min:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like
        };
        return weather;
    }
    let handleSearch=(event)=>{
        setSearch(event.target.value)
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            let weather=await apiCall();
            data(weather);
            setSearch("");
            setError(false);
        }
        catch(e){
            setError(true);
        }
    }
    return (
        <div className='Search' onSubmit={handleSubmit}>
            <form action="" className='form'>
                <TextField id="outlined-basic" label="City" variant="outlined" value={search} onChange={handleSearch}/><br /><br />
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                    Search
                </Button>   
                       
                 </form> 
                 <div className='ErrorDiv'>
                 {error&& <p className='ErrorPara'>No result!!</p>}
                 </div>
        </div>
    )
}