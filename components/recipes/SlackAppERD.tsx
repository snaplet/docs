import * as React from "react";
import { useTheme } from "nextra-theme-docs";


export const SlackAppERD = () => {
    const { resolvedTheme } = useTheme();

    if (resolvedTheme === "dark") {
    return (<iframe width="880" height="720" src='https://dbdiagram.io/e/66460034f84ecd1d225b7d68/66460063f84ecd1d225b82f2'></iframe>)
    }

    return  (<iframe width="880" height="720" src='https://dbdiagram.io/e/6644dfeff84ecd1d2244fbde/6644e883f84ecd1d2245ac3c'> </iframe>)
};
  