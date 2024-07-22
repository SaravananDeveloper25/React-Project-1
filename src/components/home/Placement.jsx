import React from 'react'

const Placement = () => {
  const handleDownload = () => {
    // Replace 'example.pdf' with the path to your file
    const fileUrl = 'http://localhost:3000/Java Fullstack Syllabus Final.pdf';
    const fileName = 'Java Fullstack Syllabus Final.pdf';

    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to download file');
        }
        return response.blob();
      })
      .then(blob => {
        // Create a URL for the blob
        const url = window.URL.createObjectURL(new Blob([blob]));

        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);

        // Append the link to the body
        document.body.appendChild(link);

        // Click the link to trigger download
        link.click();

        // Remove the link from the body
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });}
  return (
    <>
      <div>
        <section></section>
        <p>At Getin Technologies Training Institute in Bengaluru, we are committed to ensuring our students achieve their career aspirations through a comprehensive and strategic placement process. Our structured approach to placements is designed to equip students with the necessary skills, knowledge, and opportunities to secure rewarding positions in top-tier companies.</p>
        <button onClick={handleDownload} style={{background:"red",border:'none',padding:'10px',borderRadius:'10px',fontWeight:600,cursor:'pointer'}}>Downdload placement Report</button>
    </div>

    </>
    
  )
}

export default Placement