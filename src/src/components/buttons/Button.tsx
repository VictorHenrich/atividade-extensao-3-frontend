import { Button as ButtonChakra } from "@chakra-ui/react";
import type { ButtonProps } from "@/types/buttons";


export default function Button({ ...props }: ButtonProps){
    return (
        <ButtonChakra
            width="full"
            paddingX={5}
            paddingY={6}
            fontSize={15}
            backgroundColor="primary"
            fontFamily='"Roboto", sans-serif'
            {...props}
        />
    )
}