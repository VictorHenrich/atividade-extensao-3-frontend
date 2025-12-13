import React from "react";
import { Drawer as ChakraDrawer } from "@chakra-ui/react";
import type { DrawerProps } from "@/types/menus";

export default function Drawer({
    header,
    body,
    footer,
    drawerBodyProps,
    drawerFooterProps,
    drawerHeaderProps,
    drawerContentProps,
    hasBackdrop = true,
    ...props
}: DrawerProps){

    return (
        <ChakraDrawer.Root
            {...props}
        >
            {hasBackdrop ? <ChakraDrawer.Backdrop /> : null}
            <ChakraDrawer.Positioner>
                <ChakraDrawer.Content {...(drawerContentProps || {})}>
                    <ChakraDrawer.CloseTrigger />
                    {header 
                        ? (
                            <ChakraDrawer.Header {...(drawerHeaderProps || {})}>
                                {header}/
                            </ChakraDrawer.Header> 
                        )
                        : null
                    }
                    {body 
                        ? (
                            <ChakraDrawer.Body {...(drawerBodyProps || {})}>
                                {body}
                            </ChakraDrawer.Body> 
                        )
                        : null
                    }
                    {footer 
                        ? (
                            <ChakraDrawer.Footer {...(drawerFooterProps || {})}>
                                {footer}
                            </ChakraDrawer.Footer> 
                        )
                        : null
                    }
                </ChakraDrawer.Content>
            </ChakraDrawer.Positioner>
        </ChakraDrawer.Root>
    )
}