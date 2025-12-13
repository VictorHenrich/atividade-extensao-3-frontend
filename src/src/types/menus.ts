import type { ReactNode } from "react";
import type { 
    DrawerBodyProps as ChakraBodyProps,
    DrawerHeaderProps as ChakraDrawerHeaderProps,
    DrawerFooterProps as ChakraDrawerFooterProps,
    DrawerContentProps as ChakraDrawerContentProps,
    DrawerRootProps
} from "@chakra-ui/react";

export interface DrawerProps extends Omit<DrawerRootProps, "children">{
    header?: ReactNode,
    body?: ReactNode,
    footer?: ReactNode,
    hasBackdrop?: boolean,
    drawerBodyProps?: ChakraBodyProps,
    drawerHeaderProps?: ChakraDrawerHeaderProps,
    drawerFooterProps?: ChakraDrawerFooterProps,
    drawerContentProps?: ChakraDrawerContentProps,
    drawerOverlayProps?: 
}