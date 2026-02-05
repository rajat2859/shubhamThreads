// app/providers.js
"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
    return (
        // enableSystem={false} ensures it only changes when you click the button
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
        </ThemeProvider>
    );
}