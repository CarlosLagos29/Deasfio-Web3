# Desafío web3

Desafío Técnico para probar y testear el desarrollo de mi primera Dapp desarrollada desde cero. Cabe recalcar que esta es mi primera experiencia con este tipo de aplicaciones, lo cual se nota ya que me llevó bastante tiempo y esfuerzo poder desarrollarla. Dentro del código se encontrarán unos pocos comentarios para comprender mejor este.

## Primeros pasos

Para poder interactuar y desplegar la aplicación, será necesario ejecutar algunos comandos en la terminal además de tener alguna billetera en el navegador como [Metamask](https://metamask.io/).

*Aclaración: los comandos `npm install` deben ejecutarse en una terminal diferente en cada carpeta.*

### Carpeta Back

Primero, instalar dependencias ejecutando el comando:

```
npm install
```
Luego, una vez instaladas, crear un archivo `.env` para poder guardar los datos de tu billetera de manera segura.

Dentro de este archivo, crear una variable `MNEMONIC=` para acceder a tu billetera, donde pondrás tus 12 frases de acceso. (Si no sabes cómo hacerlo, ingresa a Configuración > Seguridad y privacidad).

Debería quedar algo así:
`MNEMONIC=sus frases respetando los espacios`

Una vez realizados estos pasos, podrás usar el backend, desplegando el contrato con el comando:


```
truffle compile
```
Y migrar este con:
```
truffle migrate --reset --network development
```

### Carpeta Front

Aquí solamente deberás instalar las dependencias:
```
npm install
```
Y listo, podrás ejecutar la aplicación con normalidad ejecutando en la terminal:
```
npm run dev
```

## DApp

La aplicación permite interactuar con un campo de entrada (`input`). Aquí algunos detalles importantes:

- **Validación de Campo de Entrada**: El campo de entrada no aceptará valores vacíos. El botón de enviar estará deshabilitado mientras el campo esté vacío, y se mostrará un mensaje de alerta al usuario.
  
- **Gestión de Transacciones**: Durante la ejecución de una transacción, el botón de enviar también estará deshabilitado para evitar errores y asegurar que no se intente realizar otra transacción antes de que la anterior haya concluido.

- **Asociación de Billetera**: La Dapp cuenta con un apartado donde podrás verificar y confirmar que tu billetera está correctamente asociada. Esto es fundamental para la interacción con Metamask y la firma de transacciones.
 
## Tecnologías

### Backend

- **Node.js**: Entorno de programación.
- **Truffle**: Entorno de creación y despliegue del smart contract.
- **JavaScript**: Lenguaje de programación principal.
- **Solidity**: Lenguaje para crear el smart contract.
- **Infura-Sepolia testnet**: Testnet utilizada para desplegar el smart contract.

### Frontend

- **React**: Biblioteca utilizada para crear la interfaz de usuario.
- **Web3.js**: Biblioteca utilizada para interactuar con el smart contract desde el frontend.
- **TailwindCSS**: Biblioteca para facilitar y optimizar los estilos básicos para la interfaz de usuario.
- **Vite**: Entorno de desarrollo.
- **TypeScript**: Lenguaje de programación principal.

### Otros

- **MetaMask**: Billetera virtual usada para las prueba.
- **Faucet Google Cloud Web3**: Para obtener monedas vituales (Ethereum Sepolia)



