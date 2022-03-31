
const Error = ({mensaje}) => {
  return (
    <div className='text-center uppercase bg-red-800 text-white p-2 font-bold mb-3 rounded-md'>
        <p>{mensaje} </p>
    </div>
  )
}

export default Error