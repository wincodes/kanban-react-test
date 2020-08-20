import React, { useState, useEffect } from "react";
import Header from "./header";
import Stages from "./stages";
import firebase from "../../../firebase";

const Index = () => {
  const [filters, setFilters] = useState([
    "longform",
    "seoarticle",
    "blogpost",
    "micrographic",
    "longform10x",
  ]);
  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("tasks")
      .where("tag", "in", filters)
      .onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((el) => ({
          id: el.id,
          ...el.data(),
        }));
        setTasks(newTasks);
        setAllTasks(newTasks);
      });
  }, [filters]);

  const doSearch = (text) => {
    const searchedTasks = tasks.filter((el) => {
      return el.title.toLowerCase().includes(text.toLowerCase());
    });
    setTasks(searchedTasks);
  };

  const resetSearch = () => {
    setTasks(allTasks);
  };

  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Header
        filters={filters}
        setNewFilters={setNewFilters}
        doSearch={doSearch}
        doReset={resetSearch}
      />
      <Stages tasks={tasks} />
    </div>
  );
};

export default Index;
