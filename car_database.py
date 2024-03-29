import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('car_database.db')
c = conn.cursor()

# Create Cars Table
c.execute('''CREATE TABLE IF NOT EXISTS cars
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          make TEXT,
          model TEXT)''')

# Create Full Wrap Table with Foreign Key Reference to Cars Table
c.execute('''CREATE TABLE IF NOT EXISTS full_wrap
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          car_id INTEGER,
          total_sq_ft REAL,
          FOREIGN KEY (car_id) REFERENCES cars(id))''')

# Create Partial Wrap Table with Foreign Key Reference to Cars Table
c.execute('''CREATE TABLE IF NOT EXISTS partial_wrap
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          car_id INTEGER,
          side_sq_ft REAL,
          back_sq_ft REAL,
          hood_sq_ft REAL,
          roof_sq_ft REAL,
          FOREIGN KEY (car_id) REFERENCES cars(id))''')

# Commit changes
conn.commit()
conn.close()