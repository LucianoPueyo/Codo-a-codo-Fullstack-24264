from abc import ABC, abstractmethod

#ABC = ABSTRACT BASE CLASS

class Persona(ABC):
    def __init__(self, nombre, apellido, dni):
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni

        # Validar nombre apellido dni

    # Metodo Abstracto
    @abstractmethod
    def presentar(self):
        pass

    def __toString(self):
        return f"{self.nombre} {self.apellido} {self.dni}"

    def __repr__(self):
        return self.__toString()

    def __str__(self):
        return self.__toString()


class Empleado(Persona):
    def __init__(self, nombre, apellido, dni, CUIT):
        super().__init__(nombre, apellido, dni)
        self.CUIT = CUIT

    def presentar(self):
        print(f"Hola, soy el empleado: {self.nombre} {self.apellido} CUIT: {self.CUIT}") 

    def vender(self):
        print("Se efectuó una venta")


class Cliente(Persona):
    def __init__(self, nombre, apellido, dni, codigo_cliente):
        super().__init__(nombre, apellido, dni)
        self.codigo_cliente = codigo_cliente

    def presentar(self):
        print(f"Hola, soy el cliente: {self.nombre} {self.apellido} Codigo de cliente: {self.codigo_cliente}") 

    def comprar(self):
        print("Se efectuó una compra")


#persona1 = Persona("Roberto", "Perez", 7891)

empleado1 = Empleado("Carlos", "Lopez", 1234, 10001234)
cliente1 = Cliente("Maria", "Del Cerro", 5678, 'A5678')

empleado1.presentar()
cliente1.presentar()

empleado1.vender()
cliente1.comprar()