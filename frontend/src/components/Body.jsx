export default function Body () {
  return <section className="bg-blue-100 w-full flex">
    {/* <Login/> */}
    <Signup/>
  </section>
}

function Login() {


  return <form className="bg-blue-500 h-fit w-min px-5 py-2 my-32 mx-auto text-center rounded-md space-y-4 border-b-1 border-l-1 shadow-lg shadow-blue-700 border-blue-300">
    <div>
      <h1 className="text-xl">Welcome back!</h1>
      <p>Log in to access your account</p>
    </div>
    <div className="space-y-1">

    <input placeholder=" Enter your email" type="email" className="rounded-sm " required/>
    <input placeholder=" Enter your password" type="password" className="rounded-sm" required/>
    <button className="bg-blue-700 rounded-full px-2">submit</button>
    </div>
    <p>
      Not a user? <a href="#">Sign up</a>
    </p>
  </form>
}


function Signup () {

}