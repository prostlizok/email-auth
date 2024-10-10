import {Input} from "@/components/ui/Input";

import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Button } from "@/components/ui/button";


const SignUpPage = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div
			className='max-w-md w-full bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-xl shadow-xl 
			overflow-hidden'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-clip-text'>
					UNIBOT
				</h2>

				<form onSubmit={handleSignUp}>
					<Input
						icon={Mail}
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Button
						className='mt-5 w-full py-3 px-4'
						type='submit'
						disabled={isLoading}
					>
					Log in
					</Button>
				</form>
			</div>
		</div>
	);
};
export default SignUpPage;
