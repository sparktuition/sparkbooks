import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Using explicit client config provided by the user
const firebaseConfig = {
  apiKey: "AIzaSyAIrDjFDHg6ziZ0E7fEGYkA8vqEepRRItw",
  authDomain: "the-spark-books.firebaseapp.com",
  projectId: "the-spark-books",
  // Use the correct bucket name that has CORS configured
  storageBucket: "the-spark-books.firebasestorage.app",
  messagingSenderId: "219292792958",
  appId: "1:219292792958:web:37102675b97a0b697c402f",
  measurementId: "G-7MCT3M96R7",
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
