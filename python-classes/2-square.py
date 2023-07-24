#!usr/bin/python3
"""
A file with a positive attribute
"""

class Square:
    """
    class with an integer  size attribute
    """
    def __init__(self,size=0):
        if not (size,int):
            raise type error ("size must be an integer")
        elif size<0:
            raise value error ("size must be >= 0")
        else :
            self.__size = size
