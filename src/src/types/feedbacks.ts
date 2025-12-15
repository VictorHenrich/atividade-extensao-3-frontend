import type { SpinnerProps, StackProps, TextProps } from "@chakra-ui/react";


export interface LoadingProps extends StackProps{
    open: boolean;
    text?: string;
    spinnerProps?: SpinnerProps,
    textProps?: TextProps
}