const Submit = ({ formData }) => {
    return (
      <div>
        <h2 className="text-xl mb-4">Confirm your details</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Address 1:</strong> {formData.address1}</p>
        <p><strong>Address 2:</strong> {formData.address2}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>Zip Code:</strong> {formData.zip}</p>
      </div>
    );
  };
  
  export default Submit;
  