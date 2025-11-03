// import React from 'react'
// import './Homecontact.css'

// export default function Homecontact() {
//   return (

//     <>
//     <section className='contact-sec'>
//         <div className="left-part">
//             <form action="">
//                 <h1>Book A Table</h1>
//                 <input type="text" placeholder='Your Name' /> <br />
//                 <input type="tel" placeholder='Phone Number' /> <br />
//                 {/* <input type="text" placeholder='How many persons?' /> */}
//                 {/* <select name="" id="">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                 </select> <br /> */}

//                  <select>
//       <option value="">How many persons?</option>
//       <option value="1">1 Person</option>
//       <option value="2">2 Persons</option>
//       <option value="3">3 Persons</option>
//       <option value="4">4 Persons</option>
//       <option value="5">5 Persons</option>
//     </select> <br />
                
//                 <input type="date"  />
//             </form>
//         </div>


//         <div className="right-part">
//                   {/* <div
//       className="mapouter"
//       style={{
//         position: "relative",
//         textAlign: "right",
//         width: "500px",
//         height: "450px",
//       }}
//     >
//       <div
//         className="gmap_canvas"
//         style={{
//           overflow: "hidden",
//           background: "none!important",
//           width: "500px",
//           height: "450px",
//         }}
//       >
//         <iframe
//           width="400"
//           height="300"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           src="https://www.google.com/maps/embed/v1/place?q=nagercoil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//           title="Google Map"
//         ></iframe>
//       </div>
//                  </div> */}

//                  <div style={{width: "100%"}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chennai+(FoodApp)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">popolazione comuni Italia mappa interattiva</a></iframe></div>
//         </div>
            
//     </section>
//     <div className='btn'>
// <button >Book Now</button>
//     </div>
    
// </>
//   )
// }


//
import React, { useState } from 'react';
import './Homecontact.css';

export default function Homecontact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    persons: '',
    date: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.persons) {
      newErrors.persons = 'Please select number of persons';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert(`✅ Table booked successfully!\n
Name: ${formData.name}
Phone: ${formData.phone}
Persons: ${formData.persons}
Date: ${formData.date}`);
      setFormData({ name: '', phone: '', persons: '', date: '' });
    }
  };

  return (
    <>
      <section className="contact-sec">
        <div className="left-part">
          <form onSubmit={handleSubmit} className='myForm'>
            <h1>Book A Table</h1>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <select
              name="persons"
              value={formData.persons}
              onChange={handleChange}
            >
              <option value="">How many persons?</option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5">5 Persons</option>
            </select>
            {errors.persons && <p className="error">{errors.persons}</p>}

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p className="error">{errors.date}</p>}

            <div className="btn">
              <button type="submit">Book Now</button>
            </div>
          </form>
        </div>

        <div className="right-part">
          <div style={{ width: '100%' }}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chennai+(FoodApp)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
