#!/usr/bin/python3
"""
User Class module, that inherits from BaseModel
"""

from models.base_model import BaseModel


class User(BaseModel):
    first_name = ""
    last_name = ""
    email = ""
    password = ""

    def __init__(self, *args, **kwargs):
        """ Defines attributes/methods for Users """
        super().__init__(*args, **kwargs)
