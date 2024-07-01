'use client'
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import AddTask from "@/components/AddTask";
import NoTask from "@/components/NoTask";
import Task from "@/components/Task";
import Loading from "@/components/Loading";

import { ITask } from "@/types";
import { Flex } from '@chakra-ui/react';


export default function Home() {

  const [task, setTask] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [allTasks, setAllTasks] = useState([])

  //= function to create a task

  const handleCreateTask = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/task/new", {
        method: 'POST',
        body: JSON.stringify({
          task: task
        })
      })
      if (response.ok) {
        setTask('')
        fetchTasks()
      }
      else { console.log('error') }
    }
    catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  }


  //= function to fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all")
      const data = await response.json()
      setAllTasks(data)
      setIsLoading(false)
    }
    catch (error) {
      console.log(error)
    }
  }


  //= function to cross a task
  const handleCompletedTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/completed/${id}`, {
        method: "PATCH"
      })
      if (response.ok) {
        await fetchTasks()
      }
      else { console.log('error completing task') }
    }
    catch (error) {
      console.log('error');
    }
  }


  //= function to delete a task
  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE"

      })
      if (response.ok) {
        setAllTasks((prevTasks) => prevTasks.filter((task: ITask) => task._id !== id))
      }
      else { console.log('error') }
    }
    catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Flex direction="column" p="2rem">
            {allTasks.length > 0 ?
              allTasks.map((individualTask: ITask) => (
                <Task key={individualTask._id} individualTask={individualTask} handleCompletedTask={handleCompletedTask} handleDeleteTask={handleDeleteTask} />
              )) : (
                <NoTask />
              )
            }
          </Flex>
        </>
      )}
    </>
  );
}
