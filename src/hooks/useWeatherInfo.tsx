import { useEffect, useState } from "react";
import axios from "axios";

const useWeatherInfo = () => {
    const [weatherEmoji, setWeatherEmoji] = useState<string>("");

    enum WeatherEmojis {
        ClearSun = "☀️",
        PartialClouds = "⛅",
        Drizzle = "🌦️",
        Clouds = "☁️",
        Rain = "🌧️",
        Thunderstorm = "⛈️",
        Snow = "❄️",
        Mist = "🌫️",
    };

    enum MoonEmojis {
        New = "🌑",
        WaxingCrescent = "🌒",
        FirstQuarter = "🌓",
        WaxingGibbous = "🌔",
        Full = "🌕",
        WaningGibbous = "🌖",
        LastQuarter = "🌗",
        WaningCrescent = "🌘",
    };

    const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const lat = process.env.NEXT_PUBLIC_WEATHER_LAT,
          lon = process.env.NEXT_PUBLIC_WEATHER_LON;
    const exclude = "minutely,hourly,daily,alerts";

    const getEmoji = (iconId: string) => {
        switch (iconId) {
            case "01n":
            case "02n":
                return getMoonPhase();
            case "01d":
                return WeatherEmojis.ClearSun;
            case "02d":
                return WeatherEmojis.PartialClouds;
            case "10d":
                return WeatherEmojis.Drizzle;
            case "03d":
            case "03n":
            case "04d":
            case "04n":
                return WeatherEmojis.Clouds;
            case "09d":
            case "09n":
            case "10n":
                return WeatherEmojis.Rain;
            case "11d":
            case "11n":
                return WeatherEmojis.Thunderstorm;
            case "13d":
            case "13n":
                return WeatherEmojis.Snow;
            case "50d":
            case "50n":
                return WeatherEmojis.Mist;
            default:
                return "";
        }
    };

    const getMoonPhase = () => {
        return "";
    };

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${weatherApiKey}`)
            .then(response => {
                const iconId = response.data.current.weather.icon;
                setWeatherEmoji(getEmoji(iconId));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return { weatherEmoji };
};

export default useWeatherInfo;
