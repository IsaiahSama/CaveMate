from pydantic import BaseModel
from typing import Optional

class User (BaseModel):
    """Class representing a User"""

    name: str 
    profile_url: Optional[str]
    user_id: int 
    nationality: str 
    faculty: str 
    department: str
    status: str 
    