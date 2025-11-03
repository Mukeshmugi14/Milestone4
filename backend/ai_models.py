from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
import torch

# Define the available models
SUPPORTED_MODELS = {
    "gemma2b": "google/gemma-2b",
    "phi2": "microsoft/phi-2",
    "codebert": "microsoft/codebert-base",
    "deepseek": "deepseek-ai/deepseek-coder-1.3b-instruct"
}

def get_model_pipeline(model_name="gemma2b"):
    """
    Loads a Hugging Face model pipeline for text generation.
    """
    if model_name not in SUPPORTED_MODELS:
        raise ValueError(f"Model '{model_name}' is not supported.")

    model_id = SUPPORTED_MODELS[model_name]

    try:
        # For CodeBERT, which is not a text-generation model, we might need a different pipeline
        if model_name == "codebert":
             return pipeline("fill-mask", model=model_id)

        tokenizer = AutoTokenizer.from_pretrained(model_id)
        model = AutoModelForCausalLM.from_pretrained(model_id)

        # Note: For larger models, you might need to specify device_map="auto"
        # and ensure you have the necessary hardware (GPU).
        return pipeline("text-generation", model=model, tokenizer=tokenizer)

    except Exception as e:
        print(f"Error loading model {model_name}: {e}")
        return None

def generate_text(pipe, prompt, model_name="gemma2b"):
    """
    Generates text using a Hugging Face model pipeline.
    """
    if not pipe:
        return "Model not available."

    try:
        if model_name == "codebert":
             # CodeBERT is a fill-mask model, so the prompt should contain a <mask> token
             return pipe(prompt)[0]['sequence']

        sequences = pipe(
            prompt,
            max_length=150,
            num_return_sequences=1,
            eos_token_id=pipe.tokenizer.eos_token_id
        )
        return sequences[0]['generated_text']
    except Exception as e:
        print(f"Error during text generation: {e}")
        return "Error generating text."
