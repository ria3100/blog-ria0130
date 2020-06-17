import * as React from 'react'

import { firebase } from '~/lib/firebase'

export const useLike = (path: string) => {
  const isClient = typeof window !== 'undefined'

  const [uid, setUid] = React.useState<string>('')
  const [likedId, setLikedId] = React.useState<string>('')

  React.useEffect(() => {
    if (!isClient) return

    firebase.auth().onAuthStateChanged(user => {
      if (!user) return

      setUid(user.uid)

      const db = firebase.firestore()
      db.collection('liked')
        .where('uid', '==', user.uid)
        .where('path', '==', path)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setLikedId(doc.id)
          })
        })
    })
  }, [])

  const add = () => {
    const db = firebase.firestore()
    const current = { uid: uid, path }

    db.collection('liked')
      .add(current)
      .then(function(docRef) {
        setLikedId(docRef.id)
      })
  }

  const remove = () => {
    const db = firebase.firestore()
    db.collection('liked')
      .doc(likedId)
      .delete()
    setLikedId('')
  }

  const toggleLike = () => {
    if (!isClient) return

    // FIXME: 連打対策してない
    const toggle = !likedId ? add : remove
    toggle()
  }

  return {
    liked: !!likedId,
    toggleLike,
  }
}
