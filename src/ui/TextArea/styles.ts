import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
	padding: 15px;
    color: ${({theme}) => theme.colors.neutral_100};
    background-color: transparent;
	border: 1px solid ${({ theme }) => theme.colors.neutral_30};
	&::placeholder {
		color: ${({ theme }) => theme.colors.neutral_90};
        font-size: 14px;
	}
    &:active {
        border-color: ${({theme}) => theme.colors.neutral_100};
    }
`
export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 16px;
	color: ${({ theme }) => theme.colors.neutral_100};
`