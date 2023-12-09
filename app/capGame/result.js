import React from 'react';
import { 
  CapGameTab,
  Table,
  MySimpleLink
} from '../components';

const tabs = [
  {name: "History", link: "/capGame/history", current: false},
  {name: "Question", link: "/capGame/question", current: false},
  {name: "Result", link: "/capGame/result", current: true}
]

const tableColumns = [
  "Player",
  "Points",
  "Reyting"
]

const tableData = [
  ["Elnur", Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1],
  ["Jamila", Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1],
  ["Azim", Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1],
  ["Elcan", Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1],
]
for (let i = 5; i <= 20; i++) {
  tableData.push([`Player ${i}`, Math.floor(Math.random() * 10), Math.floor(Math.random() * 20) + 1]);
}

const Result = () => {
  return (
    <>
    <CapGameTab tabs={tabs}/>
    <Table tableData={tableData} tableColumns={tableColumns}/>
    <MySimpleLink link="/team" text="Team Menu"/>
    </>
  );
};

export default Result;