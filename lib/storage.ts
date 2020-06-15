import { firebase } from '~/lib/firebase'

export const getStorageDownloadURL = async (path: string) => {
  if (firebase.apps.length) {
    const spaceRef = firebase
      .storage()
      .ref()
      .child(path)
    return await spaceRef.getDownloadURL()
  }
}
