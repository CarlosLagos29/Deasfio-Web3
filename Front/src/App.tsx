import React, { useState, useEffect } from "react";
import contractInstance from "./utils/contract";
import web3 from "./utils/web3";

const App: React.FC = () => {
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string | unknown>("");
  const [transactionStatus, setTransactionStatus] = useState<boolean>(false);
  const [inputError, setInputError] = useState<boolean>(false);

  useEffect(() => {
    const getAccount = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        setCurrentAccount(accounts[0]);
      } catch (error) {
        console.error(error.message);
      }
    };
    const getContract = async () => {
      try {
        const result = await contractInstance.methods.get().call();
        setCurrentValue(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    getAccount();
    getContract();
  }, []);

  useEffect(() => {
    const errorSearch = (message: string) => {
      return message.trim() === "";
    };
    setInputError(errorSearch(message));
  }, [message]);

  const handleSetContract = async () => {
    setTransactionStatus(true);
    window.alert("transaccion en proceso");
    try {
      await contractInstance.methods
        .set(message)
        .send({ from: currentAccount });

      setTransactionStatus(false);
      window.alert("Transaccion completada");
      setMessage("");
      const result = await contractInstance.methods.get().call();
      setCurrentValue(result);
    } catch (error) {
      window.alert("Error al iniciar la transaccion");
      setTransactionStatus(false);
      console.error((error as Error).message);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    console.log(value);
    setMessage(value);
  };

  return (
    <div className=" flex flex-col justify-center items-center h-[75vh] mt-20 gap-5 text-xl text-pretty text-white">
      <h1>Interaccion con el Contrato</h1>
      <h2> Cuenta: {currentAccount}</h2>

      <h2>
        Mensaje actual del Contrato:{" "}
        <span className=" text-green-500">{currentValue as string}</span>
      </h2>
      <input
        className={` border-2 ${
          inputError ? "border-red-500" : "border-black"
        } rounded-lg px-2 py-1 text-black`}
        type="text"
        value={message}
        onChange={handleChange}
      />
      {inputError ? (
        <p className=" text-red-500 -mt-4">
          Debe llenar el input con algun mensaje
        </p>
      ) : (
        ""
      )}
      <button
        className=" py-2 px-4 bg-white border border-black text-black disabled:text-gray-500 disabled:border-gray-500 rounded-lg hover:scale-105 disabled:hover:scale-100 transition-transform "
        onClick={handleSetContract}
        disabled={transactionStatus || inputError ? true : false}
      >
        Enviar Mensaje
      </button>
    </div>
  );
};

export default App;
