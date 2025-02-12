import * as Select from '@radix-ui/react-select'

import styled, { css } from 'styled-components'

import { CaretDownIcon } from '@radix-ui/react-icons'
import { Label } from '@radix-ui/react-label'
import { SelectTriggerProps } from './types'

export const SelectTrigger = styled(Select.Trigger)<SelectTriggerProps>`
	padding: ${({ theme }) => theme.gridUnit * 2.5}px;
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	background-color: transparent;
	border-radius: ${({ theme }) => theme.borderRadius};
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.colors.neutral_100};
	column-gap: ${({ theme }) => theme.gridUnit * 2}px;
	color: ${({ theme }) => theme.colors.neutral_100};
	${({ theme, $error }) =>
		$error &&
		css`
			border: 1px solid ${theme.colors.secondary};
		`}
	cursor: pointer;
	width: 170px;

	&[data-placeholder] {
		color: ${({ theme }) => theme.colors.neutral_100};
	}
`

export const SelectIcon = styled(CaretDownIcon)`
	display: flex;
	align-items: center;
	stroke: ${({ theme }) => theme.colors.neutral_100};
`

export const SelectContent = styled(Select.Content)`
	background-color: transparent;
	max-height: 200px;
	width: 170px;
	margin-top: 5px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	z-index: 10;
	overflow: hidden;
	border: 1px solid ${({ theme }) => theme.colors.neutral_100};
`

export const SelectReset = styled.p`
	padding: ${({ theme }) => theme.gridUnit * 1.5}px;
	padding-left: ${({ theme }) => theme.gridUnit * 2.5}px;
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	color: ${({ theme }) => theme.colors.neutral_100};
	&:hover {
		background-color: ${({ theme }) => theme.colors.neutral_40};
		outline: none;
	}
`

export const SelectItem = styled(Select.Item)`
	padding: ${({ theme }) => theme.gridUnit * 1.5}px;
	padding-left: ${({ theme }) => theme.gridUnit * 2.5}px;
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.gridUnit * 2}px;
	user-select: none;
	background-color: ${({ theme }) => theme.colors.neutral_20};
	color: ${({ theme }) => theme.colors.neutral_100};

	&:focus {
		outline: none;
	}
`

export const StyledLabel = styled(Label)`
	color: ${({ theme }) => theme.colors.neutral_100};
	font-size: ${({ theme }) => theme.fonts.size.m}px;
	display: block;
	margin-bottom: 5px;
`

export const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	margin-left: ${({ theme }) => theme.gridUnit * 3}px;
	display: inline-block;
	margin-top: ${({ theme }) => theme.gridUnit * 2.5}px;
`

export const SelectWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
export const SelectViewPort = styled(Select.Viewport)`
	display: flex;
	flex-direction: column;
	gap: 5px;
`
