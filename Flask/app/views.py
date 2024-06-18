from flask import jsonify

def index():
    return jsonify(
        {
            'mensaje': 'Hola Mundo Listado de tareas'
        }
    )