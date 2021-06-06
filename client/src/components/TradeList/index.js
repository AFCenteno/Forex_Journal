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

const handleEditTrade = (edit) => {
  let stringifyEdit = JSON.stringify(edit)
  localStorage.setItem('editData', stringifyEdit)
  window.location = './NewTrade'
}

function TradeList() {
  const { loading, data } = useQuery(QUERY_TRADE);
  const tradeData = data?.user.trades || [];
  const [removeTrade] = useMutation(REMOVE_TRADE);

  let tradeLength = tradeData.length
  if (tradeLength === 0) {
    return <div className="addtrade"><Link id="addtrade" to="/NewTrade"><h2>You have no trades! Add one!</h2></Link></div>
  }
  console.log(tradeData)

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
      window.location.reload();
    } 
    catch (err) {
      console.error(err);
    }
  };
  

    return (
        <Container id="tradelist">
            {tradeData.map((trade) => {
              return (
                <Row id="traderow">
                    <Col><h3 className="infofont">{trade.name}</h3></Col>
                    <Col><h3 className="infofont">Entry: {trade.entryPrice}</h3></Col>
                    <Col><h3 className="infofont">Exit: {trade.exitPrice}</h3></Col>
                    <Col><h3 className="infofont">SL: {trade.sL}</h3></Col>
                    <Col><h3 className="infofont">TP: {trade.tP}</h3></Col>
                    <Col><h3 className="infofont">{trade.winLose}</h3></Col> 
                    <Col>                  
                    <Button id="button" onClick={() => handleDeleteTrade(trade.tradeId)}>
                      Delete!
                    </Button>
                    <Button id="button" onClick={() => handleEditTrade(trade)}>
                      Edit!
                    </Button>
                    </Col>
                    <Col xs={10}><h4 className="reasonfont">{trade.description}</h4></Col>
                    <Col className="dates" xs={2}>
                      Entered: {trade.dateEnter}
                      <br></br>
                      Exited: {trade.dateExit}
                    </Col>
                </Row>
              );
            })}
        {tradeData ? (
          <div></div>
        ) 
        : (
          <div className="flex-row">
          </div>
        )}
        { loading ? 
        <img src={spinner} alt="loading" />: null}
      </Container>
    );
}

export default TradeList;
