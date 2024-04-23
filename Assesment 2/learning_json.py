import json

#1. Reading the file
json_file = open(r"Assesment 2\ex5.json", "r")
ex5 = json.load(json_file)

#2. Adding the batter
for donut in ex5:
    if(donut["name"] == "Old Fashioned"):
        donut["batters"]["batter"].append({'id': 1003, 'type': 'Tea'})

#3. Updating the file
json_file = open(r"Assesment 2\ex5.json", "w")
json.dump(ex5, json_file, indent=4)