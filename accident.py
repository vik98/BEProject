import requests
import json
import time
import datetime
from random import randint
data = {}
now = datetime.datetime.now()
data["date"] = str(now.day) + "-" + str(now.month) + "-" + str(now.year)
data["time"] = str(now.hour) + ":" + str(now.minute) + ":" + str(now.second)
data["latitude"]= 19.012659
data["longitude"]= 72.816567
data["cars"] = "MH04SD5545"
result = json.dumps(data)
while True:
	time.sleep(10)
	requests.post("http://localhost:8080/accidentMonitor",{"result":result})
	print("sent data " + str(result))