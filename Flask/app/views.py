from flask import jsonify, request
from app.models import Task

from datetime import date

def index():
    return jsonify(
        {
            'mensaje': 'Hola Mundo Listado de tareas'
        }
    )

def get_pending_tasks():
    tasks = Task.get_all_pending()
    return jsonify([task.serialize() for task in tasks])

def get_completed_tasks():
    tasks = Task.get_all_completed()
    return jsonify([task.serialize() for task in tasks])

def get_archived_tasks():
    tasks = Task.get_all_archived()
    return jsonify([task.serialize() for task in tasks])

def get_task(task_id):
    task = Task.get_by_id(task_id)
    if not task:
        return jsonify({'message': 'Task not found'}), 404
    return jsonify(task.serialize())

def create_task():
    data = request.json
    new_task = Task(
        nombre=data['nombre'],
        descripcion=data['descripcion'],
        fecha_creacion=date.today().strftime('%Y-%m-%d'),
        completada=False,
        activa=True
    )
    new_task.save()
    return jsonify({'message': 'Task created successfully'}), 201

def update_task(task_id):
    task = Task.get_by_id(task_id)
    if not task:
        return jsonify({'message': 'Task not found'}), 404
   
    data = request.json
    task.nombre = data['nombre']
    task.descripcion = data['descripcion']
    task.save()
    return jsonify({'message': 'Task updated successfully'})

def archive_task(task_id):
    task = Task.get_by_id(task_id)
    if not task:
        return jsonify({'message': 'Task not found'}), 404
   
    task.delete()
    return jsonify({'message': 'Movie deleted successfully'})

def __complete_task(task_id, status):
    task = Task.get_by_id(task_id)
    if not task:
        return jsonify({'message': 'Task not found'}), 404

    task.completada = status
    task.activa = True
    task.save()
    return jsonify({'message': 'Task updated successfully'})

def set_complete_task(task_id):
    return __complete_task(task_id, True)

def reset_complete_task(task_id):
    return __complete_task(task_id, False)
