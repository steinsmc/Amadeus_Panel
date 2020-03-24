# Amadeus Panel

<center><b>Powered by Bugdhdj</b></center>

```shell
# Pull i18h
git submodule update --init --recursive

# Composer
composer install
php -r "file_exists('.env') || copy('.env.example', '.env');"
php artisan key:generate --ansi
# EDIT .env
php artisan migrate

# Frontend
npm install
npm run watch
caddy # or php artisan serve 
```
