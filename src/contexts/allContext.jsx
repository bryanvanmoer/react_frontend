import React, { useState, useEffect } from "react";
// import * as gamesService from "../services/gamesApi.js";
// import * as salesService from "../services/salesApi.js";
import * as playersService from "../services/playerApi";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  // const [gamesList, setgamesList] = useState([]);
  // const [salesList, setsalesList] = useState([]);
  const [playersList, setplayersList] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // const [authUser, setAuthUser] = useState([]);

  const initialL = () => {
    // gamesService.retrieveAll().then((ga) => {
    //     setgamesList(ga);
    // });
    // salesService.retrieveAll().then((sa) => {
    //     setsalesList(sa);
    // });
    playersService.retrieveAll().then((players) => {
      setplayersList(players);
    });
  };

  useEffect(initialL, []);

  // const deleteSale = (id) => {
  //   const objToDelete = salesList.filter((p) => p.id === id);
  //   salesService.remove(objToDelete[0].id).then((r) => console.log(r));
  //   setsalesList(salesList.filter((p) => p.id !== id));
  // };

  // const getSaleWithGame = (id) => {
  //   const Liste = salesList.find((sa) => sa.id === id);
  //   //console.log(Liste)
  //   const game = gamesList.find((ga) => ga.id === Liste.game);
  //   const li = [{ Liste, game: game }];
  //   return li;
  // };

  // const getGameWithSales = (id) => {
  //   const Liste = salesList.filter((sa) => sa.game === id);
  //   const game = gamesList.find((ga) => ga.id === id);
  //   const li = [{ game, sales: Liste }];
  //   return li;
  // };

  const exposedValue = {
    playersList,
    setplayersList,
    isUserLoggedIn,
    setIsUserLoggedIn,
    //authUser,
    //setAuthUser,
    // gamesList,
    // salesList,
    // getSaleWithGame,
    // getGameWithSales,
    // setsalesList,
    // deleteSale,
  };
  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
