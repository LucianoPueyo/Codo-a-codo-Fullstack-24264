a = 5 # (int)
b = 3.8 # (float)
c = "Hola como estás" # (str)
d = True # (bool)
e = 5+1j # (complex)
f = None # (none)

# Al igual que en JS, cuando operamos con floats debemos estar atentos al error de representacion 
suma = 0.1 + 0.2
print(suma)

# Conocer el tipo de un dato en una variable
print(type(a), type(b), type(e))

# Expresion
suma = 7 + 8 - (5 / 3)
print(suma)


condicion = 17 > 9

if condicion:
    print("La condicion es verdadera")

else:
    print("La condicion es falsa")

print("Adios")

variable_que_acumula_un_promedio = 8