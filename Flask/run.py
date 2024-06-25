from flask import Flask
from flask_cors import CORS

from app.views import *
from app.database import *

app = Flask(__name__)

# Rutas de API-Rest
app.route('/', methods=['GET'])(index)

# CRUD
app.route('/api/tasks/pending/', methods=['GET'])(get_pending_tasks)
app.route('/api/tasks/completed/', methods=['GET'])(get_completed_tasks)
app.route('/api/tasks/archived/', methods=['GET'])(get_archived_tasks)

app.route('/api/tasks/fetch/<int:task_id>', methods=['GET'])(get_task)

app.route('/api/tasks/create/', methods=['POST'])(create_task)
app.route('/api/tasks/update/<int:task_id>', methods=['PUT'])(update_task)

app.route('/api/tasks/archive/<int:task_id>', methods=['DELETE'])(archive_task)
app.route('/api/tasks/complete/set/<int:task_id>', methods=['PUT'])(set_complete_task)
app.route('/api/tasks/complete/reset/<int:task_id>', methods=['PUT'])(reset_complete_task)

create_table_tareas()

# Conexión a BDD
init_app(app)

# Cors
CORS(app)


if __name__ == '__main__':
    app.run(debug=True)