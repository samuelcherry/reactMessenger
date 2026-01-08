import {useState} from 'react'

interface UserPopupProps {
	onSubmit: (name: string) => void;
}

function UserPopup({onSubmit} : UserPopupProps) {
	
	const [name, setName] = useState("");


	function handleSubmit(e: React.FormEvent){
		e.preventDefault();
		if (!name.trim()) return
		onSubmit(name.trim());
	}


	return (
	<>
		<div className= "fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="bg-white rounded-lg p-6 w-96 shadow-xl">
				<h1 className="text-xl font-semibold mb-4">
					Enter your name
				</h1>

				<form onSubmit={handleSubmit}>
					<input
						autoFocus
						type="text"
						value = {name}
						onChange={e => setName(e.target.value)}
            			className="w-full border rounded px-3 py-2 mb-4"
            			placeholder="Your name"
					/>
					<button
						type="submit"
            			className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
         			>
						Continue
					</button>
				</form>
			</div>
		</div>
	</>
	)
}

export default UserPopup
