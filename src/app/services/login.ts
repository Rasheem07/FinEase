export async function Login(email: string, password: string): Promise<string | null> {
    try {
        const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const json = await response.json();
        localStorage.setItem('token', json.authtoken);

        return null; // Return null if login is successful
    } catch (error) {
        return error as string; // Return the error message if an error occurs
    }
}
