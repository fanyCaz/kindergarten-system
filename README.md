# Gestión de guardería

## Instalar proyecto

1. Clona el proyecto en tu máquina usando `git clone <git:kindergarten>`. Puedes usar Https o ssh, lo recomendable es usar una llave única ssh.
2. Dirigete al proyecto en consola con `cd kindergarten-system`
3. Inicializa el proyecto con `npm install`
4. Para iniciar el proyecto en un servidor local haz el comando `npm start` o `npm run dev-linux` o `npm run dev-windows` dependiendo del SO que uses.
5. Dirigete en tu navegador web de preferencia a la dirección: `localhost:3000`.

## Desarrollo

### Base de datos

Se usa la base de datos MariaDB y el ORM Sequelize.

Para configurarlo sigue las instrucciones del siguiente issue:(Instalar base de datos)[https://github.com/fanyCaz/kindergarten-system/issues/21]

Puedes usar el archivo `config/config.json.example` como ejemplo para tu configuración de la base de datos.

Después podrás correr `npx sequelize db:migrate` y todos los archivs referentes a la base de datos estarán listos.

### Vistas

Se usa `pug` como renderizador de las vistas.

## Contribuir al proyecto

Cada vez que realices un cambio, crea un issue en uno de los 3 proyectos correspondientes y asignatelo.

Después crea un Pull Request linkeado al issue. Si prefieres que alguien revise tu código antes de hacer merge puedes requerir un Reviewer en tu PR.

Por favor, asegurate de no tener conflictos antes de hacer merge de tu rama con la principal.
