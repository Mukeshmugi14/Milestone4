# CodeGenie

CodeGenie is a web application designed to help developers learn and grow. It features an AI-powered workspace, leaderboards, quizzes, and flashcards, all running in a single, easy-to-use Streamlit application.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Run the application:**
    ```bash
    streamlit run app.py
    ```

## Windows Installation Notes

If you are running this application on a Windows machine, you may encounter a `WinError 126` related to a missing DLL file when PyTorch is imported. This is a known issue caused by missing system dependencies.

To fix this, you will need to install the **Microsoft C++ Build Tools**.

1.  **Download the installer** from the official Visual Studio site:
    [https://visualstudio.microsoft.com/visual-cpp-build-tools/](https://visualstudio.microsoft.com/visual-cpp-build-tools/)

2.  Run the installer and select the **"Desktop development with C++"** workload.

3.  Ensure that **"MSVC v143 - VS 2022 C++ x64/x86 build tools"** is selected in the installation details.

4.  After the installation is complete, it is recommended to do a clean reinstall of PyTorch:
    ```bash
    pip uninstall torch torchvision torchaudio
    pip install torch torchvision torchaudio
    ```
