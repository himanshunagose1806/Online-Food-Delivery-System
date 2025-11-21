# 🍔 Online Food Delivery System

[![GitHub last commit](https://img.shields.io/github/last-commit/himanshunagose1806/Online-Food-Delivery-System)](https://github.com/himanshunagose1806/Online-Food-Delivery-System/commits/main)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/himanshunagose1806/Online-Food-Delivery-System?style=social)](https://github.com/himanshunagose1806/Online-Food-Delivery-System/stargazers)

## 📝 Description

The **Online Food Delivery System** is a comprehensive web-based platform designed to connect customers with various local restaurants, allowing them to browse menus, place orders, and track deliveries efficiently.

This project aims to streamline the entire food ordering process, from customer selection to kitchen preparation and final delivery, offering a user-friendly experience for all parties involved: **Admin**, **Restaurants**, and **Customers**.

## ✨ Key Features

### Customer Module
* **User Registration/Login:** Secure authentication for returning and new customers.
* **Restaurant & Menu Browsing:** View available restaurants and filter food items by category or cuisine.
* **Shopping Cart:** Add, update, and remove items before checkout.
* **Order Placement:** Finalize the order and select delivery address.
* **Secure Payment Gateway:** Integration for various payment methods (Cash on Delivery/Online Payment).
* **Live Order Tracking:** Real-time status updates on the order (Confirmed, Preparing, Out for Delivery).
* **Order History:** View past orders and easily reorder items.

### Restaurant/Vendor Module
* **Restaurant Dashboard:** Manage restaurant profile, operational status, and sales overview.
* **Menu Management:** Add, edit, or remove food items, update pricing, and manage stock availability.
* **Order Notifications:** Receive real-time alerts for new incoming orders.
* **Order Processing:** Update order status (Accept/Reject, Preparing, Ready for Pickup).

### Admin Module
* **Dashboard Overview:** Centralized view of system statistics, revenue, and active users/restaurants.
* **User Management:** Manage customer accounts and restaurant vendor profiles.
* **Category Management:** Define and manage global food categories and cuisines.
* **System Configuration:** Manage delivery zones, commission rates, and site settings.
* **Reporting:** Generate sales reports and track order fulfillment metrics.

## 🛠️ Technology Stack

This project is built using a common web development stack.

| Category | Technology | Version / Tool |
| :--- | :--- | :--- |
| **Backend** | **[Specify Language/Framework]** | e.g., PHP (Laravel/CodeIgniter), Java (Spring Boot), Python (Django/Flask) |
| **Frontend** | **[Specify Frontend]** | e.g., HTML5, CSS3, JavaScript, Bootstrap, React/Vue.js |
| **Database** | **[Specify Database]** | e.g., MySQL, PostgreSQL, MongoDB |
| **Server** | **[Specify Server]** | e.g., Apache, Nginx, Tomcat |
| **Tools** | Git, [IDE used, e.g., VS Code] | - |

***(Please replace the bracketed items above with the actual technologies used in your code, e.g., Backend: PHP (CodeIgniter), Database: MySQL)***

## ⚙️ Installation and Setup

Follow these steps to get a local copy of the project up and running.

### Prerequisites

* A web server environment (e.g., XAMPP, WAMP, or MAMP for local development).
* [Specific language runtime, e.g., PHP 7.4+ or Java 11+].
* Composer (if using a PHP framework like Laravel).
* Git installed on your machine.

### Steps

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/himanshunagose1806/Online-Food-Delivery-System.git](https://github.com/himanshunagose1806/Online-Food-Delivery-System.git)
    cd Online-Food-Delivery-System
    ```

2.  **Install Dependencies**
    *(If using a framework, run the corresponding command. If not, skip this step.)*
    ```bash
    # Example for Laravel/Composer:
    composer install
    ```

3.  **Database Setup**
    * Create a new database named `food_delivery_db` (or a name of your choice) in your local database server (e.g., phpMyAdmin).
    * Import the provided SQL file (usually located in a folder like `database/food_delivery_db.sql`) into the newly created database.

4.  **Configuration**
    * Rename the configuration file (e.g., `.env.example` to `.env`).
    * Open the configuration file and update the database credentials:
        ```
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=food_delivery_db
        DB_USERNAME=root
        DB_PASSWORD=
        ```

5.  **Run the Application**
    * Move the project files into your web server's root directory (`htdocs` for XAMPP, `www` for WAMP).
    * Alternatively, start the application using the framework's command:
        ```bash
        # Example for PHP built-in server or Framework:
        php artisan serve
        ```
    * Access the application in your browser at `http://localhost/[project-folder-name]` or the port specified by the framework.

## 🔑 Default Credentials

| User Type | Email/Username | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@example.com` | `password123` |
| **Restaurant** | `restaurant@example.com` | `password123` |

***(Note: Please update these default credentials after installation for security.)***

## 🤝 Contributing

Contributions are always welcome! If you find a bug or have a feature suggestion, please follow these steps:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
*Project maintained by [Himanshu Nagose](https://github.com/himanshunagose1806).*
