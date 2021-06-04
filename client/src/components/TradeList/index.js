import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {QUERY_TRADE} from "../../utils/queries";
import {REMOVE_TRADE} from "../../utils/mutations";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif"
import { Link } from "react-router-dom";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Auth from "../../utils/auth";


function TradeList() {
  const { loading, data } = useQuery(QUERY_TRADE);
  const tradeData = data?.user.trades || [];
  const [removeTrade] = useMutation(REMOVE_TRADE);

  const handleDeleteTrade = async (tradeId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(tradeId);
    if (!token) {
      return false;
    }

    try {
      await removeTrade({
        variables: { tradeId: tradeId }
      });
    } 
    catch (err) {
      console.error(err);
    }
  };

  return (
      <Container>
          {tradeData.map((trade) => {
            return (
              <Row>
                  <Col><h3>{trade.name}</h3></Col>
                  <Col><h3>{trade.entryPrice}</h3></Col>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteTrade(trade.tradeId)}>
                    Delete this Trade!
                  </Button>
              </Row>
            );
          })}
      {data ? (
        <div><Link to="/NewTrade"><h2>You have no trades! Add one!</h2></Link></div>
      ) : (
        <div className="flex-row">
        <Link to="/NewTrade"><h2>You have no trades! Add one!</h2></Link>
        <h3>You haven't added any Trades yet!</h3>
        </div>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </Container>
  );
}

export default TradeList;
