# gigipizza

- Godaddy Domain

- Cloudflare Proxy HTTPS

- DigitalOcean Droplet

## Nginx Set Up

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04
sudo ln -s /etc/nginx/sites-available/gigipizza /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
