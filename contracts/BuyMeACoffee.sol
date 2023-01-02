// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract BuyMeACoffee {
    struct Memo {
        string name;
        string message;
        address sender;
        uint256 timestamp;
        uint256 amount;
    }

    address payable owner;

    Memo[] public memos;

    constructor(){
        owner = payable(msg.sender);
    }

    function buyCoffee(string memory _name, string memory _message) public payable {
        require(msg.value > 0, "You can't send 0 ETH");
        memos.push(
            Memo(
                _name, _message, msg.sender, block.timestamp, msg.value
        ));
        owner.transfer(msg.value);
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

}