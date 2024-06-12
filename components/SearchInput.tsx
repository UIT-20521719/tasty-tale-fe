import { TextInput } from "react-native";

type Props = {
	placeholder: string;
	value: any;
	onChangeText?: (text: any) => any;
};

export default function SearchInput({
	placeholder,
	value,
	onChangeText,
}: Props) {
	return (
		<TextInput
			style={{
				borderRadius: 16,
				backgroundColor: "#F2F3F4",
				fontSize: 16,
				paddingVertical: 12,
				paddingHorizontal: 16,
			}}
			placeholder={placeholder}
			value={value}
			onChangeText={onChangeText}
		/>
	);
}
