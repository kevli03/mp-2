import Image from "./components/Image.tsx";
import { ImageData } from "./interfaces/ImageData.ts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
    width: 80%;
    margin: auto;
`;

export default function App() {
    const [image, setImage] = useState<ImageData[]>([]);

    useEffect(() => {
        async function getImages(): Promise<void> {
            const res = await fetch("https://picsum.photos/v2/list");
            const data = await res.json();
            setImage(data);
        }
        getImages()
            .then(() => console.log("Success!"))
            .catch((e: Error) => console.log("Error encountered: " + e));
    }, []);

    return (
        <PageWrapper>
            <Image image={image}/>
        </PageWrapper>
    );
}
