import { useState } from 'react';
import { placedlist } from '../../data/placedlist';
import { Container } from 'react-bootstrap';



const data = placedlist
function PlacedStudent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current items for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to change pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
    <Container>
    <table  style={{ width: "100%" }} className='placement-table'>
        <thead>
          <tr id='table-head-row' >
            <th style={{borderTopLeftRadius:'10px'}}>Name</th>
            <th>completedCourse</th>
            <th>placedCompany</th>
            <th>location</th>
            <th style={{borderTopRightRadius:'10px'}}>packageCTC</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.completedCourse}>
              <td>{item.name}</td>
              <td>{item.completedCourse}</td>
              <td>{item.placedCompany}</td>
              <td>{item.location}</td>
              <td>{item.packageCTC}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
     

      {/* Pagination controls */}
      <div style={{ marginTop: "20px",textAlign:'center' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            style={{
              padding: "2px 4px",
              margin: "0 5px",
              border:'none',
              borderRadius:'2px',
              backgroundColor: currentPage === i + 1 ? "red" : " transparent",
              color: currentPage === i + 1 ? "white" : "black",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlacedStudent;
