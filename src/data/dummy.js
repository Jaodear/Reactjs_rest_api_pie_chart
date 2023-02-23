/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { AiOutlineCluster } from 'react-icons/ai';
import { FiPieChart } from 'react-icons/fi';
import { BiLayout, BiConversation } from 'react-icons/bi';
import { RiBarChart2Line } from 'react-icons/ri';
import { TfiList, TfiWorld } from "react-icons/tfi";
import { IoDiamond } from "react-icons/io5";

export const EntitiesGrid = [
  {}
];

export const links = [
  {
    links: [
      {
        name: 'DATA ANALYTICS',
        icon: <RiBarChart2Line />,
      },
      {
        name: 'INTENTS',
        icon: <TfiList />,
      },
      {
        name: 'ENTITIES',
        icon: <BiLayout />,
      },
      {
        name: 'CONVERSATION FLOW',
        icon: <BiConversation />,
      },
      {
        name: 'BUSINESS LOGIC',
        icon: <AiOutlineCluster />,
      },
      {
        name: 'RULE-BASED',
        icon: <IoDiamond />,
      },
      {
        name: 'NLP',
        icon: <TfiWorld />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      }
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const IntentsGrid = [
  {}
];

export const EntitiesData = [
  {}
];

export const IntentsData = [
  {}
];

export const dropdownData = [
  {}
];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];