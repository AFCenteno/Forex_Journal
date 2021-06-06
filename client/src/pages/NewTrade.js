import React, { useState } from "react";
import { ADD_TRADE } from "../utils/mutations";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { idbPromise } from "../utils/helpers";

function NewTrade() {
    let [formState, setFormState] = useState({ name: " ", description: " ", entryPrice: " ", exitPrice: " ", sL: " ", tP: " ", winLose: " " });
    const [addTrade] = useMutation(ADD_TRADE);

    const tradeId = Math.floor((Math.random() * 100000000000) + 1);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
          const mutationResponse = await addTrade({ variables: {tradeId: tradeId, name: formState.name, description: formState.description, entryPrice: formState.entryPrice, exitPrice: formState.exitPrice, sL: formState.sL, tP: formState.tP, winLose: formState.winLose, dateEnter: formState.dateEnter, dateExit: formState.dateExit } })
          console.log(mutationResponse)
          idbPromise('edit', 'delete')
          window.location = "./"
        } catch (e) {
          console.log(e)
        }
      };

      const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value
        });
      };


      

    return (
    <div id="newtradeinput" className="container my-1">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
          <label id="tradeinputlabel" htmlFor="name">Enter the currency pair you are trading. Ex:USD/CAD</label><br></br>
          <input
              name="name"
              type="name"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label id="tradeinputlabel" htmlFor="description">What is the reason you took this trade? Did it follow your trading rules/plan?</label><br></br>
            <textarea
              id="reasonbox"
              name="description"
              type="description"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
          <label id="tradeinputlabel" htmlFor="entryPrice">What is the entry price of your trade? Ex:109.67</label><br></br>
            <input
              name="entryPrice"
              type="entryPrice"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
          <label id="tradeinputlabel" htmlFor="exitPrice">What is the exit price of your trade? Ex:109.50</label><br></br>
            <input
              name="exitPrice"
              type="exitPrice"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
          <label id="tradeinputlabel" htmlFor="sL">At what price did you place your Stop Loss?</label><br></br>
            <input
              name="sL"
              type="sL"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
          <label id="tradeinputlabel" htmlFor="tP">At what price did you place your Take Profit?</label><br></br>
            <input
              name="tP"
              type="tP"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
          <label id="tradeinputlabel" htmlFor="winLose">Did you win or lose the trade?</label><br></br>
            <input
              name="winLose"
              type="winLose"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
          <label id="tradeinputlabel" htmlFor="dateEnter">What date did you enter the trade on? Ex:06/05/21</label><br></br>
            <input
              name="dateEnter"
              type="dateEnter"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
          <label id="tradeinputlabel" htmlFor="dateExit">What date did you exit the trade on? Ex:06/06/21</label><br></br>
            <input
              name="dateExit"
              type="dateExit"
              onChange={handleChange}
            />
          </div>


          <div className="flex-row flex-end">
            <button id="submit" type="submit">
              Submit
            </button>
          </div>
      </form>
    </div>
    );
}

export default NewTrade;