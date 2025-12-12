import { Input as InputChakra, Field } from "@chakra-ui/react";
import { InputProps } from "@/types/inputs";
import Text from "../texts/Text";

export default function Input({
    label,
    error,
    fieldErrorTextProps,
    fieldLabelProps,
    fieldRootProps,
    ...props
}: InputProps){
    return (
        <Field.Root {...(fieldRootProps || {})}>
            {
                label ?
                    <Field.Label {...(fieldLabelProps || {})}>
                        {
                            typeof label == "string" 
                            ?   <Text 
                                    fontWeight="bold"
                                    color="black"
                                >
                                        {label}
                                </Text> 
                            : label
                        }
                    </Field.Label> : null}
            <InputChakra
                borderRadius={15}
                backgroundColor="white"
                color="detail"
                paddingX={5}
                paddingY={6}
                fontSize={15}
                boxShadow="0 1px 3px rgba(0, 0, 0, 0.12)"
                fontFamily='"Roboto", sans-serif'
                {...props}
            />
            {
                error ? 
                    <Field.ErrorText {...(fieldErrorTextProps || {})}>
                        {
                            typeof label == "string"
                            ?   <Text 
                                    fontWeight="bold"
                                    color="red"
                                >
                                        {error}
                                </Text> 
                            : label
                        }
                    </Field.ErrorText> : null}
        </Field.Root>
    )
}