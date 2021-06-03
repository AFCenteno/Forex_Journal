import React, { useState } from "react";
import { ADD_TRADE } from "../utils/mutations";
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";


function NewTrade() {
    const [formState, setFormState] = useState({ name: " ", description: " ", entryPrice: 0, exitPrice: 0, sL: 0, tP: 0, winLose: " " });
    const [addTrade] = useMutation(ADD_TRADE);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
          const mutationResponse = await addTrade({ variables: { name: formState.name, description: formState.description, entryPrice: formState.entryPrice, exitPrice: formState.exitPrice, sL: formState.sL, tP: formState.tP, winLose: formState.winLose } })
        } catch (e) {
          console.log(e)
        }
      };

    return (
    <div className="container my-1">
        <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <input
            placeholder="Currency Pair"
            name="name"
            type="string"
            id="email"
          />
        </div>
        <div className="flex-row space-between my-2">
          <input
            placeholder="Reasoning behind your trade."
            name="description"
            type="password"
            id="pwd"
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