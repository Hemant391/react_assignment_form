const Pi = ({ formData, handleChange }) => {
    return (
      <div>
        <div className="form-group">
          <label className="block mt-5 mb-3 text-zinc-500">Name*</label>
          <input type="text" name="name"  value={formData.name} onChange={handleChange} style={{border:'2px solid grey'}} className="input  w-full py-2 px-3" required />
        </div>
        <div className="form-group">
          <label className="block  mt-5 mb-3 text-zinc-500">Email*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{border:'2px solid grey'}} className="input  w-full py-2 px-3" required />
        </div>
        <div className="form-group">
          <label className="block mt-5 mb-3 text-zinc-500">Phone*</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{border:'2px solid grey'}} className="input  w-full py-2 px-3" required />
        </div>
      </div>
    );
  };
  
  export default Pi;
  