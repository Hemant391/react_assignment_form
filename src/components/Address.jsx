const Address = ({ formData, handleChange }) => {
    return (
      <div>
        <div className="form-group">
          <label className="block mb-2">Address Line 1*</label>
          <input type="text" name="address1" value={formData.address1} onChange={handleChange} style={{border:'2px solid grey'}} className="input  w-full py-2 px-3" required />
        </div>
        <div className="form-group">
          <label className="block mb-2">Address Line 2</label>
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} style={{border:'2px solid grey'}} className="input  w-full py-2 px-3" />
        </div>
        <div className="form-group">
          <label className="block mb-2">City*</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} style={{border:'2px solid grey'}} className="input  w-full py-2 px-3" required />
        </div>
        <div className="form-group">
          <label className="block mb-2">State*</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} style={{border:'2px solid grey'}} className="input  w-full py-2 px-3" required />
        </div>
        <div className="form-group">
          <label className="block mb-2">Zip Code*</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} style={{border:'2px solid grey'}} className="input  w-full py-2 px-3" required />
        </div>
      </div>
    );
  };
  
  export default Address;
  