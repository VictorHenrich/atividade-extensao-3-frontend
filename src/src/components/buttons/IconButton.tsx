import { IconButton as IconButtonChakra } from "@chakra-ui/react"
import type { ButtonProps } from "@/types/buttons";


export default function IconButton({ ...props }: ButtonProps){
    return (
        <IconButtonChakra
            fontSize={15}
            size="md"
            borderRadius="full"
            backgroundColor="detail"
            color="white"
            fontFamily='"Roboto", sans-serif'
            {...props}
        />
    )
}