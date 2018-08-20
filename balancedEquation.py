def equationBalanced(s):
    if(len(s)%2 != 0):
        return False
    else:
        opening = ["(","{","["]
        closing = [")","}","]"]
        mapping = dict(zip(opening,closing))
        queue = []
        for i in s:
            if i in opening:
                queue.append(mapping[i])
            elif i in closing:
                if i not in queue or i != queue.pop():
                    print(i)
                    return False
        return True
