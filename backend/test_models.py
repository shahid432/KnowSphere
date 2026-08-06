from google import genai

client = genai.Client(
    api_key="AQ.Ab8RN6JSZJTHOxf2QHezk9evpiH1HGZAj_2S3zoUS9E7ztoiA"
)

for model in client.models.list():
    print(model.name)