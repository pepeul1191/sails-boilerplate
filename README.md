# Sails

## Comandos para generar código

Instalar sails de manera global:

    $ npm install -g sails

Generar controlador <<nombre>>:

    $ sails generate api <<nombre>>

Para corregir el error ENOSPC en caso de presentarse:

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

---

Fuentes:

+ https://sailsjs.com/documentation/anatomy/api/controllers
+ https://github.com/balderdashy/sails/issues/2133