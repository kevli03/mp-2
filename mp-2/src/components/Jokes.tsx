import { JokeData } from "../interfaces/JokeData.ts";
import styled from "styled-components";

const MultipleJokesDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const SingleJokeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export default function Jokes(props: { jokeData: JokeData[] }) {
    return (
        <MultipleJokesDiv>
            {
                props.jokeData.map((joke: JokeData) =>
                    <SingleJokeDiv key={joke.id}>
                        <h1>{joke.type}</h1>
                        <p>{joke.setup}</p>
                        <p>{joke.punchline}</p>
                    </SingleJokeDiv>
                )
            }
        </MultipleJokesDiv>
    );
}
