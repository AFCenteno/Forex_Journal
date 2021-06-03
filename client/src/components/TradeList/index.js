import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import {QUERY_TRADE } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif"
import { Link } from "react-router-dom";

function TradeList() {
  const { loading, data } = useQuery(QUERY_TRADE);

  console.log(data)

  return (
    <div className="my-2">
      <Link to="/NewTrade"><h2>Add a trade!</h2></Link>
      {data ? (
        <div className="flex-row">
        </div>
      ) : (
        <h3>You haven't added any Trades yet!</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default TradeList;
