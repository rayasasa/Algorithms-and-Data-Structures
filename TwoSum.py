# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

#You may assume that each input would have exactly one solution, and you may not use the same element twice.

class Solution:
    def twoSum(self, nums, target):
        temp ={}
        for i in range(len(nums)):
            if nums[i] not in temp:
                temp[nums[i]] = [i]
            else:
                temp[nums[i]].append(i)
        
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in temp:
                j = (temp[diff][0] if len(temp[diff]) == 1 else temp[diff][1])
                if(i != j):
                    return(i,j)
        return(-1,-1)
