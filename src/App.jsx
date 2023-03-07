import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Main } from "./pages/main/main";

import { 
  Actions, Battle, Characters,
  General, Location, Monsters,
  Politic, Resources, Tolerance,
} from "./pages/rules";

import s from './app.module.css';

export default function App() {
  return (
    <div className={s.app}>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <Navigation />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='rules/general' element={<General />} />
        <Route path='rules/tolerance' element={<Tolerance />} />
        <Route path='rules/battle' element={<Battle />} />
        <Route path='rules/monsters' element={<Monsters />} />
        <Route path='rules/characters' element={<Characters />} />
        <Route path='rules/location' element={<Location />} />
        <Route path='rules/resources' element={<Resources />} />
        <Route path='rules/actions' element={<Actions />} />
        <Route path='rules/politic' element={<Politic />} />
        <Route path='players' element={<></>} />
      </Routes>
    </div>
  );
}