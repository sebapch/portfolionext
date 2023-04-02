import styles from './layout.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sebastián Medina</title>
      </head>
      <body>
      <div className={styles.header}>
  <div>
   <h1 style={{ marginTop: 0 }}>My Portfolio</h1>
  </div>
 <div>
<Link href="/profile/teacher">navigate to teacher profile</Link>
  </div>
  <div>
    <Link href="/profile/student">navigate to student profile</Link>
  </div>
</div>
        <div>
          {children}
        </div>
      </body>
    </html>)
}