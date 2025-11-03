import unittest
from unittest.mock import MagicMock
from backend.ai_models import generate_text, get_model_pipeline


class TestAIModels(unittest.TestCase):
    def test_generate_text_with_codebert(self):
        pipe = get_model_pipeline(model_name="codebert")
        prompt = "print('Hello, <mask>!')"
        result = generate_text(pipe, prompt, model_name="codebert")

        # Before the fix, this will fail because the result is a list of dictionaries
        self.assertIsInstance(result, str)


if __name__ == "__main__":
    unittest.main()
