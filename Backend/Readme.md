Hello ,
Here i'll be adding the backend code for Jatin's Fitness application 

Added bycrypt 

Hashing a password is a crucial security practice that transforms a plain text password into a fixed-length string of characters.
 This process is one-way, meaning you can't reverse the hash to get the original password. Here's why it's important and how to do it:
Why hash passwords:

Security: If your database is compromised, the actual passwords aren't exposed.
Privacy: Even system administrators can't see users' actual passwords.
Verification: You can verify a password without storing the actual password.

Salt and hash are important concepts in cryptography, particularly in the context of storing passwords securely. Let's break them down:

Hash:

A hash is a fixed-size string of characters generated from input data of any size.
It's a one-way process: you can create a hash from data, but you can't reverse the hash to get the original data.
The same input always produces the same hash output.
Example: The password "hello123" might hash to "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3".


Salt:

A salt is a random string that is added to the input before hashing.
It's unique for each password.
The purpose of a salt is to defend against rainbow table attacks and to make each hash unique even if two users have the same password.
Example: If the salt is "abc123", the input to the hash function would be "abc123hello123" instead of just "hello123".



Why use both?

Security: If two users have the same password, their hashed passwords will still be different due to different salts.
Protection against rainbow tables: Precomputed tables of hash values for common passwords are useless if a unique salt is used for each password.
Slowing down brute-force attacks: Salts make it necessary to compute a new hash for each attempt, rather than trying the same hash against a list of known passwords.