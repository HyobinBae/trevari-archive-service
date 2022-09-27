FROM nginx:alpine

COPY conf /etc/nginx
COPY build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

