import { Text as TextChakra, type TextPropsProvider } from "@chakra-ui/react";


export default function Text(props: TextPropsProvider){
    return (
        <TextChakra 
            fontSize={15}
            color="black"
            fontFamily='"Inter", sans-serif'
            {...props}
        />
    )
}