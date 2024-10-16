import { useEffect, useState } from "react";
import axios from "axios";
import { now, zone } from "timezonecomplete";

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

    const LUNAR_MONTH = 29.530588853;

    const getJulianDate = () => {
        const time = now(zone("America/Toronto")).unixUtcMillis();
        return (time / 86400000) + 2440587.5;
    }
    
    const normalize = (value: number) => {
        value = value - Math.floor(value);
        if (value < 0) {
            value = value + 1;
        }
        return value;
    }

    const getLunarAgePercent = () => {
        return normalize((getJulianDate() - 2451550.1) / LUNAR_MONTH);
    }

    const getLunarAge = () => {
        const percent = getLunarAgePercent();
        const age = percent * LUNAR_MONTH;  return age;
    }

    const getMoonPhase = () => {
        const lunarAge = getLunarAge();
        if (lunarAge < 1.84566) {
            return MoonEmojis.New;
        }
        else if (lunarAge < 5.53699) {
            return MoonEmojis.WaxingCrescent;
        }
        else if (lunarAge < 9.22831) {
            return MoonEmojis.FirstQuarter;
        }
        else if (lunarAge < 12.91963) {
            return MoonEmojis.WaxingGibbous;
        }
        else if (lunarAge < 16.61096) {
            return MoonEmojis.Full;
        }
        else if (lunarAge < 20.30228) {
            return MoonEmojis.WaningGibbous;
        }
        else if (lunarAge < 23.99361) {
            return MoonEmojis.LastQuarter;
        }
        else if (lunarAge < 27.68493) {
            return MoonEmojis.WaningCrescent;
        }
        return MoonEmojis.New;
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
