import User from '../models/user.models.js'
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';


export const register = async (req, res) =>{
    const{username, email, password} = req.body;
    //console.log(username, email, password);
    //res.send('Registrando') ESTO ES PARA VERIFICAR DE QUE SI ESTE FUNCIONANDO
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password:passwordHash
        });
        const userSaved = await newUser.save();
        const token = await createTokenAccess({ id: userSaved._id });
        res.cookie('token', token)
        res.status(201).json({
            id:userSaved._id,
            username: userSaved.username,
            email:userSaved.email
        })
    } catch (error) {
        res.status(201).json({ message:error.message });
    }
}




export const login = (req, res) => res.send("login")