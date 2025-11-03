import firebase_admin
from firebase_admin import credentials, firestore, auth
import os

def initialize_firebase():
    """
    Initializes the Firebase Admin SDK.
    """
    if not firebase_admin._apps:
        # TODO: Replace with your own service account key
        cred = credentials.Certificate("path/to/your/serviceAccountKey.json")
        firebase_admin.initialize_app(cred)

    return firestore.client()

def verify_token(id_token):
    """
    Verifies the Firebase ID token.
    """
    if not firebase_admin._apps:
        initialize_firebase()
    try:
        decoded_token = auth.verify_id_token(id_token)
        return decoded_token
    except Exception as e:
        print(e)
        return None
