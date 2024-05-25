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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo totam voluptate cum ipsum, quis consectetur modi eius quasi quibusdam obcaecati veniam doloremque maiores voluptatem, officiis vero cumque repellat tempore?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga fugiat voluptatem illo incidunt doloribus? Incidunt voluptatum doloremque maiores, culpa eum dignissimos at, harum ab doloribus voluptate nobis itaque quae voluptas.</p>
        <button onClick={handleDownload} style={{background:"red",border:'none',padding:'10px',borderRadius:'10px',fontWeight:600,cursor:'pointer'}}>Downdload placement Report</button>
    </div>

    </>
    
  )
}

export default Placement