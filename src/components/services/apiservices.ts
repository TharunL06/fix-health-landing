import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export interface Doctor {
  id: number;
  name: string;
  expertise: string;
  city: string;
}

export const getDoctorsByCity = async (city: string): Promise<Doctor[]> => {
  try {
    const response: AxiosResponse<Doctor[]> = await axios.get(`${API_BASE_URL}/doctors`);

    const allDoctors: Doctor[] = response.data;

    const filteredDoctors = allDoctors.filter((doctor: Doctor) =>
      doctor.city.toLowerCase() === city.toLowerCase()
    );

    return filteredDoctors;
  } catch (error) {
    throw new Error('Error fetching doctors');
  }
};

export const getCities = async (): Promise<string[]> => {
  try {
    const response: AxiosResponse<Doctor[]> = await axios.get(`${API_BASE_URL}/doctors`);
    console.log(response.data)
    const cities: string[] = Array.from(new Set(response.data.map((doctor) => doctor.city)));
    console.log(cities)
    return cities;
  } catch (error) {
    throw new Error('Error fetching cities');
  }
};

