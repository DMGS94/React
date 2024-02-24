function Contact() {
        const styles = { 
            ".card-contact": {
            backgroundColor: "lightyellow", 
            padding: "10px", 
            border: "2px solid yellow", 
            borderRadius: "5px"
        }
    }
  return (    
    <>
      <h1>Contact Little Lemon on this page.</h1>
      <section style ={styles} classname="card-contact">
        <div>
          <h2>Contact Information</h2>
          <p>Name: Little Lemon</p>
          <p>Email: littlelemon@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </section>
    </>
  );
}

export default Contact;