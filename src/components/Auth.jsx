const API_URL = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/users/register'


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

      
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

        }}

        //this page is a work in progress, as I really have no idea how to acess tokens at this time
        