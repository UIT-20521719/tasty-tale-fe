import { storage } from "@/firebase/store";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { Image } from "react-native";

export type Props = React.ComponentPropsWithoutRef<typeof Image> & {
	id: string;
};

export default function FirebaseImage({ id, ...props }: Props) {
	const [url, setUrl] = useState<string>();

	useEffect(() => {
		const pathReference = ref(storage, id);
		getDownloadURL(pathReference)
			.then((url) => {
				setUrl(url);
			})
			.catch((error) => {
				console.error({ error });
				// Handle any errors
			});
	}, []);

	return url ? <Image {...props} src={url} /> : null;
}
