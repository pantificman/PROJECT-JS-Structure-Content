a, b, c = 10, 20, 30
print(a)
print(b)
print(c)

d, e, f, g = (33, "car", 2.012, "hi")
print(d)
print(e)
print(f)
print(g)

ages = {"Dave": "41", "Bob": "22", "Mark": "38"}
for key, value in ages.items():
    print("F{key} is {value}")

agess = 50
print(agess.items())

car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.items()

car["year"] = 1999

print(x)

float(12)
print(float(12))
print(int(12.2))

listExample = ["John", "Robert", "Hillary", "Angus", "David"]
print(listExample[3] + " is a great employee")

listExample = listExample + ["Jim"]
print(listExample)

listExample2 = [45, 2, 454, 24, 5]
print(listExample + listExample2)

listExample.insert(0, "James")
print(listExample)

del(listExample[3])
print(listExample)

listExample.remove("Robert")
print(listExample)

for x in listExample:
  print(x)

  if "David" in listExample:
    print("This employee is on the list")

listExample3 = ["one", "two", "three", "four"]

print(len(listExample3))

