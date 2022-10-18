#!/usr/bin/python3
"""
Machine Class module, that inherits from BaseModel
"""

from models.base_model import BaseModel


class Machine(BaseModel):
    name = ""
    sensor_id = ""

    def __init__(self, *args, **kwargs):
        """ Defines attributes/methods for Machines """
        super().__init__(*args, **kwargs)
