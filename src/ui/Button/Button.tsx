import { StyledButton } from "./styles";
import { ButtonProps } from "./types";


export const Button = ({
    size = "medium",
    onClick,
    mode = "primary",
    disabled,
}: ButtonProps) => {
    return (
        <StyledButton
            $size={size}
            $mode={mode}
            disabled={disabled}
            onClick={onClick}
        >
            Button
        </StyledButton>
    );
};
