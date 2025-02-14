import { Link } from "react-router-dom";

export default function NoPageFound() {
    return (<div className="p-52 d1 grid gap-4 text-3xl">
        <h1>No Page found</h1>
        <Link to='/'>Link</Link>
        <a href="/">Anchor</a>
    </div>)
}