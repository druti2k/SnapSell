# SnapSell Backend Documentation

SnapSell is a full-stack web platform designed for creators to showcase their portfolios and sell digital or physical products. This README provides an overview of the backend structure and setup instructions.

## Project Structure

The backend is built using Django and follows a modular structure:

```
backend/
├── snapsell/         # Django project configuration
│   ├── settings.py   # Project settings
│   ├── urls.py       # URL routing
│   └── wsgi.py       # WSGI configuration
│
├── accounts/         # User authentication and profile management
│   ├── models.py     # User models
│   ├── serializers.py # User serializers
│   └── views.py      # Registration and login views
│
├── portfolio/        # Creator projects management
│   ├── models.py     # Portfolio item models
│   ├── serializers.py # Portfolio serializers
│   └── views.py      # Views for creating and retrieving projects
│
├── store/            # Products and orders management
│   ├── models.py     # Product and order models
│   ├── serializers.py # Product and order serializers
│   └── views.py      # Views for managing product listings and orders
│
└── media/            # Uploaded files storage
```

The frontend is built using React and organized as follows:

```
frontend/
├── public/                # Static files and index.html
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components (Home, Login, Register, etc.)
│   ├── services/          # API calls and utility functions
│   ├── App.jsx            # Main application component
│   ├── index.js           # Entry point
│   └── styles/            # CSS or styled-components
├── package.json           # Frontend dependencies and scripts
└── README.md              # Frontend documentation
```

## Setup Instructions

### Prerequisites

- Python 3.x
- Django
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd snapsell/backend
   ```

2. Create a virtual environment:
   ```
   python3 -m venv env
   source env/bin/activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up the database:
   - Create a PostgreSQL database and update the `DATABASES` setting in `snapsell/settings.py`.

5. Run migrations:
   ```
   python manage.py migrate
   ```

6. Start the development server:
   ```
   python manage.py runserver
   ```

## API Overview

The backend provides a RESTful API for the frontend to interact with. Key endpoints include:

- `/api/register/` - User registration
- `/api/login/` - User login
- `/api/profile/` - Manage user profiles
- `/api/projects/` - Manage portfolio projects
- `/api/products/` - Manage products
- `/api/orders/` - Create and manage orders

## Contributing

Contributions are welcome! Please open an issue to discuss any major changes before submitting a pull request.

## License

This project is open source and available under the MIT License.