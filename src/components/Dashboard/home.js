import { useRef } from "react"
import { auth } from "../../firebase"

const HomeDashboard = () => {
    const form = useRef();
    const submitProject = (e) => {
        e.preventDefault()
        const img = form.current[0]?.files[0]
        const title = form.current[1]?.value
        const description = form.current[2]?.value
        const tech = form.current[3]?.value
        const source = form.current[4]?.value
        const demo = form.current[5]?.value
    }
    return (
        <div className="dashboard"> 
            <form ref={form} onSubmit={submitProject}>
                <p><input type='file' placeholder="Image Url" /></p>
                <p><input type='text' placeholder="Title" /></p>
                <p><textarea placeholder="Description"/></p>
                <p><input type='text' placeholder="Tech" /></p>
                <p><input type='url' placeholder="Source" /></p>
                <p><input type='url' placeholder="Demo" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </form>
         </div>
    )
}

export default HomeDashboard