import React, { useState, useRef } from 'react';

const ModernForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    skills: [],
    experience: '',
    bio: ''
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSkillChange = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.age) {
      newErrors.age = 'Age is required';
    }
    
    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          User Registration Form
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span>⚠️</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span>⚠️</span> {errors.email}
                  </p>
                )}
              </div>

              {/* Age Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span>⚠️</span> {errors.age}
                  </p>
                )}
              </div>

              {/* Gender Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span>⚠️</span> {errors.gender}
                  </p>
                )}
              </div>

              {/* Skills Field */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Skills
                </label>
                <div className="space-y-3">
                  {['React', 'Node', 'Mongo', 'Express'].map(skill => (
                    <label
                      key={skill}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 cursor-pointer transition-all duration-200"
                    >
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleSkillChange(skill)}
                        className="w-5 h-5 rounded border-2 border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500 cursor-pointer"
                      />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Experience (years)
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Years of experience"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Upload Resume
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                />
              </div>

              {/* Bio Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Short bio (max 150 chars)"
                  maxLength={150}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 resize-none"
                />
                <p className="text-xs text-gray-500 text-right">
                  {formData.bio.length}/150 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg border border-gray-100 sticky top-8 h-fit">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Live Preview
            </h2>
            
            <div className="space-y-5">
              <div className="group">
                <p className="text-sm font-semibold text-gray-500 mb-1">Name:</p>
                <p className="text-lg font-bold text-gray-800 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg">
                  {formData.name || <span className="text-gray-400 italic">Not provided</span>}
                </p>
              </div>

              <div className="group">
                <p className="text-sm font-semibold text-gray-500 mb-1">Email:</p>
                <p className="text-lg font-bold text-gray-800 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg break-all">
                  {formData.email || <span className="text-gray-400 italic">Not provided</span>}
                </p>
              </div>

              <div className="group">
                <p className="text-sm font-semibold text-gray-500 mb-1">Age:</p>
                <p className="text-lg font-bold text-gray-800 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg">
                  {formData.age || <span className="text-gray-400 italic">Not provided</span>}
                </p>
              </div>

              <div className="group">
                <p className="text-sm font-semibold text-gray-500 mb-1">Gender:</p>
                <p className="text-lg font-bold text-gray-800 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg">
                  {formData.gender || <span className="text-gray-400 italic">Not selected</span>}
                </p>
              </div>

              <div className="group">
                <p className="text-sm font-semibold text-gray-500 mb-1">Skills:</p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-3 rounded-lg">
                  {formData.skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map(skill => (
                        <span
                          key={skill}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-400 italic">No skills selected</span>
                  )}
                </div>
              </div>

              <div className="group">
                <p className="text-sm font-semibold text-gray-500 mb-1">Experience:</p>
                <p className="text-lg font-bold text-gray-800 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg">
                  {formData.experience ? `${formData.experience} years` : <span className="text-gray-400 italic">Not provided</span>}
                </p>
              </div>

              <div className="group">
                <p className="text-sm font-semibold text-gray-500 mb-1">Bio:</p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-3 rounded-lg">
                  <p className="text-gray-800 leading-relaxed">
                    {formData.bio || <span className="text-gray-400 italic">No bio added</span>}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernForm;
