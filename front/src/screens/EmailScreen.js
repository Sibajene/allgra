import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function EmailScreen() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error('Please fill email, subject and message');
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };
  return (
    <div className="App">
      <ToastContainer position="bottom-center" limit={1} />
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <h1 className='gradient__text'>Send Us Email</h1>
          <div>
            <label className='text-white' htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            ></input>
          </div>
          <div>
            <label className='text-white' htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label className='text-white' htmlFor="message">Message</label>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label></label>
            <button className='bg-info' disabled={loading} type="submit">
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default EmailScreen;
