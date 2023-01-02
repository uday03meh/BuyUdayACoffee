import { useState, useEffect } from "react";
import {ethers} from 'ethers';
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      // console.log(contract)
      console.log(memos);
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
    {/* Messages */}
      <p
        style={{
          textAlign: "center",
          backgroundColor: "#EAFF63",
          padding: "7px",
          width: "10%",
          minWidth:'80px',
          margin: "20px auto",
          fontSize : '20px'
        }}
      >
        Messages
      </p>
      <div
        className="container-fluid"
        key={Math.random()}
      >
        <table style={{ width: '100%',
                  marginBottom: "5px",
                }}>
          <tbody>
            <tr>
              {/* Sender's Name Styling */}
              <td
                style={{
                  backgroundColor: "pink",
                  textAlign: "center",
                  border: "1px solid white",
                  borderCollapse: "collapse",
                  padding: "7px",
                  width: "15%",
                  minWidth: "200px",
                }}
              >
                Sent By
              </td>
              {/* Message styling */}
              <td
                style={{
                  textAlign: "center",
                  backgroundColor: "lightGreen",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "30%",
                        minWidth: "200px",
                }}
              >
                Message
              </td>

              {/* Amount styling */}
              <td
                style={{
                  textAlign: "center",
                  backgroundColor: "#6f6f6f",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "8%",
                        minWidth: "20px",
                }}
              >
                Amount
              </td>
              {/* Date styling */}

              <td
                style={{
                  backgroundColor: "khaki",
                  textAlign: "center",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "14%",
                        minWidth: "110px",
                }}
              >
                Date
              </td>
              {/* Time styling */}
              <td
                style={{
                  textAlign: "center",
                  backgroundColor: "salmon",
                  border: "1px solid white",
                  borderCollapse: "collapse",
                  padding: "7px",
                  width: "14%",
                  minWidth: "80px",
                }}
              >
                Time
              </td>

              
                
              {/* Address styling */}

              <td
                style={{
                  textAlign: "center",
                        backgroundColor: "skyBlue",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "25%",
                        minWidth: "100px",
                        
                }}
              >
                Sender's Address
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {memos
        .map((memo) => {
          return (
            <div
              className="container-fluid"
              style={{}}
              key={Math.random()}
            >
              <table
                style={{
                  marginBottom: "5px",
                }}
              >
                <tbody>
                  <tr>
                    {/* Sender's Name Styling */}

                    <td
                      style={{
                        backgroundColor: "pink",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "15%",
                        minWidth: "200px",
                      }}
                    >
                      {memo.name}
                    </td>

{/* Message styling */}
<td
                      style={{
                        backgroundColor: "lightGreen",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "30%",
                        minWidth: "200px",
                      }}
                    >
                      {memo.message}
                    </td>
                    {/* Amount styling */}
              <td
                style={{
                  textAlign: "center",
                  backgroundColor: "#6f6f6f",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "8%",
                        minWidth: "20px",
                }}
              >
              {`${ethers.utils.formatEther(memo.amount)} ETH`}
              </td>
                    {/* Date styling */}
                    <td
                      style={{
                        textAlign: "center",
                        backgroundColor: "khaki",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "14%",
                        minWidth: "110px",
                      }}
                    >
                      {/* {new Date(memo.timestamp * 1000).toDateString()} */}

                      {/* {Intl.DateTimeFormat("en-US", options).format(memo.timestamp * 1000)} */}

                      {Intl.DateTimeFormat("en-GB", {
                        dateStyle: "full",
                        timeZone: "Asia/Kolkata",
                      }).format(memo.timestamp * 1000)}
                    </td>

                    {/* Time Styling */}
                    <td
                      style={{
                        textAlign: "center",
                        backgroundColor: "salmon",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "14%",
                        minWidth: "80px",
                      }}
                    >
                      {new Date(memo.timestamp * 1000).toLocaleTimeString()}
                    </td>


                    {/* Address styling */}
                    <td
                      style={{
                        textAlign: "center",
                        backgroundColor: "skyBlue",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "25%",
                        minWidth: "100px",
                        // minWidth:"20px",
                      }}
                    >
                      <a href = {`https://goerli.etherscan.io/address/${memo.sender}`} target="_blank">View on Etherscan</a>
                    </td>
                  </tr>
                </tbody>
              </table>
           </div>
          );
        })
        .reverse()}
    </>
  );
};
export default Memos;
