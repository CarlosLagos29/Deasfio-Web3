//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataStorage{

    string private msj;

    constructor(string memory mensaje){
        msj = mensaje;
    }

    event DataStored(string indexed data);

    function set(string memory newMsj) public {
        msj = newMsj;
        emit  DataStored(newMsj);
    }

    function get() public view returns (string memory){
        return msj;
    }
}