import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:3001';

interface Doctor {
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
    console.error('Error fetching doctors:', error);
    throw new Error('Error fetching doctors');
  }
};

export const getCities = (): Promise<string[]> => {
  return axios.get(`${API_BASE_URL}/cities`);
};
