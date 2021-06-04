import React, { useState } from "react";
import { ADD_TRADE } from "../utils/mutations";
import { useMutation, useQuery } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import {QUERY_TRADE} from "../utils/queries";

function NewTrade() {
    const [formState, setFormState] = useState({ name: " ", description: " ", entryPrice: " ", exitPrice: " ", sL: " ", tP: " ", winLose: " " });
    const [addTrade] = useMutation(ADD_TRADE);

    const tradeId = Math.floor((Math.random() * 100000000000) + 1);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
          const mutationResponse = await addTrade({ variables: {tradeId: tradeId, name: formState.name, description: formState.description, entryPrice: formState.entryPrice, exitPrice: formState.exitPrice, sL: formState.sL, tP: formState.tP, winLose: formState.winLose } })
          console.log(mutationResponse)
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
    <div className="container my-1">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <input
              placeholder="Currency Pair?"
              name="name"
              type="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <input
              placeholder="Reasoning behind your trade."
              name="description"
              type="description"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <input
              placeholder="Entry Price?."
              name="entryPrice"
              type="entryPrice"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <input
              placeholder="Exit Price?."
              name="exitPrice"
              type="exitPrice"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <input
              placeholder="Stop Loss Price?"
              name="sL"
              type="sL"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <input
              placeholder="Take Profit Price?."
              name="description"
              type="description"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <input
              placeholder="Did You Win Or Lose The Trade?."
              name="winLose"
              type="winLose"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">
              Submit
            </button>
          </div>
      </form>
    </div>
    );
}

export default NewTrade;