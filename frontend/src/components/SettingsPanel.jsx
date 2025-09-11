import { useState, useEffect } from "react"

export default function SettingsPanel(){


    return(
        <>
            <h2 className='font-bold my-4 text-xl'>Technical Settings</h2>
            <form className="flex flex-col gap-4 overflow-y-scroll h-[calc(86dvh-75px)]  pr-4">
                <fieldset className="flex flex-col gap-2">
                    <legend className="font-semibold text-lg">Dimensionality Reduction</legend>
                    <label>
                        2D <input type="radio" name='ndims' checked/>
                        <input type="radio" name='ndims'/> 3D
                    </label>
                    <label>Reduction method:</label>
                    <select name='red_method'>
                        <option>PCA</option>
                        <option>T-SNE</option>
                        <option>UMAP</option>
                    </select>
                </fieldset> 
                <hr />
                <fieldset className="flex flex-col gap-2">
                    <legend className="font-semibold text-lg">Subsetting</legend>
                    <label>Words number:</label>
                    <input type="number" name='subset'/> 
                </fieldset> 
                <hr />
                <fieldset className="flex flex-col gap-2">
                    <legend className="font-semibold text-lg">Clustering
                        <input type="radio" name='ndims'/>
                    </legend>
                    <label>Clustering method:</label>
                    <select name='clust_method'>
                        <option>K-means</option>
                        <option>DBSCAN</option>
                        <option>Hierarchical</option>
                    </select>
                    <label>Clusters number:</label>
                    <input type="number" name='nclusters'/>
                </fieldset> 
                <hr />
                <fieldset className="flex flex-col gap-2">
                    <legend className="font-semibold text-lg">Similar words search
                        <input type="radio" name='ndims'/>
                    </legend>
                    <label>Similarity metric:</label>
                    <select name='simil_metric'>
                        <option>Cosine</option>
                        <option>Euclidean</option>
                        <option>Dot product</option>
                    </select>
                    <label>Number of similar words to find:</label>
                    <input type="number" name='nsimilar'/>
                </fieldset> 
                <button type="submit">Plot</button>
            </form>
        </>
    )
}