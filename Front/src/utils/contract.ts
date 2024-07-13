import web3 from "./web3";
import ABI from "./ABI.json"

const contractAdress = "0x870783A1B5Db882891113438e42466F620Fc4fEE"; //Direccion del contrato esta se muestr aqui para facilitar la correccion de no ser asi se agregaria aun archivo .env para mas seguridd
const contractInstance = new web3.eth.Contract(ABI, contractAdress);

export default contractInstance;