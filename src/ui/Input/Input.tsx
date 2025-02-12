import { StyledInput, StyledLabel } from './styles'
import { InputProps } from './types'

export const Input = ({ placeholder, label, onChange, value }: InputProps) => {
	return (
		<StyledLabel>
			{label}
			<StyledInput onChange={onChange} value={value} placeholder={placeholder} />
		</StyledLabel>
	)
}
