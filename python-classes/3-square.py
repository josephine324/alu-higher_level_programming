#!/usr/bin/python3
"""
This file defines the square 
based on the previous question
"""


class Square:
    """
    This is a class that returns the 
    current square area
    """
     def __init__(self, size=0):
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size

    def area(self):
        return self.__size ** 2
