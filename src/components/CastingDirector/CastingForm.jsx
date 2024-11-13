import React from 'react';
import  { useState } from 'react';
import { Calendar, Clock, DollarSign, MapPin, Film, Users, AlertCircle } from 'lucide-react';

export default function CastingForm() {
 const [formData, setFormData] = useState({
  projectTitle: '',
  projectType: '',
  roleTitle: '',
  roleDescription: '',
  ageRange: { min: 18, max: 99 },
  gender: '',
  ethnicity: '',
  location: '',
  paymentDetails: '',
  paymentAmount: '',
  auditionDate: '',
  auditionLocation: '',
  requirements: '',
  submissionDeadline: '',
  contactEmail: '',
  unionStatus: ''

 });



 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  // Handle form submission here
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
   ...prev,
   [name]: value
  }));

 };



 return (

    

  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
   <div className="max-w-4xl mx-auto">
    <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
     <div className="mb-10 text-center">
      <h1 className="text-3xl font-bold text-white mb-2">Create Casting Call</h1>
      <p className="text-gray-400">Post your casting requirements and find the perfect talent</p>
     </div>


     <form onSubmit={handleSubmit} className="space-y-8">
      {/* Project Details Section */}
      <div className="space-y-6 bg-gray-900/50 p-6 rounded-xl border border-gray-700">
       <h2 className="text-xl font-semibold text-white flex items-center gap-2">
        <Film className="w-5 h-5 text-purple-400" />
        Project Details
       </h2>

        

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

         <label className="block text-sm font-medium text-gray-300">Project Title</label>

         <input

          type="text"

          name="projectTitle"

          value={formData.projectTitle}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

          required

         />

        </div>

        <div>

         <label className="block text-sm font-medium text-gray-300">Project Type</label>

         <select

          name="projectType"

          value={formData.projectType}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

          required

         >

          <option value="">Select type</option>

          <option value="Feature Film">Feature Film</option>

          <option value="Short Film">Short Film</option>

          <option value="TV Series">TV Series</option>

          <option value="Commercial">Commercial</option>

          <option value="Theater">Theater</option>

          <option value="Web Series">Web Series</option>

         </select>

        </div>

       </div>

      </div>



      {/* Role Details Section */}

      <div className="space-y-6 bg-gray-900/50 p-6 rounded-xl border border-gray-700">

       <h2 className="text-xl font-semibold text-white flex items-center gap-2">

        <Users className="w-5 h-5 text-purple-400" />

        Role Details

       </h2>

        

       <div className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

         <div>

          <label className="block text-sm font-medium text-gray-300">Role Title</label>

          <input

           type="text"

           name="roleTitle"

           value={formData.roleTitle}

           onChange={handleChange}

           className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

           required

          />

         </div>

         <div>

          <label className="block text-sm font-medium text-gray-300">Union Status</label>

          <select

           name="unionStatus"

           value={formData.unionStatus}

           onChange={handleChange}

           className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

           required

          >

           <option value="">Select status</option>

           <option value="SAG-AFTRA">SAG-AFTRA</option>

           <option value="Non-Union">Non-Union</option>

           <option value="Both">Both</option>

          </select>

         </div>

        </div>



        <div>

         <label className="block text-sm font-medium text-gray-300">Role Description</label>

         <textarea

          name="roleDescription"

          value={formData.roleDescription}

          onChange={handleChange}

          rows={4}

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

          required

         />

        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

         <div>

          <label className="block text-sm font-medium text-gray-300">Gender</label>

          <select

           name="gender"

           value={formData.gender}

           onChange={handleChange}

           className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

           required

          >

           <option value="">Select gender</option>

           <option value="Male">Male</option>

           <option value="Female">Female</option>

           <option value="Non-Binary">Non-Binary</option>

           <option value="Any">Any</option>

          </select>

         </div>

         <div>

          <label className="block text-sm font-medium text-gray-300">Age Range</label>

          <div className="grid grid-cols-2 gap-2">

           <input

            type="number"

            name="ageMin"

            placeholder="Min"

            value={formData.ageRange.min}

            onChange={(e) => setFormData(prev => ({

             ...prev,

             ageRange: { ...prev.ageRange, min: parseInt(e.target.value) }

            }))}

            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

            required

           />

           <input

            type="number"

            name="ageMax"

            placeholder="Max"

            value={formData.ageRange.max}

            onChange={(e) => setFormData(prev => ({

             ...prev,

             ageRange: { ...prev.ageRange, max: parseInt(e.target.value) }

            }))}

            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

            required

           />

          </div>

         </div>

         <div>

          <label className="block text-sm font-medium text-gray-300">Ethnicity</label>

          <select

           name="ethnicity"

           value={formData.ethnicity}

           onChange={handleChange}

           className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

           required

          >

           <option value="">Select ethnicity</option>

           <option value="All Ethnicities">All Ethnicities</option>

           <option value="African American">African American</option>

           <option value="Asian">Asian</option>

           <option value="Caucasian">Caucasian</option>

           <option value="Hispanic/Latino">Hispanic/Latino</option>

           <option value="Middle Eastern">Middle Eastern</option>

           <option value="Native American">Native American</option>

           <option value="Pacific Islander">Pacific Islander</option>

           <option value="Mixed">Mixed</option>

          </select>

         </div>

        </div>

       </div>

      </div>



      {/* Compensation Section */}

      <div className="space-y-6 bg-gray-900/50 p-6 rounded-xl border border-gray-700">

       <h2 className="text-xl font-semibold text-white flex items-center gap-2">

        <DollarSign className="w-5 h-5 text-purple-400" />

        Compensation

       </h2>

        

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

         <label className="block text-sm font-medium text-gray-300">Payment Details</label>

         <select

          name="paymentDetails"

          value={formData.paymentDetails}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

          required

         >

          <option value="">Select payment type</option>

          <option value="Paid">Paid</option>

          <option value="Deferred">Deferred</option>

          <option value="Unpaid">Unpaid</option>

         </select>

        </div>

        <div>

         <label className="block text-sm font-medium text-gray-300">Payment Amount</label>

         <input

          type="text"

          name="paymentAmount"

          value={formData.paymentAmount}

          onChange={handleChange}

          placeholder="e.g., $150/day or Scale"

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

         />

        </div>

       </div>

      </div>



      {/* Audition Details Section */}

      <div className="space-y-6 bg-gray-900/50 p-6 rounded-xl border border-gray-700">

       <h2 className="text-xl font-semibold text-white flex items-center gap-2">

        <Calendar className="w-5 h-5 text-purple-400" />

        Audition Details

       </h2>

        

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

         <label className="block text-sm font-medium text-gray-300">Audition Date</label>

         <input

          type="date"

          name="auditionDate"

          value={formData.auditionDate}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

          required

         />

        </div>

        <div>

         <label className="block text-sm font-medium text-gray-300">Location</label>

         <input

          type="text"

          name="auditionLocation"

          value={formData.auditionLocation}

          onChange={handleChange}

          placeholder="Address or Virtual"

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

          required

         />

        </div>

       </div>



       <div>

        <label className="block text-sm font-medium text-gray-300">Special Requirements</label>

        <textarea

         name="requirements"

         value={formData.requirements}

         onChange={handleChange}

         placeholder="e.g., Please prepare a 2-minute monologue"

         rows={3}

         className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

        />

       </div>

      </div>



      {/* Submission Details */}

      <div className="space-y-6 bg-gray-900/50 p-6 rounded-xl border border-gray-700">

       <h2 className="text-xl font-semibold text-white flex items-center gap-2">

        <Clock className="w-5 h-5 text-purple-400" />

        Submission Details

       </h2>

        

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

         <label className="block text-sm font-medium text-gray-300">Submission Deadline</label>

         <input

          type="date"

          name="submissionDeadline"

          value={formData.submissionDeadline}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

          required

         />

        </div>

        <div>

         <label className="block text-sm font-medium text-gray-300">Contact Email</label>

         <input

          type="email"

          name="contactEmail"

          value={formData.contactEmail}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"

          required

         />

        </div>

       </div>

      </div>



      <div className="flex justify-end space-x-4">

       <button

        type="button"

        className="px-6 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"

       >

        Save Draft

       </button>

       <button

        type="submit"

        className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"

       >

        Post Casting Call

       </button>

      </div>

     </form>

    </div>

   </div>

  </div>

 );

}