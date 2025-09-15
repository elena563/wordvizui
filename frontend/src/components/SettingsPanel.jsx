import { useState, useEffect } from "react"
import CounterInput from "./CounterInput";

export default function SettingsPanel(){
    const [isSimilActive, setIsSimilActive] = useState(false);
    const [isClusterActive, setIsClusterActive] = useState(false);
    const [isSubsetActive, setIsSubsetActive] = useState(false);
    const [nSimil, setNSimil] = useState(10);
    const [nCluster, setNCluster] = useState(5);
    const [subsetSize, setSubsetSize] = useState(1000);

    return(
        <>
            <h2 className='font-bold my-4 text-xl'>Technical Settings</h2>
            <form className="flex flex-col gap-4 overflow-y-scroll h-[calc(86dvh-75px)]  pr-4">
                <fieldset className="flex flex-col gap-2">
                    <legend className="font-semibold text-lg">Dimensionality Reduction</legend>
                    <div className="flex items-center gap-2">
                        <span>2D</span><label className="toggle-switch">
                        <input type="checkbox" name='3dims' />
                        <div className="toggle-switch-background">
                            <div className="toggle-switch-handle"></div>
                        </div>
                        </label><span>3D</span>
                    </div>
                    <label>Reduction method:</label>
                    <select name='red_method' className="px-2 py-1 rounded-md cursor-pointer focus:outline-none border border-gray-300">
                        <option>PCA</option>
                        <option>T-SNE</option>
                        <option>UMAP</option>
                    </select>
                </fieldset> 
                <hr />
                <fieldset className="flex flex-col gap-2" style={{opacity: isSubsetActive ? '100%' : '50%', transition: 'opacity 0.5s ease'}}>
                    <div className="flex items-center gap-2">
                        <label className="toggle-switch">
                        <input type="checkbox" name='subsetActive' checked={isSubsetActive} onChange={(e) => setIsSubsetActive(e.target.checked)}/>
                        <div className="toggle-switch-background">
                            <div className="toggle-switch-handle"></div>
                        </div>
                        </label><legend className="font-semibold text-lg m-0">Subsetting</legend>
                    </div>
                    <label>Words number:</label>
                    <CounterInput name='subset' value={subsetSize} onChange={setSubsetSize} min='10' max='5000' disabled={!isSubsetActive}/>
                </fieldset> 
                <hr />
                <fieldset className="flex flex-col gap-2" style={{opacity: isClusterActive ? '100%' : '50%', transition: 'opacity 0.5s ease'}}>
                    <div className="flex items-center gap-2">
                        <label className="toggle-switch">
                        <input type="checkbox" name='clustActive' checked={isClusterActive} onChange={(e) => setIsClusterActive(e.target.checked)}/>
                        <div className="toggle-switch-background">
                            <div className="toggle-switch-handle"></div>
                        </div>
                        </label><legend className="font-semibold text-lg m-0">Clustering</legend>
                    </div>
                    <label>Clustering method:</label>
                    <select disabled={!isClusterActive} name='clust_method' className="px-2 py-1 rounded-md cursor-pointer focus:outline-none border border-gray-300">
                        <option>K-means</option>
                        <option>DBSCAN</option>
                        <option>Hierarchical</option>
                    </select>
                    <label>Clusters number:</label>
                    <CounterInput name='nclusters' value={nCluster} onChange={setNCluster}  min='1' max='1000' disabled={!isClusterActive}/>
                </fieldset> 
                <hr />
                <fieldset className="flex flex-col gap-2" style={{opacity: isSimilActive ? '100%' : '50%', transition: 'opacity 0.5s ease'}}>
                    <div className="flex items-center gap-2">
                        <label className="toggle-switch">
                        <input type="checkbox" name='similActive' checked={isSimilActive} onChange={(e) => setIsSimilActive(e.target.checked)} />
                        <div className="toggle-switch-background">
                            <div className="toggle-switch-handle"></div>
                        </div>
                        </label><legend className="font-semibold text-lg m-0">Similar words</legend>
                    </div>
                    <label>Similarity metric:</label>
                    <select name='simil_metric' disabled={!isSimilActive} className="px-2 py-1 rounded-md cursor-pointer focus:outline-none border border-gray-300">
                        <option>Cosine</option>
                        <option>Euclidean</option>
                        <option>Dot product</option>
                    </select>
                    <label>Number of similar words to find:</label>
                    <CounterInput name='nsimilar' value={nSimil} onChange={setNSimil} min='5' max='500' disabled={!isSimilActive}/>
                </fieldset>
                <button type="submit">Plot</button>
            </form>
        </>
    )
}