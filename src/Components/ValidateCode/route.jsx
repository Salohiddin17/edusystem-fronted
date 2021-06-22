import "./route.scss"

import { useState, useEffect } from 'react'

function ValidateCode () {

	const [code, setCode] = useState("")
	const [submit, setSubmit] = useState(false)
	const [span, setSpan] = useState("")
    
	useEffect(() => {
		if(submit && code) {

			;(async () => {
				const response = await fetch('http://192.168.1.57:9010/users/validate-code', {
					method: "post",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						code
					})
				})

				const json = await response.json()
				console.log(json);

				setSubmit(false)
				setCode("")
				setSpan(json.message)
			})()

		}
	}, [submit, code, span])

	return (
        <>
            <main className="main-login">
                <div className="container">
                    <h1>Ferrari</h1>
                    <form
                    className="form"
                        onSubmit={e => {
                            e.preventDefault()
                            setSubmit(true)
                            e.target.reset()
                            setSpan()
                        }}
                    >
                        <h2>Validate</h2>
                        <span className="alert">{span}</span>
                        <input
                        type="number"
                        required
                        placeholder="Code" 
                        autoComplete="off" 
                        spellCheck={false} 
                        autoFocus={true}
                        name="code"
                        onKeyUp={e => setCode (e.target.value.trim() )} 
                        />
                        <div>
                            <button>Validate</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default ValidateCode