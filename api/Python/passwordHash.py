import hashlib
import os

def passwordHashFunction (password):
    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)
    return salt + key

def passwordChecker (new_password, old_password) : 
    salt = old_password[:32]
    oldkey = old_password[32:]
    new_key = hashlib.pbkdf2_hmac(
        'sha256',
        new_password.encode('utf-8'), # Convert the password to bytes
        salt, 
        100000
    )
    if new_key == oldkey:
        return True
    else:
        return False