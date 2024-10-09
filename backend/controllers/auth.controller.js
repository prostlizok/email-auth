import { User } from '../models/user.model.js'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js'

export const signup = async (req, res) => {
    const { email, name } = req.body;
    try {
        if (!email || !name) {
            throw new Error("All fields are required");
        }

        const userAlreadyExists = await User.findOne({email});
        if (userAlreadyExists) {
            res.status(400).json({success: false, message: "User already exists"})
        }

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User ({
            email, 
            name, 
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })

        await user.save();
        
        // jwt 
        generateTokenAndSetCookie(res, user._id)

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc
            }
        })

    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
}

export const login = async (req, res) => {
    res.send("login route")
}

export const logout = async (req, res) => {
    res.send("logout route")
}