from LRU_CACHE import lru

obj = lru(5)

assert obj.put(1,"Python") == "Data entered"
assert obj.put(2,"JAVA") == "Data entered"
assert obj.put(3,"HTML") == "Data entered"
assert obj.get(1) == "Python"
assert obj.get(2) == "JAVA"
assert obj.get(2) == "JAVA"
assert obj.put(4,"CSS") == "Data entered"
assert obj.put(5,"SASS") == "Data entered"
assert obj.put(6,"FLASK") == "Data entered"
assert obj.put(7,"POSTGRE") == "Data entered"
assert obj.get_cache() == {1: 'Python', 2: 'JAVA', 5: 'SASS', 6: 'FLASK', 7: 'POSTGRE'}
print ("all test cases passed")