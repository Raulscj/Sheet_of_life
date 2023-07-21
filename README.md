# Sheet_of_life
Sheet of life es una página donde se muestran los CV (Currículum Vitae) del equipo, conformado por Raúl Gonzalez y Sara Avila. Presenta una página principal donde el usuario puede escoger entre 2 imágenes correspondientes a la hoja de vida de cada uno de los autores.
# Ejecución
Para ejecutar el código se necesita:
  - Descargar el código desde el repositorio.
  - Una vez descargado se abre una consola dentro de la carpeta Sheet_of_life.
  - Se coloca el comando "cd sheetOfLife". Otra alternativa es escribir "cd s" y dar tab, ya que ello lo autorrellena.
  - Luego el comando "npm i" para instalar todas las dependencias necesarias.
  - Por último el comando "npm run dev" para correr el servidor.
  - Luego se presiona la letra "o" para abrirlo directo en el navegador o también se puede mantener el ctrl y dar click al enlace que aparece en consola. Si ninguna de estas opciones funciona, puede acceder al servidor en "http://localhost:5173/".
# Estructura
Se maneja con la biblioteca React que permite usar componentes y renderizar vistas de una maneras más eficaz, de la mano con la librería de bootstrap para los estilos de las hojas de vida. 
El archivo App mantiene las rutas de las hojas de vida de cada autor, he allí donde se debe editar o modificar los componentes que se agreguen o se elimine.
Ahora bien los archivos con el nombre de la persona mantienen los datos que se ven reflejados la información de la hoja de vida.
Para la realización del proyecto cada uno de los integrantes realizó sus hojas de vida en sus respectivas ramas, las cuales fueron hechas merge a main para mostrar un resultado completo.
# Comando utilizados
Para iniciar un proyecto con git se utilizó el comando "git init", a partir de ahí el comando más utilizado es "git commit -m" y "git commit -am" la diferencia que hace la "a" en el segundo es que selecciona de forma automática todos los archivos modificados para subir, mientras que el primero debe acompañarse de "git add -archivos específicos" o "git add ." el cual es utilizado para seleccionar todos los archivos nuevos creados. Otro comando utilizado fue "git push" y "git pull", básicos para enviar y traer commits, también sus variaciones "git pull origin main" o "git pull origin -nombre de rama", esto para traernos los commmis de una rama específica o en su defecto actualizar una rama con cambios que está en main.
