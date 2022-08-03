// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection, DocumentData } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDONFSe58zFjDCMvj-k1z2eprIruQt81nQ',
  authDomain: 'ideamans-react-daisyui-study.firebaseapp.com',
  projectId: 'ideamans-react-daisyui-study',
  storageBucket: 'ideamans-react-daisyui-study.appspot.com',
  messagingSenderId: '671972502999',
  appId: '1:671972502999:web:a5369e1c9906c1193aef92',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export type Item = {
  name: string
}

export async function queryItems() {
  const db = getFirestore(app)
  const items = await getDocs(collection(db, 'items'))
  return items.docs.map((doc) => doc.data() as Item)
}
