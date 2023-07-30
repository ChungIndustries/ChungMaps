import json
import requests


collection = 'blocks'
url = f'http://localhost:8090/api/collections/{collection}/records/'

DATA = {
    # 'name': 'Abdul',
    'x': 0,
    'y': 0,
    'z': 0,
    'dimension': 'overworld',
    # 'last_scanned_by': 'w90lu7bpehyph78',
    # 'username': 'map_explorers15993',
    # 'api_key': '12345678'
}

HEADERS = {
    'Content-Type': 'application/json',
}

# url = f'http://localhost:3000/api/explorers/nether'

# GET
response = requests.get(url, headers=HEADERS, params=DATA)

# POST
# response = requests.post(url, headers=HEADERS, data=json.dumps(DATA))

print(response.url)
# print(response.text)
print(json.dumps(response.json(), indent=2))
print(response.status_code)
