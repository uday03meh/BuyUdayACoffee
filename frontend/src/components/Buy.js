import {ethers} from 'ethers'

const Buy = ({state}) => {

    const buyCoffee = async(event) => {
        event.preventDefault()
        const {contract} = state
        const name = document.querySelector("#name").value
        const message = document.querySelector("#message").value
        const number = document.querySelector("#number").value
        console.log(name, message, contract)
        const amount = {value:ethers.utils.parseEther(number)}
        const txn = await contract.buyCoffee(name,message,amount)
        await txn.wait()
        console.log("transaction is completed!")
    }
    return<>
    <form onSubmit={buyCoffee}>
        <div style={{ textAlign: "center", margin: "5px", padding:"5px"}}>
    <label style={{padding:"5px"}}>
<div>
    Name:
</div>
    <input type = "text" id = "name" placeholder="Enter your name" style={{margin: " 5px 10px",  }}></input>
    </label>
    </div>
    <div style={{ textAlign: "center", margin: "5px", padding:"5px" }}>
    <label style={{padding:"5px"}}>
        <div>Message:</div>
    <input type="text" id = "message" placeholder="Enter your Message" style={{margin: "5px 10px",  }}></input>
    </label>
    </div>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <label>Amount:
        <input type="text" id="number"></input>
        ETH
        </label>
    </div>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
    <button type="submit" disabled={!state.contract} style={{
        backgroundColor : '#0073e6',
        color : 'white',
        padding : '10px 20px',
        fontSize : '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

    }} >Send Message</button>
    </div>
        </form></>
}

export default Buy