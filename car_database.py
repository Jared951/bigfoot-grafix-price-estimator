import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('car_database.db')
c = conn.cursor()

# Create Car Make Table
c.execute('''CREATE TABLE IF NOT EXISTS car_make
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          make TEXT)''')

# Create Car Model Table
c.execute('''CREATE TABLE IF NOT EXISTS car_model
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          make_id INTEGER,
          model TEXT,
          FOREIGN KEY (make_id) REFERENCES car_make(id))''')

# Create Full Wrap Table
c.execute('''CREATE TABLE IF NOT EXISTS full_wrap
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          model_id INTEGER,
          total_sq_ft REAL,
          FOREIGN KEY (model_id) REFERENCES car_model(id))''')

# Create Partial Wrap Table
c.execute('''CREATE TABLE IF NOT EXISTS partial_wrap
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          model_id INTEGER,
          side_sq_ft REAL,
          back_sq_ft REAL,
          hood_sq_ft REAL,
          roof_sq_ft REAL,
          FOREIGN KEY (model_id) REFERENCES car_model(id))''')

# Commit changes
conn.commit()
conn.close()