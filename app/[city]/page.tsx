"use client";

import { createGlobalStyle } from "styled-components";
import {useParams} from "next/navigation";
import useSWR from "swr";
import WeatherCard from "../../components/weatherCard";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%; 
        margin: 0; 
        padding: 0;
    }
    body {
        background: linear-gradient(180deg, #a1c4fd, #c2e9fb); 
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif; 
        min-height: 100%;
    }
    #__next {
        flex-grow: 1; 
    }
`;

interface Weather {
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;
    tempmax: number;
}

const WeatherContentWrapper = styled.main`
    width: 95vw;
    margin: 0 auto;
    flex-grow: 1
`;

const CityName = styled.h1`
    color: black;
`;

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    border:  5px solid;
    justify-content: center;
`;

export default function CityPage() {
    const params = useParams();

    const {data, error} = useSWR(`/api/getWeatherData?city=${params.city}`, (url) => 
        fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const days = data?.days || [];

    return (
        <>
            <GlobalStyle />
            <WeatherContentWrapper>
                <CityName>{params.city}</CityName>
                <WeatherCardsContainer>
                    {
                        days.map((weather: Weather, i: number) => 
                            (
                                <WeatherCard
                                    key={i}
                                    datetime={weather.datetime}
                                    conditions={weather.conditions}
                                    description={weather.description}
                                    tempmin={weather.tempmin}
                                    tempmax={weather.tempmax}
                                />
                            )
                        )
                    }
                </WeatherCardsContainer>
            </WeatherContentWrapper>
        </>
        
    );
}