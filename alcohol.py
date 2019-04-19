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
data["level"] = 0.06
data["registration"] = 4488
result = json.dumps(data)
while True:
	time.sleep(10)
	requests.post("http://localhost:8080/alcoholMonitor",{"result":result})
	print("sent data " + str(result))