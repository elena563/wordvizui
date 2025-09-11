export default function LoadingPanel(){

    return(
        <>
            <h2 class='font-bold my-4 text-xl'>Loading</h2>
            <form className="flex flex-col gap-4">
                <input type='file'/>
                <fieldset className="flex flex-col gap-2">
                    <legend>Embedding Model:</legend>
                    <select name='model'>
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