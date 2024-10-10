import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";


import { Toaster } from "react-hot-toast";



function App() {

	return (
		<div
			className='min-h-screen from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
			<FloatingShape color='bg-blue-400' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-blue-400' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-blue-400' size='w-32 h-32' top='40%' left='-10%' delay={2} />

			<Routes>

				<Route
					path='/signup'
					element={<SignUpPage />}/>
				<Route
					path='/login'
					element={<LoginPage />}
				/>

				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
