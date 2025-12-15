import { Spinner, Stack } from "@chakra-ui/react";
import Text from "../texts/Text";
import type { LoadingProps } from "@/types/feedbacks";


export default function Loading({
    open,
    text,
    textProps,
    spinnerProps,
    ...props
}: LoadingProps){
    return (
        <Stack
            width="full"
            height="full"
            justify="center"
            align="center"
            position="absolute"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            color="primary"
            gap={2}
            {...props}
        >
            <Spinner 
                color="inherit"
                size="xl"
            />
            {
                text 
                    ? (
                        <Text 
                            color="inherit"
                            fontWeight="bold"
                            fontSize={18}
                        >
                            {text}
                        </Text> 
                    )
                    : null
                }
        </Stack>
    )
}