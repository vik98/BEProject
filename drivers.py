import requests
import json
import time
import datetime
from random import randint
while True:
	j=5
	now = datetime.datetime.now()
	data = {}
	data["date"] = str(now.day) + "-" + str(now.month) + "-" + str(now.year)
	data["time"] = str(now.hour) + ":" + str(now.minute) + ":" + str(now.second)
	data["value"] = randint(600000,702000)
	result = json.dumps(data)
	time.sleep(2)
	requests.post("http://localhost:8080",{"result":result})
	print("sent data " + str(result))