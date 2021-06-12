# gigipizza

- Godaddy Domain

- Cloudflare Proxy HTTPS

- DigitalOcean Droplet

## Nginx Set Up

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04

## Nginx server block

```
server {
listen 80;
listen [::]:80;

        root /var/www/gigipizza;
        index index.html index.htm index.nginx-debian.html;

        server_name gigipizza www.gigipizza;

        location / {
                try_files $uri $uri/ =404;
        }

}
```

sudo ln -s /etc/nginx/sites-available/gigipizza /etc/nginx/sites-enabled/
