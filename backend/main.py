from fastapi import FastAPI, UploadFile, File
from wordviz.loading import EmbeddingLoader
from wordviz.dim_reduction import reduce_dim
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def root():
    default_emb = 'glove_default_5000.txt'
    loader = EmbeddingLoader()
    loader.load_from_file(default_emb, "glove")
    reduced = reduce_dim(loader.embeddings, n_dimensions=3)

    x = reduced[:, 0].tolist()
    y = reduced[:, 1].tolist()
    z = reduced[:, 2].tolist()

    return {
        "words": loader.tokens,
        "x": x,
        "y": y,
        "z": z
    }


'''@app.post('/load')
async def load_embeddings(file: UploadFile = File(...)):
    data = await file.read()
    loader = EmbeddingLoader()
    loader.load_from_file(data.decode(), "word2vec")
    app.state.loader = loader
    return {"status": "loaded"}'''