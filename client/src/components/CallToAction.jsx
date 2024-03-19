import { Button } from 'flowbite-react'

function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 items-center rounded-tl-3xl rounded br-3xl text-center">
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Want to learn more about Javascript?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with Javscript algorithms
        </p>
        <Button gradientDuoTone="purpleToPink" className='rounded-tl-xl rouded-bl-none'>
          <a href='https://github.com/anonystick/anonystick/tree/main/Library/javascript' target="_blank" 
            rel="noopener noreferrer">
            Javscript algorithms  
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://cloud.z.com/vn/wp-content/uploads/2024/01/Screenshot_1-6.png" />
      </div>
    </div>
  )
}

export default CallToAction
