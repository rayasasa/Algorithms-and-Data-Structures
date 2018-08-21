def bubbleSort(array):
    swaps = 0
    for x in range(len(array)-1,0,-1):
        for i in range(x):
            if(array[i] > array[i+1]):
                swaps = swaps + 1
                temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
    return array

unsortedArray = [4,7,2,6,9,10]
print(bubbleSort(unsortedArray))
