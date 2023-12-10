import React from 'react';
import { 
  CapGameTab,
  Table
} from '../components';
import {styles} from '../styles/styles';

const tableColumns = [
  "Sual",
  "Doğru Cavab",
  "Sizin Cavabınız",
  "Xal"
]

const tableData = [
  [1,"İsveçrə bıçağı", "İsveçrə vilkasi", 0],
  [2,"Teleqraf telləri üzərində", "Teleqraf telləri üzərində", 0],
  [3,"Qızıl", "Qızıl", 1],
]

const tabs = [
  {name: "Tarix", link: "/capGame/history", current: true},
  {name: "Sual", link: "/capGame/question", current: false},
  {name: "Nəticə", link: "/capGame/result", current: false}
]
const History = () => {
  return (
    <>
    <CapGameTab tabs={tabs}/>
    <Table tableData={tableData} tableColumns={tableColumns}/>
    </>
  );
};

export default History;