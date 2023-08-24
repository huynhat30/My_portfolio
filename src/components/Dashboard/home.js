import { useRef } from "react"
import { auth, db, storage } from "../../firebase"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from "firebase/firestore/lite";

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

        const storageRef = ref(storage, `project/${img.name}`)

        uploadBytes(storageRef, img).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    saveProject({
                        img: downloadUrl,
                        title,
                        description,
                        tech,
                        source,
                        demo
                    })
                }, () => {
                    saveProject({
                        img: null,
                        title,
                        description,
                        tech,
                        source,
                        demo
                    })
                })
            }, () => {
                saveProject({
                    img: null,
                    title,
                    description,
                    tech,
                    source,
                    demo
                })
            }
        )
    }

    const saveProject = async (project) => {
        console.log(project)
        try {
            await addDoc(collection(db, 'portfolio'), project)
            window.location.reload(false)
        }
        catch (err){
            console.log('Fail to upload to database\n\n')
            console.log(err)
        }
    }

    return (
        <div className="dashboard"> 
            <form ref={form} onSubmit={submitProject}>
                <p><input type='file' placeholder="Image Url" /></p>
                <p><input type='text' placeholder="Title" /></p>
                <p><textarea placeholder="Description"/></p>
                <p><input type='text' placeholder="Tech" /></p>
                <p><input type='text' placeholder="Source" /></p>
                <p><input type='text' placeholder="Demo" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </form>
         </div>
    )
}

export default HomeDashboard