
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function RegisterPage() {

    const { register, handleSubmit, formState: {errors} } =useForm();
    const {singup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() =>{
      if(isAuthenticated) navigate('/tasks');
    }, [isAuthenticated, navigate])


  return (
    <div className='bg-blue-950 max-w-md p-10 rounded-md'>

      {
        RegisterErrors.map((error, i) =>{
          <div className='bg-red-500 text-white p-2' key={i}>
            {error}
          </div>
        })
      }
        <form onSubmit={handleSubmit(async (values) => {
          singup(values);
        })}>
            <input type="text" {...register("username", {required:true})} placeholder='username' className='w-full bg-gray-50 text-black px-4 py-4 rounded-md my-2' />
            {
              errors.username && <p className='text-red-500'>Username is required</p>
            }
            <input type="email" {...register("email", {required:true})} placeholder='email'  className='w-full bg-gray-50 text-black px-4 py-4 rounded-md my-2'/>
            {
              errors.email && <p className='text-red-500'>email is required</p>
            }
            <input type="password" {...register("password", {required:true})} placeholder='password' className='w-full bg-gray-50 text-black px-4 py-4 rounded-md my-2' />
            {
              errors.password && <p className='text-red-500'>Password is required</p>
            }
            <button type="submit" className="rounded bg-blue-400 text-white px-4 my-2 py-2">Registrar</button>
        </form>
    </div>
  )
}

export default RegisterPage;