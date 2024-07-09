"use client";
import React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";

export default function Sidebar() {
    return (
        <Card className="w-[15%]">
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Menu className="pr-2" /> Menu
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full justify-start text-base font-bold cursor-default h-14 bg-indigo-200 hover:bg-indigo-200 text-indigo-900">Generate Ecosystem</Button>
                <Button className="w-full justify-start text-wrap h-14 mt-2 text-base bg-white hover:bg-white text-indigo-900 font-bold">Request History and Workflow</Button>
            </CardContent>
        </Card>
    )
}

