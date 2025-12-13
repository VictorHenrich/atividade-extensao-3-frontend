import { ReactNode } from "react";
import type { 
    InputProps as InputPropsChakra, 
    FieldRootProps ,
    FieldErrorTextProps,
    FieldErrorIconProps,
    FieldLabelProps,
    InputGroupProps
} from "@chakra-ui/react";

export interface InputProps extends InputPropsChakra{
    startElement?: ReactNode,
    endElement?: ReactNode,
    label?: ReactNode,
    error?: ReactNode,
    fieldRootProps?: FieldRootProps,
    fieldErrorTextProps?: FieldErrorTextProps,
    fieldErrorIconProps?: FieldErrorIconProps,
    fieldLabelProps?: FieldLabelProps,
    inputGroupProps?: InputGroupProps
}