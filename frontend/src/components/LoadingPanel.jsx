import { useState, useEffect } from "react"

export default function LoadingPanel(){
    const [file, setFile] = useState(null)

    return(
        <>
            <h2 className='font-bold my-4 text-xl'>Loading</h2>
            <form className="flex flex-col gap-4">
                <div className="file-upload-form">
                <div className="file-upload-label">
                    <div className="file-upload-design">
                    <svg height="1em" viewBox="0 0 640 512">
                        <path
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                    </svg>
                    <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                    {file === null ?
                        <>
                            <p>Drag and Drop</p>
                            <p>or</p>
                            <label htmlFor="file" className="browse-button cursor-pointer">Browse file</label>
                        </>
                        :
                        <>
                            <p className="mb-4">{file.name}</p>
                            <button type="button" className="browse-button" onClick={(e) => {e.stopPropagation(); setFile(null)}}>Remove file</button>
                        </>
                    }
                    
                    </div>
                </div>
                </div>
                <fieldset className="flex flex-col gap-2">
                    <legend>Embedding Model:</legend>
                    <select name='model' className="px-2 py-1 rounded-md cursor-pointer focus:outline-none border border-gray-300">
                        <option>Word2Vec</option>
                        <option>GloVe</option>
                        <option>FastText</option>
                    </select>
                </fieldset> 
                <button type="submit">Load</button>
            </form>
        </>
    )
}