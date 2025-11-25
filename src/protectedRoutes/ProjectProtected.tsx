import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

const ProjectProtected = ({ children }: { children: ReactNode }) => {
    if (!localStorage.getItem("sb-cndbtgaifheduxginlre-auth-token")) {
        return <Navigate to="/login"/>
    }
    return (
        <>
            {children}
        </>
    )
}

export default ProjectProtected
