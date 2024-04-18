import Link from "next/link";

export default  function NotFound(){
  return <main className="not-found">
    <h1>404</h1>
    <h1>Not found</h1>
    <p>Unfortunately, we couldn't find the requested page or resource.</p>
    <Link className="link"  href={'/'}>Return to home</Link>
  </main>
}