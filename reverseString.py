#reverse a string

def reverseString(s):
    s = list(s)
    x = len(s)-1
    y = int(len(s)/2)
    for i in range(y):
        temp = s[i]
        s[i] = s[x-i]
        s[x-i] = temp
    return "".join(s)
print(reverseString(s))

def reverseString(s):
    newstr = ""
    for i in s:
        newstr = i + newstr
    return newstr

print(reverseString(s))
