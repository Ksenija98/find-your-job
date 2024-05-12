import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import { NavBar } from './NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Jobs from './Jobs';
import AppliedJobs from './AppliedJobs';
import Contact from './Contact';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [jobs, setJobs] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
        try {
            const response = await axios.get('https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo');
            const responseData = response.data.jobs;
            setJobs(responseData);
            console.log(responseData);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    fetchJobs();
  }, []);

  const updateAppliedJobs = (newJob) => {
    setAppliedJobs([...appliedJobs, newJob]);
    toast.success(<div>You have successfully applied for the position <strong>{newJob.jobTitle}</strong>!</div>);
  };

  const addToAppliedJobs = (id) => {
    const selectedJob = jobs.find((job) => job.id === id);
  
    const isJobInAppliedJobs = appliedJobs.some((job) => job.id === id);
  
    if (selectedJob && !isJobInAppliedJobs) {
      console.log('id: ', selectedJob.id);
      updateAppliedJobs(selectedJob);
    } else {
      console.log('Job is already in the Applied Jobs section.');
      toast.success(<div>You have already applied for the position <strong>{selectedJob.jobTitle}</strong>!</div>);
    }
  };

  const removeFromAppliedJobs = (id) => {
    const selectedJob = appliedJobs.find((job) => job.id === id);
    const updatedAppliedJobs = appliedJobs.filter((job) => job.id !== id);
    setAppliedJobs(updatedAppliedJobs);
    toast.success(<div>The application for the position <strong>{selectedJob.jobTitle}</strong> has been removed!</div>);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/jobs' element = {<Jobs jobs={jobs} onAdd={addToAppliedJobs}/>}/>
        <Route path='/applied-jobs' element = {<AppliedJobs appliedJobs={appliedJobs} onRemove={removeFromAppliedJobs}/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
