#!/usr/bin/python3
"""
Purchase Class module, that inherits from BaseModel
"""

from models.base_model import BaseModel


class Purchase(BaseModel):
    user_id = ""
    machine_id = ""
    volume = ""
    cost = ""
    supplier = ""
    PO_number = 0  # Purchase order unique number

    def __init__(self, *args, **kwargs):
        """ Defines attributes/methods for Purchases """
        super().__init__(*args, **kwargs)
        self.PO = Purchase.PO_number
        Purchase.PO_number += 1
