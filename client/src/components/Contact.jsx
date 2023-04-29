
const Contact = () => {
      
  return (
    <>
        <section className='heading'>
            <h1>Support Form</h1>
        </section>

        <section className='form'>
            <form onSubmit={''}>
                <div className="form-group">
                    <input type="email" className="form-control" id='email' name='email' placeholder='Enter your email' onChange={''} />
                </div>
                <div className="form-group">
                    <textarea name="message" id="message" cols="30" rows="6" placeholder='Write message...'></textarea>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
    
  )
}

export default Contact;