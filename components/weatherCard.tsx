import styled from "styled-components";

interface Weather {
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;
    tempmax: number;
}

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 10px;
    margin: 1rem;
    width: 200px;
    h2 {
        margin: 0.5rem 0; 
    }

    p {
        margin: 0.25rem 0;
    }
`;

export default function WeatherCard(props:Weather) {
    return (
        <WeatherCardWrapper>
            <h2>{props.datetime}</h2>
            <p>{props.conditions}</p>
            <p>{props.description}</p>
            <p>{props.tempmin}°- {props.tempmax}°</p>
        </WeatherCardWrapper>
    );
}  