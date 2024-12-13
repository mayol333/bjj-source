export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: ButtonSize;
    label: string;
    onClick?: () => void;
    mode?: ButtonMode;
    disabled?: boolean;
}

export type ButtonSize = "small" | "medium" | "large";
export type ButtonMode = "primary" | "secondary";
export interface StyledButtonProps {
    $size?: ButtonSize;
    $mode?: ButtonMode;
}
