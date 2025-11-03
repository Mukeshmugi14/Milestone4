import plotly.express as px
import pandas as pd

def create_user_analytics_chart(data):
    """
    Creates a user analytics chart.
    """
    df = pd.DataFrame(data)
    fig = px.bar(df, x="date", y="users", title="User Sign-ups")
    return fig
