import { ElementType } from "react";
import type { 
    InputProps as InputPropsChakra, 
    FieldRootProps ,
    FieldErrorTextProps,
    FieldErrorIconProps,
    FieldLabelProps
} from "@chakra-ui/react";

export interface InputProps extends InputPropsChakra{
    label?: string | ElementType,
    error?: string | ElementType,
    fieldRootProps?: FieldRootProps,
    fieldErrorTextProps?: FieldErrorTextProps,
    fieldErrorIconProps?: FieldErrorIconProps,
    fieldLabelProps?: FieldLabelProps
}