FROM php:8.4-fpm

# Depend├¬ncias do sistema
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libpng-dev libonig-dev libxml2-dev \
    libpq-dev libicu-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql mbstring zip bcmath intl opcache \
    && pecl install redis && docker-php-ext-enable redis

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

RUN composer install --no-dev --optimize-autoloader \
 && cp -n .env.example .env \
 && php artisan key:generate \
 && chown -R www-data:www-data storage bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]