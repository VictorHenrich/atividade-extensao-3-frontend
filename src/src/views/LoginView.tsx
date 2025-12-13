import React from "react";
import { Stack, Center, Image } from "@chakra-ui/react";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import Link from "@/components/texts/Link";
import Heading from "@/components/texts/Heading";
import Text from "@/components/texts/Text";
import IconButton from "@/components/buttons/IconButton";
import BackgroundLogin from "@/assets/images/background_login.png"
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function LoginView(){
    return (
        <Stack 
            direction="column"
            position="relative"
        >
            <Image 
                src={BackgroundLogin}
                position="absolute"
                top={0}
                left={0}
                width="full"
                height="50vh"
                zIndex={-1}
                filter="brightness(50%)"
            />
            <Stack
                direction="column"
                height="30vh"
                align="center"
                justify="center"
                zIndex={1}
            >
                <Heading>
                    VôDeBusão
                </Heading>
                <Text color="white">
                    Sua jornada de ônibo,  descomplicada.
                </Text>
            </Stack>
            <Center
                height="70vh"
                backgroundColor="container"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="column"
                borderTopRadius={50}
                zIndex={1}
            >
                <Stack
                    direction="column"
                    width="full"
                    padding={5}
                    align="center"
                    gap={3}
                >
                    <Input 
                        label="Email"
                        type="email"
                    />
                    <Input
                        label="Senha"
                        type="password"
                    />
                    <Button
                        borderRadius={50}
                        fontSize={18}
                    >
                        Entrar
                    </Button>
                    <Link>Esqueceu da senha?</Link>
                </Stack>
                <Stack
                    width="full"
                    height="15%"
                    direction="row"
                    align="center"
                    justify="center"
                    gap={10}
                >
                    {[
                        <FaGoogle/>,
                        <FaInstagramSquare />,
                        <FaFacebook />
                    ].map(item => {
                        return (
                            <IconButton>{item}</IconButton>
                        )
                    })}
                </Stack>
                <Stack
                    width="full"
                    height="15%"
                    direction="row"
                    align="center"
                    justify="center"
                    backgroundColor="detail"
                    borderTopRadius={50}
                    gap={2}
                    color="white"
                >
                    <Text color="inherit">
                        Novo por aqui?
                    </Text>
                    <Link color="inherit">Crie sua conta</Link>
                </Stack>
            </Center>
        </Stack>
    )
}

export default React.memo(LoginView);