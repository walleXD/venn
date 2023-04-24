import * as React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    kind?: "primary" | "secondary";
}
declare function Button(props: ButtonProps): JSX.Element;

export { Button, ButtonProps };
