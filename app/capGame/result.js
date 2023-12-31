import React from 'react';
import { 
  CapGameTab,
  Table,
  MySimpleLink
} from '../components';
import {styles} from '../styles/styles';

const tabs = [
  {name: "Tarix", link: "/capGame/history", current: false},
  {name: "Sual", link: "/capGame/question", current: false},
  {name: "Nəticə", link: "/capGame/result", current: true}
]

const tableColumns = [
  "Oyunçu",
  "Xal",
  "Reytinq"
]

const tableData = [
  ["Elnur", Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1],
  ["Jamila", Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1],
  ["Azim", Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1],
  ["Elcan", Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1],
]
for (let i = 5; i <= 20; i++) {
  tableData.push([`Oyunçu ${i}`, Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1]);
}

const Result = () => {
  return (
    <>
    <CapGameTab tabs={tabs}/>
    <Table tableData={tableData} tableColumns={tableColumns}/>
    </>
  );
};

export default Result;