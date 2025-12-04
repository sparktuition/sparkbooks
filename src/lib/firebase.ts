import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Load Firebase config from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

let db: ReturnType<typeof getFirestore> | null = null

try {
  console.info('[firebase] initializing with projectId:', firebaseConfig.projectId)
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
  console.info('[firebase] initialized, firestore available:', !!db)
} catch (e) {
  // Initialization may fail in tests or if env vars are missing — surface null db
  console.error('[firebase] initialization failed:', e)
}

export async function addContactSubmission(data: { name: string; email: string; message: string }) {
  if (!db) {
    const err = new Error('Firestore not initialized. Check Firebase config and network.')
    console.error('[firebase] addContactSubmission blocked - no db', { err, payload: data })
    throw err
  }

  const col = collection(db, 'contact_submissions')
  console.info('[firebase] addContactSubmission - attempting write', { projectId: firebaseConfig.projectId, collection: 'contact_submissions', payload: { name: data.name, email: data.email } })
  try {
    const docRef = await addDoc(col, {
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: serverTimestamp(),
    })
    console.info('[firebase] addContactSubmission - success', { id: docRef.id })
    return docRef.id
  } catch (error) {
    // log detailed error for debugging purposes
    console.error('[firebase] addContactSubmission - failed to write', { error, projectId: firebaseConfig.projectId, payload: data })
    throw error
  }
}

export async function addRetreatSubmission(data: { name: string; email: string; phone?: string; interest: string; notes?: string }) {
  if (!db) {
    const err = new Error('Firestore not initialized. Check Firebase config and network.')
    console.error('[firebase] addRetreatSubmission blocked - no db', { err, payload: data })
    throw err
  }

  const col = collection(db, 'retreat_submissions')
  console.info('[firebase] addRetreatSubmission - attempting write', { projectId: firebaseConfig.projectId, collection: 'retreat_submissions', payload: { name: data.name, email: data.email, phone: data.phone } })
  try {
    const docRef = await addDoc(col, {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      interest: data.interest,
      notes: data.notes || null,
      createdAt: serverTimestamp(),
    })
    console.info('[firebase] addRetreatSubmission - success', { id: docRef.id })
    return docRef.id
  } catch (error) {
    console.error('[firebase] addRetreatSubmission - failed to write', { error, projectId: firebaseConfig.projectId, payload: data })
    throw error
  }
}

export default db
