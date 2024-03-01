<<<<<<< HEAD
import {Link} from 'react-router-dom'

function Page404(){
  return(
    <>
        <div className="flex flex-col space-y-6 text-center mt-32">
        <h1 className="text-5xl text-gray-600">404</h1>
        <span className="text-7xl text-gray-500">Page Not Found</span>
        <span className="text-lg text-gray-500">The Page you are looking for doesn't exist or an error occurred.
        Go back !</span>
        <Link to="/Body">Go To Home Page.</Link>
      </div>
    </>
  )
}

=======
import {Link} from 'react-router-dom'

function Page404(){
  return(
    <>
        <div className="flex flex-col space-y-6 text-center mt-32">
        <h1 className="text-5xl text-gray-600">404</h1>
        <span className="text-7xl text-gray-500">Page Not Found</span>
        <span className="text-lg text-gray-500">The Page you are looking for doesn't exist or an error occurred.
        Go back !</span>
        <Link to="/">Go To Home Page.</Link>
      </div>
    </>
  )
}

>>>>>>> a0a7b3fb40d39ad0594530e0f4372e8a669bc056
export default Page404;