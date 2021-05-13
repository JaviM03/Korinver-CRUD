
Esta aplicación es un simple To-Do List para la administración de un hospital y así agilizar los procesos que se llevan a cabo dentro de este.

Para esta aplicación se trabajó para el **back-end** con *node.js + express* al igual que se hizo uso de *Sequelize* para el mapeo objeto-relacional y se ha usado PostgreSQL como motor de base de datos. 
La estructura del proyecto es la siguiente:

![image](https://user-images.githubusercontent.com/37260688/118061830-fdb32b80-b352-11eb-801a-ccbc18ec62b4.png)

El contenido de las carpetas es la siguiente:

- config: la carpeta config contiene el archivo *db.config.js* en el cual se hace la configuración a la base de datos.
- controllers: en esta carpeta se encuentra el archivo *list.controllers.js*, donde se han configurado todos los controladores de los métodos a utilizar en nuestra app, entre ellos están:

  * Create()
  
  * FindAll()
  
  * FindOne()
  
  * Update()
  
  * Delete()
  
- models: En esta carpeta hay dos archivos:
  - index.js: Aquí inicializamos *Sequelize*
  - list.models.js: Definimos *Sequelize*

- routes: En el archivo routes.js definimos la respuesta dada a los endpoints realizados.


Para el **front-end** se trabajó con el framework *Vue.js*  con ayuda de las librerias de *Axios* y *Vue router*.
