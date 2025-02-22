import { ImageData } from "../interfaces/ImageData.ts";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 1vw 1vh;
`;

const ImageAuthor = styled.h2`
    margin: auto;
    padding: 0 0 1vh;
    text-align: center;
`;

const DisplayImage = styled.img`
    max-width: 50%;
    width: 50%;
    margin: auto;
`;

export default function Image(props: { image: ImageData[] }) {
    return (
        <Wrapper>
            {
                props.image.map((img: ImageData) =>
                    <ImageWrapper key={img.id}>
                        <ImageAuthor>{img.author}</ImageAuthor>
                        <DisplayImage src={img.download_url} alt={`Image by ${img.author}`} />
                    </ImageWrapper>
                )
            }
        </Wrapper>
    );
}
