import streamlit as st
from streamlit_lottie import st_lottie
import requests
import sys
sys.path.append('backend')
from ai_models import get_model_pipeline, generate_text

# --- Load Lottie Animation ---
def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()

# --- Load CSS ---
def local_css(file_name):
    with open(file_name) as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

# --- Page Config ---
st.set_page_config(
    page_title="CodeGenie",
    page_icon="🤖",
    layout="wide",
)

# --- Load Custom CSS ---
local_css("frontend/styles.css")

# --- Sidebar Navigation ---
st.sidebar.title("Navigation")
page = st.sidebar.radio("Go to", ["Home", "AI Workspace", "Leaderboards", "Quizzes", "Flashcards"])

# --- Main Content ---
st.title("CodeGenie")

if page == "Home":
    lottie_url = "https://assets5.lottiefiles.com/packages/lf20_V9t630.json"
    lottie_json = load_lottieurl(lottie_url)
    if lottie_json:
        st_lottie(lottie_json, speed=1, width=200, height=200, key="initial")

    st.markdown("""
        <div class="card">
            <h2>Welcome to CodeGenie! 🚀</h2>
            <p>Your AI-powered coding assistant. Get ready to supercharge your learning and development.</p>
        </div>
    """, unsafe_allow_html=True)
elif page == "AI Workspace":
    st.header("AI Workspace")
    st.write("Generate code, get explanations, and more.")

    model_name = st.selectbox("Choose a model", ["gemma2b", "phi2", "codebert", "deepseek"])
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
elif page == "Leaderboards":
    st.header("Leaderboards")
    st.write("See how you rank against other users.")
elif page == "Quizzes":
    st.header("Quizzes")
    st.write("Test your coding knowledge.")
elif page == "Flashcards":
    st.header("Flashcards")
    st.write("Review key concepts and definitions.")
