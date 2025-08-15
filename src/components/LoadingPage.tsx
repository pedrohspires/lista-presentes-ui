import { ImSpinner8 } from 'react-icons/im'

function LoadingPage() {
    return (
        <div className='w-screen h-screen grid place-items-center'>
            <ImSpinner8 className='animate-spin scale-200' />
        </div>
    )
}

export default LoadingPage