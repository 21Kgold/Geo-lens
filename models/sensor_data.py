#!/usr/bin/python3
""" holds class Sensor"""
from datetime import datetime
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship


class Sensor_data(BaseModel, Base):
    """Representation of sensor data """
    if models.storage_t == "db":
        __tablename__ = 'sensors_data'
        sensor_name = Column(String(128), nullable=False)
        sensor_status = Column(String(10), nullable=False)
        latitude = Column(String(20), nullable=False)
        longitude = Column(String(20), nullable=False)
        machine_status = Column(String(3), nullable=False)
        fuel_level = Column(String(10), nullable=False)
        sensor_time = Column(DateTime, default=datetime.utcnow)

    else:
        sensor_name = ""
        sensor_status = ""
        latitude = ""
        longitude = ""
        machine_status = ""
        fuel_level = ""
        sensor_time = ""

    def __init__(self, *args, **kwargs):
        """initializes state"""
        super().__init__(*args, **kwargs)

