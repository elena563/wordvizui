from fastapi import FastAPI, UploadFile, File
from wordviz.loading import EmbeddingLoader
from wordviz.dim_reduction import reduce_dim
from pathlib import Path

app = FastAPI()

@app.get('/')
async def root():
    default_emb = 'glove.6B.100d.txt'
    loader = EmbeddingLoader()
    loader.load_from_file(default_emb, "glove")
    reduced = reduce_dim(loader.embeddings, n_dimensions=3)

    x = reduced[:, 0].tolist()
    y = reduced[:, 1].tolist()
    z = reduced[:, 2].tolist()

    return {
        "words": loader.tokens[:500],
        "x": x[:500],
        "y": y[:500],
        "z": z[:500]
    }


@app.post('/load')
async def load_embeddings(file: UploadFile = File(...)):
    data = await file.read()
    loader = EmbeddingLoader()
    loader.load_from_file(data.decode(), "word2vec")
    app.state.loader = loader
    return {"status": "loaded"}