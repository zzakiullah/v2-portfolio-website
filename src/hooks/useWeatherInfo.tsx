import { useEffect, useState } from "react";
import axios from "axios";
import { TzDatabase, now, zone } from "timezonecomplete";
import tzData from "tzdata";
import { fetchWeatherApi } from "openmeteo";

const useWeatherInfo = () => {
    const [weatherEmoji, setWeatherEmoji] = useState<string>("");
    const [fetchingWeatherData, setFetchingWeatherData] = useState<boolean>(true);

    enum WeatherEmojis {
        ClearSun = "☀️",
        PartialClouds = "⛅",
        Drizzle = "🌦️",
        Clouds = "☁️",
        Rain = "🌧️",
        Thunderstorm = "⛈️",
        Snowfall = "🌨️",
        Snowflake = "❄️",
        Fog = "🌫️",
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

    const getEmoji = (weatherCode: number, isDay: number) => {
        switch (weatherCode) {
            case 0:
            case 1:
                if (isDay) {
                    return WeatherEmojis.ClearSun;
                }
                return getMoonPhase();
            case 2:
                if (isDay) {
                    return WeatherEmojis.PartialClouds;
                }
                return getMoonPhase();
            case 3:
                return WeatherEmojis.Clouds;
            case 45:
            case 48:
                return WeatherEmojis.Fog;
            case 51:
            case 53:
            case 55:
                if (isDay) {
                    return WeatherEmojis.Drizzle;
                }
                return getMoonPhase();
            case 56:
            case 57:
            case 66:
            case 67:
                return WeatherEmojis.Snowflake;
            case 61:
            case 63:
            case 65:
            case 80:
            case 81:
            case 82:
                return WeatherEmojis.Rain;
            case 71:
            case 73:
            case 75:
            case 77:
            case 85:
            case 86:
                return WeatherEmojis.Snowfall;
            case 95:
            case 96:
            case 99:
                return WeatherEmojis.Thunderstorm;
            default:
                return "";
        }
    };

    const LUNAR_MONTH = 29.530588853;

    const getJulianDate = () => {
        TzDatabase.init(tzData);
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

    const lat = process.env.NEXT_PUBLIC_WEATHER_LAT ?? 0,
          lon = process.env.NEXT_PUBLIC_WEATHER_LON ?? 0;
    
    const params = {
        "latitude": lat,
        "longitude": lon,
        "current": ["is_day", "weather_code"],
        "timezone": "America/New_York",
        "forecast_days": 1
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    useEffect(() => {
        const fetchWeatherData = async() => {
            const responses = await fetchWeatherApi(url, params),
                  response = responses[0],
                  current = response.current()!,
                  isDay = current.variables(0)!.value(),
                  weatherCode = current.variables(1)!.value();
            console.log(`isDay: ${isDay}, weatherCode: ${weatherCode}`);
            setWeatherEmoji(getEmoji(weatherCode, isDay));
            setFetchingWeatherData(false);
        };
        fetchWeatherData()
            .catch((error) => {
                console.error(error);
                setFetchingWeatherData(false);
            });
    }, []);

    return { weatherEmoji, fetchingWeatherData };
};

export default useWeatherInfo;
