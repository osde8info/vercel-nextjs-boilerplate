import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
