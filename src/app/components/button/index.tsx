import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
    theme?:"filled" | "outlined";
    text: string;
}

const BaseButton = styled.button`
    ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-thin
        md:font-semibold
        border-transparent
        border-2
        border-solid
        focus: outline-none
        duration-200
        ease-in-out
        m-1
    `};
`;

const DownloadButton = styled.button`
// background:#ffdab9;
    ${tw`
        w-40
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus: outline-none
        duration-200
        ease-in-out
        xl:mx-72
        sm:mx-36
        text-black
        bg-red-200
        hover:bg-transparent
        hover:text-red-200
        hover:border-red-200
    `};
`;

const OutlinedButton = styled(BaseButton)`

    ${tw`
        text-black
        bg-red-200
        hover:bg-transparent
        hover:text-red-200
        hover:border-red-200
        font-bold
    `};
`;

const FilledButton = styled(BaseButton)`

    ${tw`
        text-red-200
        border-red-200
        bg-transparent
        hover:bg-red-200
        hover:text-black
        hover:border-transparent
        font-bold
    `};
`;

export function Button(props: IButtonProps){
    const { theme, text} = props;
    
    if(theme === "filled")
        return <FilledButton>
            {text}
        </FilledButton>;
    else
        return <OutlinedButton>
        {text}
        </OutlinedButton>;
}
    
export function Downloadbutton(){
    return (
        <DownloadButton>Download CV</DownloadButton>
    );
}