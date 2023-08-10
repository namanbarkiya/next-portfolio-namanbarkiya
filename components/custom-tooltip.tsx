// import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";

interface CustomTooltipProps {
    children: React.ReactNode;
    text: string;
    icon?: any;
}

export default function CustomTooltip({
    children,
    text,
    icon,
}: CustomTooltipProps) {
    const IconComponent = icon ? icon : BsInfoCircle;
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent className="flex text-muted-foreground items-center">
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span>{text}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
