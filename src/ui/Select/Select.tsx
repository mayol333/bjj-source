import * as Component from '@radix-ui/react-select'

import {
	ErrorMessage,
	SelectContent,
	SelectIcon,
	SelectItem,
	SelectReset,
	SelectTrigger,
	SelectViewPort,
	SelectWrapper,
	StyledLabel,
} from './styles'
import { FC, Ref, forwardRef, useState } from 'react'
import { SelectOptionProps, SelectProps } from './types'

import { CheckIcon } from '@radix-ui/react-icons'

export const Select: FC<SelectProps> = ({ placeholder, value, onChange, options, label, errorMessage }) => {
	const [open, setOpen] = useState(false)

	const handleSelectReset = () => onChange('')

	const handleSelect = (value: string) => {
		if (isNaN(Number(value))) onChange(value)
		else onChange(Number(value))
	}

	return (
		<SelectWrapper>
			<StyledLabel htmlFor={label}>{label}</StyledLabel>
			<Component.Root value={value?.toString()} onValueChange={handleSelect} onOpenChange={setOpen}>
				<SelectTrigger $error={!!errorMessage} $open={open}>
					<Component.Value placeholder={placeholder} />
					<Component.Icon>
						<SelectIcon />
					</Component.Icon>
				</SelectTrigger>
				<SelectContent collisionPadding={0} position="popper">
					<SelectViewPort>
						<SelectReset onClick={handleSelectReset}>{placeholder}</SelectReset>
						{options.map(({ value, label }) => (
							<SelectOption key={value} value={value}>
								{label}
							</SelectOption>
						))}
					</SelectViewPort>
				</SelectContent>
			</Component.Root>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</SelectWrapper>
	)
}

const SelectOption = forwardRef(({ children, ...props }: SelectOptionProps, ref: Ref<HTMLDivElement> | undefined) => {
	return (
		<SelectItem {...props} ref={ref}>
			<Component.ItemText>{children}</Component.ItemText>
			<Component.ItemIndicator>
				<CheckIcon />
			</Component.ItemIndicator>
		</SelectItem>
	)
})

SelectOption.displayName = 'SelectOption'
