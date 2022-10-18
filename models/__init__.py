#!/usr/bin/python3
"""
This initialization code for the subpackage models will be executed implicitly
each time the models subpackage is imported.  Initializes the FileStorage
__objects class attribute by initializing a FileStore instance, named storage.
Through the storage.reload() method, updates __objects with the data
persistently stored in the file.json.
"""
from models.engine.file_storage import FileStorage


storage = FileStorage()
storage.reload()
