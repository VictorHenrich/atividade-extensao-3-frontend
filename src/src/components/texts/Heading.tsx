import { Heading as HeadingChakra, HeadingProps } from "@chakra-ui/react";


export default function Heading(props: HeadingProps){
    return (
        <HeadingChakra
            fontSize={25}
            color="primary"
            fontWeight="bolder"
            fontFamily='"Poppins", sans-serif'
            {...props}
        />
    )
}