class lru:
    def __init__ (self,capacity):
        super().__init__()
        self.capacity = capacity
        self.files = {}
        self.files1 = {}

    def put(self,key,data):
        if key not in self.files and len(self.files)==self.capacity:
            old=min(self.files1.keys(),key=lambda k:self.files1[k])
            self.files.pop(old)
            self.files1.pop(old)
        self.files[key] = data
        self.files1[key]=1
        return "Data entered"

    def get_cache(self):
        return self.files

    def get(self,key):
        if key in self.files:
            self.files1[key]+=1
            return self.files[key]
        else:
            print("IT is not  there in the cache")
