import React from 'react'

const ErrorMessage = ({message}) => {
  return (
      <div className='bg-red-100 text-red-800 p-2 rounded mb-4 text-center'>
          {message}
    </div>
  )
}

export default ErrorMessage