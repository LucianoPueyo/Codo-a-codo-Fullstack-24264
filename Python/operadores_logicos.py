# AND
"""
A | B | A and B
0 | 0 | 0
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1
"""

# OR
"""
A | B | A or B
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 1
"""

# NOT
"""
A | not A
0 | 1
1 | 0
"""

a = True
b = False

print(a and b, a or b, not a)