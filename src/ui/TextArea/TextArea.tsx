import { StyledLabel, StyledTextArea } from './styles'
import { TextAreaProps } from './types'

export const TextArea = ({ placeholder, label, onChange, value }: TextAreaProps) => {
	return (
		<StyledLabel>
			{label}
			<StyledTextArea onChange={onChange} value={value} placeholder={placeholder} />
		</StyledLabel>
	)
}
