## Installation
Hi there. 
This is the step by step installation guide.
+ First clone the the github repository
```
git clone https://github.com/Shovickbarua/laravel_react_authentication_and_crud_example.git
```
+ Now setup the project. Make sure to install composer, then generate token and migrate the database using this commands
```
composer update
php artisan key:generate
php artisan migrate
php artisan storage:link
```
+ Run npm installation command
```
npm install
```
+ Now run the project using this command
```
php artisan serve
npm run dev
```
Happy Coding :wink:
