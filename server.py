from flask import Flask, render_template, jsonify, request
import sqlite3

app = Flask(__name__, static_url_path='/static', static_folder='static')

def get_car_makes_from_database():
    conn = sqlite3.connect('car_database.db')
    c = conn.cursor()

    c.execute("SELECT DISTINCT make FROM cars")
    car_makes = c.fetchall()

    conn.close()

    formatted_car_makes = [{"value": make[0], "label": make[0]} for make in car_makes]
    return formatted_car_makes

def get_car_models_for_make(selected_make):
    conn = sqlite3.connect('car_database.db')
    c = conn.cursor()

    c.execute("SELECT model FROM cars WHERE make = ?", (selected_make,))
    car_models = c.fetchall()

    print("Selected Make:", selected_make)
    print("Car Models:", car_models)

    conn.close()

    models = [model[0] for model in car_models]
    return models

def get_total_square_footage_for_model(selected_model):
    conn = sqlite3.connect('car_database.db')
    c = conn.cursor()

    c.execute("SELECT total_sq_ft FROM full_wrap WHERE car_id = (SELECT id FROM cars WHERE model = ?)", (selected_model,))

    total_sq_ft = c.fetchone()[0]

    conn.close()

    return total_sq_ft

def get_partial_wrap_sq_ft(car_model, part_of_car):
    conn = sqlite3.connect('car_database.db')
    c = conn.cursor()
    c.execute("""SELECT pw.side_sq_ft, pw.back_sq_ft, pw.hood_sq_ft, pw.roof_sq_ft
                 FROM partial_wrap pw
                 INNER JOIN cars c ON pw.car_id = c.id
                 WHERE c.model = ?""", (car_model,))
    result = c.fetchone()
    conn.close()

    if result:
        if part_of_car == "side":
            return {'partial_wrap_sq_ft': result[0]}
        elif part_of_car == "back":
            return {'partial_wrap_sq_ft': result[1]}
        elif part_of_car == "hood":
            return {'partial_wrap_sq_ft': result[2]}
        elif part_of_car == "roof":
            return {'partial_wrap_sq_ft': result[3]}
    else:
        return None
    
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/sign')
def sign():
    return render_template('sign.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/banner')
def banner():
    return render_template('banner.html')

@app.route('/apparel')
def apparel():
    return render_template('apparel.html')

@app.route('/vehiclewrap')
def vehicle_wrap():
    return render_template('vehiclewrap.html')

@app.route('/api/car-makes')
def get_car_makes():
    car_makes = get_car_makes_from_database()
    return jsonify(car_makes)

@app.route('/api/car-models')
def get_car_models():
    selected_make = request.args.get('make')
    if selected_make != 'select':
        car_models = get_car_models_for_make(selected_make)
        return jsonify(car_models)
    return jsonify([])

@app.route('/api/car-total-sq-ft')
def get_total_square_footage():
    selected_model = request.args.get('model')
    total_sq_ft = get_total_square_footage_for_model(selected_model)
    return jsonify({'total_sq_ft': total_sq_ft})

@app.route('/api/partial-sq-ft', methods=['GET'])
def partial_sq_ft():
    car_model = request.args.get('car_model')
    part_of_car = request.args.get('part_of_car')
    if car_model and part_of_car:
        partial_wrap_sq_ft = get_partial_wrap_sq_ft(car_model, part_of_car)
        if partial_wrap_sq_ft:
            return jsonify(partial_wrap_sq_ft)
        else:
            return jsonify({'error': 'Partial square footage data not found.'}), 404
    else:
        return jsonify({'error': 'Missing parameters: car_model or part_of_car'}), 400
    
if __name__ == '__main__':
    app.run(debug=True)