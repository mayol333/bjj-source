import styled, { css } from "styled-components";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.neutral_100};
    &:disabled {
        opacity: 0.5;
    }
    &:hover:not(:disabled) {
        border-color: ${({ theme }) => theme.colors.secondary};
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
                    background-color: ${theme.colors.neutral_100};
                    color: ${theme.colors.neutral_10};
                `;
            case "secondary":
                return css`
                    background-color: ${theme.colors.neutral_10};
                    color: ${theme.colors.neutral_100};
                `;
        }
    }}
`;