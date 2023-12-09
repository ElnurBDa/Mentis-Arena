import React from 'react';
import { 
  CapGameTab,
  Table
} from '../components';
import {styles} from '../styles/styles';

const tableColumns = [
  "Question",
  "Correct Answer",
  "Your Answer",
  "Point"
]

const tableData = [
  [1,"İsveçrə bıçağı", "İsveçrə vilkasi", 0],
  [2,"Teleqraf telləri üzərində", "Teleqraf telləri üzərində", 0],
  [3,"Qızıl", "Qızıl", 1],
]

const tabs = [
  {name: "History", link: "/capGame/history", current: true},
  {name: "Question", link: "/capGame/question", current: false},
  {name: "Result", link: "/capGame/result", current: false}
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