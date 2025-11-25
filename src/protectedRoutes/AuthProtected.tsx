import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

const AuthProtected = ({ children }: { children: ReactNode }) => {
  if (localStorage.getItem("sb-cndbtgaifheduxginlre-auth-token")) {
    return <Navigate to="/" />
  }
  return (
    <>
      {children}
    </>
  )
}

export default AuthProtected
