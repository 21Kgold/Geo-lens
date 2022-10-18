#!/usr/bin/python3
"""
BaseModel Class module, that defines all common attributes/methods for other
classes
"""

from datetime import datetime
import models
import uuid


class BaseModel:
    def __init__(self, *args, **kwargs):
        """
        Instance initializer that sets instance attributes.
        """
        # If an object is initialized with **kwargs atrribute / attribute value
        # dictionary, assign them, except class
        if kwargs:
            {setattr(self, key, val) for key, val in kwargs.items()
                if key != '__class__'}
            # Format created_at and updated_at from string to datetime
            self.created_at = datetime.fromisoformat(kwargs["created_at"])
            self.updated_at = datetime.fromisoformat(kwargs["updated_at"])
        else:
            self.id = str(uuid.uuid4())
            self.created_at = datetime.now()
            self.updated_at = datetime.now()
            # Add the new created BaseModel instance to the FileStorage
            # class attribute __objects, which stores all objects.
            models.storage.new(self)

    def save(self):
        """
        Link BaseModel intances to persistent storage file.json through
        FileStorage instance storage and FileStorage method save(). Also
        updates the updated_at attribute of the instance
        """
        self.updated_at = datetime.now()
        models.storage.save()

    def __str__(self):
        """
        Returns instance data as a string.
        Format [self.Class name](self.id){self.dict}
        """
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"

    def to_dict(self):
        """
        Returns instance data as a dictionary, using built-in attribute
        __dict__ that stores instance's mutable attributes, and adding a
        key __class__
        """
        attributes_dict = self.__dict__.copy()
        # Add __class__ key/value to attributes_dict
        attributes_dict["__class__"] = self.__class__.__name__
        # Format created_at and updated_at values to string in ISO format
        attributes_dict["created_at"] = self.created_at.isoformat()
        attributes_dict["updated_at"] = self.updated_at.isoformat()

        return attributes_dict

    def lets_update(self, new_attributes):
        """
        Updates existing object, with attributes from diccionary new_attributes
        """
        object_key = self.__class__.__name__ + "." + self.__dict__['id']
        if object_key in models.storage.all():
            for key in new_attributes.keys():
                setattr(models.storage.all()[object_key],
                        key, new_attributes[key])
                models.storage.save()
