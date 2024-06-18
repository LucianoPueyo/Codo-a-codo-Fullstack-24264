from flask import Flask


app = Flask(__name__)

# Cuando vemos un @algo encima de una funcion, se llama decorator
@app.route('/')
def pepito():
    return "Hola Mundo Flask"

# En criollo, este if significa que estoy ejecutando este script por consola.
# Es decir:
# > python hello.py
if __name__ == '__main__':
    app.run(debug=True)

"""
Listo, con powershell como administrador, ya lo active
Get-ExecutionPolicy (para ver estadoo)
Set-ExecutionPolicy Unrestricted (para activar)
"""