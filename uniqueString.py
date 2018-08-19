#Find if string has all unique elements without using additonal data structure
def uniqueString(s):
    temp = ''.join(set(s))
    if len(temp) == len(s):
        return True
    else:
        return False
print(uniqueString(s))

def uniqueString(s):
    compArray = [0]*26
    for i in range(len(s)):
        letter = ord(s[i])-97
        if(compArray[letter] == 0):
            compArray[letter] = 1
        else:
            return False
    return True
print(uniqueString(s))
