import os
import psycopg2
from flask import g
from dotenv import load_dotenv

# Cargar variables de entorno desde el archivo .env
load_dotenv()

# Configuración de la base de datos usando variables de entorno
DATABASE_CONFIG = {
    'user': os.getenv('DB_USERNAME'),        
    'password': os.getenv('DB_PASSWORD'),     
    'host': os.getenv('DB_HOST'),            
    'database': os.getenv('DB_NAME'),        
    'port': os.getenv('DB_PORT', 5432)        
}

# Función para obtener la conexión a la base de datos
def get_db():
    # Si 'db' no está en el contexto global de Flask 'g'
    if 'db' not in g:
        # Crear una nueva conexión a la base de datos y guardarla en 'g'
        g.db = psycopg2.connect(**DATABASE_CONFIG)
    # Retornar la conexión a la base de datos
    return g.db

# Función para cerrar la conexión a la base de datos
def close_db(e=None):
    # Extraer la conexión a la base de datos de 'g' y eliminarla
    db = g.pop('db', None)
    # Si la conexión existe, cerrarla
    if db is not None:
        db.close()

# Función para inicializar la aplicación con el manejo de la base de datos
def init_app(app):
    # Registrar 'close_db' para que se ejecute al final del contexto de la aplicación
    app.teardown_appcontext(close_db)

def test_connection():
    conn = psycopg2.connect(**DATABASE_CONFIG) 

    cur = conn.cursor() 
    
    conn.commit() 
    
    cur.close() 
    conn.close()

def create_table_tareas():
    conn = psycopg2.connect(**DATABASE_CONFIG)
    cur = conn.cursor()
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS Tareas (
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(50) NOT NULL,
            descripcion VARCHAR(300) NOT NULL,
            fecha_creacion DATE NOT NULL,
            completada BOOLEAN NOT NULL,
            activa BOOLEAN NOT NULL
        );
        """
    )
    conn.commit()
   
    cur.close()
    conn.close()