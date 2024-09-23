"use client"

import React, { useState, useEffect } from 'react'
import { quoteData, Data } from "../db/quoteDB"
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement); 

export default function ManagePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortedData, setSortedData] = useState<Data[]>(quoteData)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [sortField, setSortField] = useState<keyof Data>("id")


  useEffect(() => {
    let filteredData = quoteData.filter((quote) =>
      quote.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredData.sort((a, b) => {
      if (sortField === "likes") {
        return sortOrder === "asc" ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
      }
      if (sortOrder === "asc") {
        return a[sortField] > b[sortField] ? 1 : -1
      } else {
        return a[sortField] < b[sortField] ? 1 : -1
      }
    })

    setSortedData(filteredData)
  }, [searchTerm, sortOrder, sortField])
  

  const handleSort = (field: keyof Data) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder("asc")
    }
  };

  const categoryLikes: { [key: string]: number } = {};

  quoteData.forEach((quote) => {
    if (categoryLikes[quote.category]) {
      categoryLikes[quote.category] += quote.likes;
    } else {
      categoryLikes[quote.category] = quote.likes;
    }
  });

  // Prepare data for Pie chart
  const pieData = {
    labels: Object.keys(categoryLikes),
    datasets: [{
      data: Object.values(categoryLikes),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
    }]
  };

  return (
    <>
        <div className='my-4 pt-16'>
            <h2 className="text-xl font-semibold py-2 px-6">Likes per Category</h2>
            <div className="w-1/3 mx-auto font-semibold">
                <Pie className='' data={pieData} />
            </div>
        </div>
        
        {/* {Header & Search Table Section} */}
        <div className='bg-white shadow-lg border pt-2'>
          <div className='flex w-full justify-between items-center py-2 px-6'>
              <h1 className="text-xl font-semibold">Quote Lists</h1>
              <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search quotes..."
              className="p-2 w-1/3 border border-gray-400 rounded h-10"
              />
          </div>

          {/* {Table Section} */}
          <table className="table-auto w-full">
          <thead>
            <tr className="">
              <th className="text-left text-gray-700 border-b border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleSort("id")}>
                  ID {sortField === "id" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className="text-left text-gray-700 border-b border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleSort("text")}>
                  Quote {sortField === "text" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className="text-left text-gray-700 border-b border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleSort("category")}>
                  Category {sortField === "category" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className="text-left text-gray-700 border-b border-gray-300 px-4 py-2 cursor-pointer" onClick={() => handleSort("likes")}>
                  Likes {sortField === "likes" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((quote: Data) => (
              <tr key={quote.id} className="text-center">
                <td className="text-left text-sm text-gray-700 border-b border-gray-200 px-4 py-2">{quote.id}</td>
                <td className="text-left text-sm text-gray-700 border-b border-gray-200 px-4 py-2">{quote.text}</td>
                <td className="text-left text-sm text-gray-700 border-b border-gray-200 px-4 py-2">{quote.category}</td>
                <td className="text-left text-sm text-gray-700 border-b border-gray-200 px-4 py-2">{quote.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        


    </>
  );
}
