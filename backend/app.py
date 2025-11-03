import streamlit as st
from ai_models import get_model_pipeline, generate_text

def main():
    st.set_page_config(
        page_title="CodeGenie",
        page_icon="🤖",
        layout="wide",
        initial_sidebar_state="expanded",
    )

    st.title("CodeGenie Backend")
    st.write("Welcome to the Streamlit backend for CodeGenie!")

    st.sidebar.title("AI Models")
    model_name = st.sidebar.selectbox("Choose a model", ["gemma2b", "phi2", "codebert", "deepseek"])

    prompt = st.text_area("Enter your prompt:")

    if st.button("Generate"):
        if prompt:
            with st.spinner("Generating text..."):
                pipe = get_model_pipeline(model_name)
                if pipe:
                    generated_text = generate_text(pipe, prompt, model_name)
                    st.write(generated_text)
                else:
                    st.error("Model not available.")
        else:
            st.warning("Please enter a prompt.")

if __name__ == "__main__":
    main()
