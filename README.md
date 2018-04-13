## Tareas App - Aplicación de comandos

Esta es una aplicación para generar Tareas con Node

Ejecutar este comando

````
npm install

````

Para crear una tarea:

```
 node app crear -d "Tarea por crear"

 ```

 Para listar las tareas


 ```
 node app listar

 ```
 

Para borrar


````
node app borrar -d "Tarea a borrar"

````


Para actualizar con comando -c o -completado (true o false), según esté o no terminada la tarea


````
node app actualizar -d "Tarea a actualizar" -c true