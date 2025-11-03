import streamlit as st

def main():
    st.set_page_config(
        page_title="CodeGenie",
        page_icon="🤖",
        layout="wide",
        initial_sidebar_state="expanded",
    )

    st.title("CodeGenie Backend")
    st.write("Welcome to the Streamlit backend for CodeGenie!")

if __name__ == "__main__":
    main()
