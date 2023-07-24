#!/usr/bin/python3
"""
This is a file of a class
with an integer attribute
"""


class Square:
    """
    This is a class with an integer attribute
    """
    def __init__(self, size=0):
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size
