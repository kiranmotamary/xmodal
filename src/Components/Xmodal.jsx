import React,{useState} from "react";
import "./Xmodal.css"
const Xmodal =()=>{
    const [isOpen,setIsOpen] =useState(false);
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        phone:'',
        dob:''
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };
    const validateForm = () => {
        // Check for empty fields
        for (let key in formData) {
          if (!formData[key]) {
            alert(`Please fill out the ${key} field.`);
            return false;
          }
        }
    
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
          alert('Invalid email. Please check your email address.');
          return false;
        }
    
        // Phone number validation (10 digits)
        if (formData.phone.length !== 10 || isNaN(formData.phone)) {
          alert('Invalid phone number. Please enter a 10-digit phone number.');
          return false;
        }
    
        // Date of birth validation (future date)
        const dob = new Date(formData.dob);
        if (dob > new Date()) {
          alert('Invalid date of birth. Date of birth cannot be in the future.');
          return false;
        }
    
        return true;
      };
    const handleModal=()=>{
        setIsOpen(true);
    }
    const closeModal=()=>{
        setIsOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // On success, reset form data and close the modal
          setFormData({ username: '', email: '', phone: '', dob: '' });
          closeModal();
        }
      };
return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>User Details Modal</h1>
        <button style={{background:"#1976d2" ,color:"white",height:"40px",width:"100px",borderRadius:"5px",border:"none"}} onClick={handleModal}>Open Form</button>
        {isOpen&&(
            <div className="modal" onClick={closeModal}>
                <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                    <form onSubmit={handleSubmit}>
                        <h1>Fill Details</h1>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={formData.usename}
                            onChange={handleChange}
                            required
                         />

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                         />
                        <label htmlFor="phone">Phone:</label>
                        <input 
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                         />
                        <label htmlFor="phone">Date of Birth:</label>
                        <input 
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                         />
                         <button type= "submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        )}
    </div>
);
}
export default Xmodal;