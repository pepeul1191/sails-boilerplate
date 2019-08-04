# Sails

## Comandos para generar código

Instalar sails de manera global:

    $ npm install -g sails

Arrancar la aplicación:

    $ sails lift
    $ sails lift --port=1337

Generar controlador nombre:

    $ sails generate api nombre

Generar helper nombre:

    $ sails generate helper nombre

Generar response nombre

    $ sails generate response nombre

Para corregir el error ENOSPC en caso de presentarse:

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

Dejar de seguir versionando archivo pero sin eliminar:

    $ git update-index --assume-unchanged config/mail.js

### Algunas datos importantes

+ Listas de controles de accesos en config/policies.,js
+ Sobreescribir 404 error

---

Fuentes:

+ https://sailsjs.com/documentation/anatomy/api/controllers
+ https://github.com/balderdashy/sails/issues/2133
+ https://sailsjs.com/documentation/reference/command-line-interface/sails-generate
+ https://sailsjs.com/documentation/concepts/policies
+ https://sailsjs.com/documentation/concepts/globals
+ https://sailsjs.com/documentation/concepts/helpers/example-helper
+ https://www.npmjs.com/package/sails-hook-morgan
+ https://stackoverflow.com/questions/21505674/is-there-a-way-to-disable-waterline-and-use-a-different-orm-in-sails-js
+ https://github.com/sgress454/sails-hook-autoreload
+ https://stackoverflow.com/questions/22288720/passing-parameters-to-sails-js-policies/30865238
+ https://github.com/pepeul1191/simple-java-mail
