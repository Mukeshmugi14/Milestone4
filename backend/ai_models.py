from transformers import pipeline

def get_model(model_name):
    """
    Loads a Hugging Face model.
    """
    return pipeline("text-generation", model=model_name)

def generate_text(model, prompt):
    """
    Generates text using a Hugging Face model.
    """
    return model(prompt)
