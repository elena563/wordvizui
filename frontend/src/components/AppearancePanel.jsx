export default function AppearancePanel(){

    return(
        <>
            <h2 className='font-bold my-4 text-xl'>Appearance Settings</h2>
            <form className="flex flex-col gap-4">
                <fieldset className="flex flex-col gap-2">
                    <label>
                        <input type="radio" name='ndims' checked/>
                        <input type="radio" name='ndims'/> Dark theme
                    </label>
                    <input type="color" name='points'/>
                    <label><input type="checkbox" name='lines' checked/> Guidelines</label>
                    <label><input type="checkbox" name='grid'/> Grid</label>
                </fieldset> 
                <button type="submit">Plot</button>
            </form>
        </>
    )
}