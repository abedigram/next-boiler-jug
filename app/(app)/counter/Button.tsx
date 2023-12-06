'use client'
import {Button as AntButton} from "antd";
import React from "react";

interface props {
    onclick?: () => void
}
export const Button:React.FC<props> = ({onclick }: props) => (
    // <Button onClick={onclick}>click me</Button>
    <AntButton onClick={onclick}/>
)