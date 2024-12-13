import styled, { css } from "styled-components";
import { ButtonProps, StyledButtonProps } from "./types";
const StyledButton = styled.button<StyledButtonProps>`
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    &:disabled {
        opacity: 0.5;
    }
    &:hover:not(:disabled) {
        border-color: ${({ theme }) => theme.colors.red};
    }

    ${({ $size }) => {
        switch ($size) {
            case "small":
                return css`
                    padding: 6px 10px;
                    font-size: 14px;
                `;
            case "medium":
                return css`
                    padding: 11px 17px;
                    font-size: 16px;
                `;
            case "large":
                return css`
                    padding: 16px 25px;
                    font-size: 18px;
                `;
        }
    }}
    ${({ $mode, theme }) => {
        switch ($mode) {
            case "primary":
                return css`
                    background-color: ${theme.colors.white};
                    color: ${theme.colors.black};
                `;
            case "secondary":
                return css`
                    background-color: ${theme.colors.black};
                    color: ${theme.colors.white};
                `;
        }
    }}
`;

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
