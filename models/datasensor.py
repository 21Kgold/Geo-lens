#!/usr/bin/python3
"""
DataSensor Class module, that inherits from BaseModel
"""

from models.base_model import BaseModel


class DataSensor(BaseModel):
    sensor_status = ""
    machine_status = ""
    fuel_level = ""
    latitude = ""
    longitude = ""
    measured_at = ""

    def __init__(self, *args, **kwargs):
        """ Defines attributes/methods for DataSensors """
        super().__init__(*args, **kwargs)
