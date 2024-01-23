import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDoctorsByCity, getCities } from '../services/apiservices';
import "../BookingForm/Booking.css"

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    previousExperience: false,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState<string[]>([]);

  const { data: citiesData } = useQuery('cities', getCities);

  const doctorsQuery = useQuery(['doctors', formData.city], () =>
    getDoctorsByCity(formData.city)
  );

  const handleCityChange = (newCity: string) => {
    setFormData({ ...formData, city: newCity });
    doctorsQuery.refetch();
    setSearchTerm('');
    setFilteredCities([]);
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    const filtered = citiesData ? citiesData.filter((city: string) =>
      city.toLowerCase().includes(value.toLowerCase())
    ):[];
    setFilteredCities(filtered);
  };

  const handleFormSubmit = async () => {
    console.log('Filtered Doctors:', doctorsQuery.data);
  };

  return (
    <div className="booking-form-container">
      <h2 className='book-heading'>Consultation Booking</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          {filteredCities.length > 0 && (
            <ul>
              {filteredCities.map((city: string) => (
                <li key={city} onClick={() => handleCityChange(city)}>
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div>
          <label>Chief Complaints:</label>
          <textarea
            value={formData.chiefComplaints}
            onChange={(e) => setFormData({ ...formData, chiefComplaints: e.target.value })}
          />
        </div>
        {!formData.previousExperience && (
          <div>
            <label>
              Any previous experience with physiotherapy:
              <input
                type="checkbox"
                checked={formData.previousExperience}
                onChange={() =>
                  setFormData({
                    ...formData,
                    previousExperience: !formData.previousExperience,
                  })
                }
              />
            </label>
          </div>
        )}
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
      {doctorsQuery.data && (
        <div>
          <h3>Best Available Doctors :</h3>
          <ul>
            {doctorsQuery.data.length > 0 &&
              doctorsQuery.data.map((doctor: any) => (
                <li key={doctor.id}>
                  {doctor.name} - {doctor.expertise}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
