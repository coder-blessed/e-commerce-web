// ProfilePictureUpload.js
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const ProfilePictureUpload = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (image) {
      // Simulate an upload
      setTimeout(() => {
        updateUser({ profilePicture: image });
      }, 1000);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && <img src={image} alt="Profile Preview" style={{ width: '100px', height: '100px' }} />}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ProfilePictureUpload;
