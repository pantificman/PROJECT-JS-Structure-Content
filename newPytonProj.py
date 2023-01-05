# a, b, c = 10, 20, 30
# print(a)
# print(b)
# print(c)

# d, e, f, g = (33, "car", 2.012, "hi")
# print(d)
# print(e)
# print(f)
# print(g)

# ages = {"Dave": "41", "Bob": "22", "Mark": "38"}
# for key, value in ages.items():
#     print("F{key} is {value}")

# agess = 50
# print(agess.items())

# car = {
#   "brand": "Ford",
#   "model": "Mustang",
#   "year": 1964
# }

# x = car.items()

# car["year"] = 1999

# print(x)

# float(12)
# print(float(12))
# print(int(12.2))

# listExample = ["John", "Robert", "Hillary", "Angus", "David"]
# print(listExample[3] + " is a great employee")

# listExample = listExample + ["Jim"]
# print(listExample)

# listExample2 = [45, 2, 454, 24, 5]
# print(listExample + listExample2)

# listExample.insert(0, "James")
# print(listExample)

# del(listExample[3])
# print(listExample)

# listExample.remove("Robert")
# print(listExample)

# for x in listExample:
#   print(x)

#   if "David" in listExample:
#     print("This employee is on the list")

# listExample3 = ["one", "two", "three", "four"]

# print(len(listExample3))

# firstList = ["yellow", "brown", "black", "red", "white"]
# firstList[3] = "orange"
# print(firstList)

# secondlist = ["birds", "animals", "fishes", "humans", "insects"]
# del(secondlist[2])
# print(secondlist)

# thirdlist = []
# thirdlist.insert(3, "Toyota")
# thirdlist.insert(4, "BMW")
# print(thirdlist)

# secondlist = ["birds", "animals", "fishes", "humans", "insects"]
# secondlist.sort()
# print(secondlist)
# secondlist.reverse()
# #secondlist.sort(reverse=True)
# print(secondlist)

# colors = ["blue", "red", "green", "yellow"]
# print("this is the first list")
# print(colors)

# print("\nThis is a sorted list")
# colors.sort()
# print(colors)

# colors.reverse()
# print(colors)

# players = ["tom", "dick", "mickael", "dan", "adam", "bob", "stive", "anton"]
# print("There are first three players on my team:")
# #for player in players[3:6:2]:
# print(players[3:6])

# num = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
# print(num[1:8:2])

# a = 3 + 4
# print(a)

# b = 5 - 3
# print(b)

# c = 2*5
# print(c)

# d = 10/2
# print(d)

# e = 3**2
# print(e)

# f = 7
# f += 5
# print(f)

# #multiply
# g = 4
# g *= 6
# print(g)
# #logical operators
# i = 8
# print(i < 10 or i > 1)

# #identity operators
# j = 2
# k = 6
# l = j
# print(j is k)
# print(l is j)

# z = [5, 3, 7]
# print(3 in z)
# print(10 not in z)

# x = 1
# y = 3
# if x > y:
#   print("The x greater than y")
# elif x == y:
#   print("equal")
# else:
#   print("dghdd")

#   #Without IF statements

# employees = ['Mark', 'Steve', 'Dave', 'Lisa', 'Jordyn']

# if 'Steve' in employees:
#     print("Steve is an employee")
# if 'Lisa' in employees:
#     print("Lisa is an employee")
# if 'John' in employees:
#     print("John is an employee")

# print("All done with employee selection")

# for y in range(25,35,5):
#     print(y)

# for b in range(0, 50, 5):
#     print(b)

# a = 3
# b = 6
# c = 5
# print(a+b*c)
# print(a+b/c)
# print(a+b**c)
# print(a-b*c)

# while a < 5:
#   print("ok")
#   a+=1
# colors = ['blue', 'red', 'pink']
# for x in colors:
#   print(x)

# print("imfo:", 6, 0, "\ntoo", sep=" ")

# print("Second Lin\" ")

# print(5 ** 3)

# print("total:", min(5, 8, 5, -4))
# noname = "dddd"

# num = 4
# print("Result", num)

# del num
# print(num)

# str1 = "dfhdh"
# bool = True
# int = 56
# int2 = 45.7
# print("I hope", str1, str(int), str(int2), sep=" ")

# if 5 == 5:
#   print("yes")
#   print("true")

# num = 67

# if num > 0 and num < 67:
#     print("ok")
# elif num < 0:
#     print("no correrct")
# elif num == 67:
#     print("equal")
# else:
#     print("not today")

for i in range(1, 8):
    print(i)

word = "Revolution"
for i in word:
    if i == "o":
        print("one 'o'")
        break


