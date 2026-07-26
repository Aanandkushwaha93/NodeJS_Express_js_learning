export default function login() {
    return(`
        <form action="/submit" method="post">
        <input name='name' placeholder='Enter name'/> </br></br>
        <input name='password' placeholder='Enter password'/> </br></br>
        <button>Login</button>
        </form>
        <a href='/'>Go to home</a>
        `)
}