def calcular_iva(costo):
    return costo * 1.21


bici = 1000
moto = 5000
auto = 25000

print(calcular_iva(bici))
print(calcular_iva(moto))
print(calcular_iva(auto))


def division_con_validacion():
    """
        Funcion que pide dos parametros por consola y muestra la division.
        Valida que el divisor sea distitnto de 0.
    """
    seguir = True

    while seguir:
        print("------------------")
        print("Calculadora v2000")
        a = int(input("ingrese un valor: "))
        b = int(input("ingrese otro valor: "))

        if b != 0:
            break

        else:
            print("Por favor ingrese un divisor distinto de 0")

    print(a / b)

division_con_validacion()

cuadrado = lambda x : x ** 2
print(cuadrado(2))
