import { Link as LinkChakra, type LinkPropsProvider } from "@chakra-ui/react";


export default function Link(props: LinkPropsProvider){
    return (
        <LinkChakra 
            fontSize={15}
            color="detail"
            fontWeight="bolder"
            fontFamily='"Inter", sans-serif'
            {...props}
        />
    )
}