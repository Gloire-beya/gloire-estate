import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signSuccess } from '../redux/user/userSlice '

export default function OAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth, provider)

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await res.json()
            dispatch(signSuccess(data))
            navigate('/')
        } catch (error) {
            console.log("Could not sign in with Google", error)
        }
    }

    return (
        <button onClick={handleGoogleClick} className="bg-red-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80" type="button">Continue with Google</button>
    )
}
