import requests
import json
import time
from dotenv import load_dotenv
import os

# Load variables from the .env file
load_dotenv()

# Access API keys using the os.environ dictionary
api_key = os.environ.get("API_KEY")
auth_key = os.environ.get("AUTH_KEY")


class QuestionRequestFailed(Exception):
    pass

def get_run_id():
    url = "https://api-v2.agenthub.dev/remote_start_pipeline"
    headers = {
        "Content-Type": "application/json",
        "x-auth-key": f"{auth_key}"
    }
    data = {
        "user_id": f"{auth_key}", 
        "saved_item_id": "or8UMkWDy6F65rtCazMw6m",
        "api_key": f"{api_key}",
        "openai_token": "" 
    }
    response = requests.post(url, headers = headers, json = data)
    api_object = response.json()
    run_id = api_object.split("run_id=", 1)[1]

    return run_id


run_id = get_run_id()
print(get_run_id())

def get_questions(run_id):
    url = f"https://api-v2.agenthub.dev/plrun?run_id={run_id}"
    headers = {
        'x-auth-key': f"{auth_key}"
    }
    while True:
        response = requests.get(url, headers=headers)
        status = response.json().get("state")

        if status == "DONE":
            return response.json()
            break
        elif status == "RUNNING":
            print(".", end = "")
        elif status == "FAILED":
            raise QuestionRequestFailed
            break
    
        time.sleep(10)

print(json.dumps(get_questions(run_id).get("outputs"), indent = 4))

