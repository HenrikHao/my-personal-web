from flask import Flask, jsonify, request
from flask_cors import CORS
from google.cloud import firestore
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Firestore client
db = firestore.Client(project=os.environ.get('PROJECT_ID'))

@app.route('/api/visit', methods=['POST'])
def record_visit():
    try:
        # Get the page path from the request
        data = request.get_json()
        page_path = data.get('page', '/')
        
        # Reference to the counter document
        counter_ref = db.collection('visits').document('counter')
        
        # Get the current document or create it if it doesn't exist
        counter_doc = counter_ref.get()
        if not counter_doc.exists:
            counter_ref.set({
                'total': 0,
                'pages': {}
            })
            counter_doc = counter_ref.get()
        
        # Update the counter in a transaction
        @firestore.transactional
        def update_in_transaction(transaction, counter_ref):
            snapshot = counter_ref.get(transaction=transaction)
            data = snapshot.to_dict()
            
            # Update total count
            total = data.get('total', 0) + 1
            
            # Update page-specific count
            pages = data.get('pages', {})
            page_count = pages.get(page_path, 0) + 1
            pages[page_path] = page_count
            
            # Update the document
            transaction.update(counter_ref, {
                'total': total,
                'pages': pages
            })
            
            return {'total': total, 'page': page_count}
        
        # Execute the transaction
        transaction = db.transaction()
        result = update_in_transaction(transaction, counter_ref)
        
        return jsonify(result), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/stats', methods=['GET'])
def get_stats():
    try:
        # Get the counter document
        counter_ref = db.collection('visits').document('counter')
        counter_doc = counter_ref.get()
        
        if not counter_doc.exists:
            return jsonify({'total': 0, 'pages': {}}), 200
        
        data = counter_doc.to_dict()
        return jsonify(data), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080))) 