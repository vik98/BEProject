import requests
import json
import time
level=300
latitude,longitude= 1903.56121,7302.2812
while True:
	j=5
	data = {}
	data["level"] = level
	data["long"] = longitude
	data["lat"] = latitude
	result = json.dumps(data)
	time.sleep(0.5)
	requests.post("http://localhost:8080/realtime",{"result":result})
	print("sent data " + str(result))
	latitude+=j
	longitude+=j
	level+=j