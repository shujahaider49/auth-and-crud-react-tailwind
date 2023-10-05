import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { TEInput, TERipple } from 'tw-elements-react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    status: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateUser = () => {
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyMDMzYjAxYTNiYWVhMjRmMTQzMDQiLCJpYXQiOjE2OTU4ODIzMzMsImV4cCI6MTY5NjIyNzkzM30.Ax9xzud4EpiG1wVpnTrC2RM9jhnlXzIU1wQQKSsK4Tw";

    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    axios
      .post('http://localhost:5000/api/register', formData, { headers })
      .then((res) => {
        console.log('User created successfully:', res.data);
        navigate("/userlist");
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };


  return (
    <>
      <Navbar />

      <section className="h-screen bg-gray-900 text-white">
        <div className="h-full">
          <div className="g-6 flex h-full items-center justify-center">
            <Fade bottom>
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <form>
                  <Fade left>
                  <div className="flex flex-row items-center justify-center lg:justify-center">
                    <p className="mb-3 mr-4 text-lg">Create Account</p>
                  </div>
                  </Fade>
                  <TEInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    label="Name"
                    size="lg"
                    className="mb-6"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  ></TEInput>
                  <TEInput
                    type="text"
                    name="role"
                    placeholder="Role"
                    label="Role"
                    size="lg"
                    className="mb-6"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  ></TEInput>
                  <TEInput
                    type="text"
                    name="status"
                    placeholder="Status"
                    label="Status"
                    size="lg"
                    className="mb-6"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  ></TEInput>
                  <TEInput
                    type="text"
                    name="email"
                    placeholder="Email address"
                    label="Email address"
                    size="lg"
                    className="mb-6"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  ></TEInput>

                  <TEInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    label="Password"
                    size="lg"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  ></TEInput>

                  {/* ... other form elements ... */}

                  <div className="text-center lg:text-left">
                    <TERipple rippleColor="light">
                      <button
                        type="button"
                        className="inline-block rounded bg-primary mt-4 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        onClick={handleCreateUser}
                      >
                        Create
                      </button>
                    </TERipple>
                  </div>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateUser;
