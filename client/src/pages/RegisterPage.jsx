
import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';



function RegisterPage() {

    const { register, handleSubmit } =useForm();

  return (
    <div className='bg-blue-950 max-w-md p-10 rounded-md'>
        <form onSubmit={handleSubmit(async (values) => {
          //console.log(values);
          
        })}>
            <input type="text" {...register("username", {required:true})} placeholder='username' className='w-full bg-gray-50 text-black px-4 py-4 rounded-md my-2' />
            <input type="email" {...register("email", {required:true})} placeholder='email'  className='w-full bg-gray-50 text-black px-4 py-4 rounded-md my-2'/>
            <input type="password" {...register("password", {required:true})} placeholder='password' className='w-full bg-gray-50 text-black px-4 py-4 rounded-md my-2' />
            <button type="submit" className="rounded bg-blue-400 text-white px-4 my-2 py-2">Registrar</button>
        </form>
    </div>
  )
}

export default RegisterPage;