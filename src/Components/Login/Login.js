import React, { useContext } from 'react'
import { UserStates } from '../../App'

function Login() {
    const { ModalState } = useContext(UserStates)
    const { modalOpen, setModalOpen } = ModalState



    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Login here</h1>
            <button onClick={() => setModalOpen(false)}>Modal toggle</button>
        </div>
    )
}

export default Login
