import Jokes from "./components/Jokes.tsx";
import { JokeData } from "./interfaces/JokeData.ts";
import { useEffect, useState } from "react";
import styled from "styled-components";
import './App.css';

const WrapperDiv = styled.div`
    width: 90vw;
    margin: auto;
`;

export default function App() {
    const [jokeData, setJokeData] = useState<JokeData[]>([]);

    useEffect(() => {
        async function getJokes() {
            const res = await fetch(`https://official-joke-api.appspot.com/jokes/random/5`);
            const data = await res.json();
            setJokeData(data);
        }
        getJokes()
            .catch((e: Error) => console.log("Error encountered: " + e));
    });

    return (
        <WrapperDiv>
            <Jokes jokeData={jokeData}/>
        </WrapperDiv>
    );
}
