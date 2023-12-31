import {BrowserRouter, Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TaskPage from './pages/TaskPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import { AuthProvider } from './context/authContext'
import ProtectedRoutes from './ProtectedRoutes'
import { TasksProvier } from './context/TaskContext'
function App() {
  return (
   <>
      <AuthProvider>
        <TasksProvier>
            <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<HomePage/>} />
                      <Route path='/login' element={<LoginPage/>} />
                      <Route path='/register' element={<RegisterPage/>} />

                    <Route element={<ProtectedRoutes/>}> 
                        <Route path='/tasks' element={<TaskPage/>} />
                        <Route path='/add-task' element={<TaskFormPage/>} />
                        <Route path='/tasks/:id' element={<TaskFormPage/>} />
                        <Route path='/profile' element={<ProfilePage/>} />
                    </Route>
                </Routes>
              </BrowserRouter>
        </TasksProvier>
      </AuthProvider> 
   </>
  )
}

export default App
