#Remove duplicates from a soreted array. return the lenght of the array. Cannot create an additonal data structure.
#Elements in the returned length of the array are only considered. The rest of the array can be duplicates

class Solution:
    def removeDuplicates(self, nums):
        if nums:
            change_index = 0
            for i in range(len(nums)):
                if(nums[change_index] != nums[i]):
                    change_index = change_index + 1
                    nums[change_index] = nums[i]
            return change_index+1
        else:
            return 0
