import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './WeatherInfo.css'
export default function WeatherInfo({ info }) {
    let rain = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hot = "https://images.unsplash.com/photo-1581224463294-908316338239?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="WeatherInfo">
            <Card sx={{ maxWidth: 345 }} className='card'>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity > 80 ? rain : info.temp > 16 ? hot : cold}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}&nbsp;
                        {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 16 ? <WbSunnyIcon /> : <AcUnitIcon />}

                    </Typography>
                    <div><b>Temperature:</b>{info.temp}&deg;C</div>
                    <div><b>Max Temperature:</b>{info.temp_max}&deg;C</div>
                    <div><b>Min Temperature:</b>{info.temp_min}&deg;C</div>
                    <div><b>Humidity:</b>{info.humidity}%</div>
                    <div><b>Feels Like:</b>{info.feels_like}&deg;C</div>
                </CardContent>
            </Card>
        </div>
    )
}