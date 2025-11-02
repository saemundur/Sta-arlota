import random

# Taka við n mörgum notendum
users = []
for i in range(1, 9):
    name = input(f'Input user nr. {i}: ')
    users.append(name)

# Stokka notendum
random.shuffle(users)
print(users)

# Setja notendur í 3 hópa
print(f"Hópur 1: {users[0]}, {users[1]}, {users[2]}")
print(f"Hópur 2: {users[3]}, {users[4]}, {users[5]}")
print(f"Hópur 3: {users[6]}, {users[7]}")

