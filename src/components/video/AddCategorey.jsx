import React, { useState, useEffect } from 'react';
import '../../css/addcategorey.css';
import Dashboard from '../../dashboard';
import {addCategorey} from '../../services/addcategorey';
import { categoreylist } from '../../services/addcategorey';
import { deletecatergorey } from '../../services/deletecategorey';
const AddCategory = () => {
  const [category, setCategory] = useState({
    videoCategory: ''
  });
  
  const [categorey, setCategories] = useState([]);
  console.log(categorey)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await categoreylist();
        setCategories(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (name) => {
    try {
      // Show confirmation alert before deleting
      const confirmDelete = window.confirm('Are you sure you want to delete this Categorey?');
      if (confirmDelete) {
        // Delete the video and update the list
        await deletecatergorey({name});
        setCategories(categorey.filter((cat) => cat.name !== name));
      }
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
  
      try {
        const res = await addCategorey(category.videoCategory);
        alert('Categorey added successfully ')
        console.log(res);
      } catch (error) {
        console.error(error);
      }
   
  };

  return (
    <div>
      <Dashboard/>
    <div className="add-category">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='label' htmlFor="videoCategory">Category Name:</label>
          <input type="text" id="videoCategory" name="videoCategory" value={category.videoCategory} onChange={handleChange} />
        </div>
        <button type="submit">Add Category</button>
      </form>
      <div className="category-list">
        <h1>List of Categorey</h1>
        {categorey?.map((cate, index) => (
          <li key={index} className="video-item">
            <h3>{cate.categorey}</h3>
            
         
            {/* Delete button */}
            <button className="delete-button" onClick={() => handleDelete(cate.categorey,cate._id)}>Delete</button>
          </li>
           ))}
      </div>
    </div>
    </div>
  );
};

export default AddCategory;
