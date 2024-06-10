import { storage } from "@/firebase/store";
import { ref, uploadBytes } from "firebase/storage";
import { getBlobFromUri } from "./getBlobFromUri";

export async function uploadToFirebaseStorage(uri: string) {
	const fileName = new Date().getTime().toString();
	const storageRef = ref(storage, fileName);

	uploadBytes(storageRef, await getBlobFromUri(uri)).then((snapshot) => {
		// console.log({ snapshot });
	});

	return fileName;
}
