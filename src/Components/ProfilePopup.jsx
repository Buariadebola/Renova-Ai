import React, { useState } from 'react'

function ProfilePopup({user, onClose, onSave}) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [image, setImage] = useState(user.image);
    const [isEditing, setIsEditing] = useState(false);

    const handleImageChange = (e) => {
        const file= e.target.files[0];
        const reader = new FileReader();
        reader.onLoadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSave = () => {
        onSave({ name, email, image });
        setIsEditing(false);
    }

  return (
    <>
      <div className="profile-popup">
        <div className="profile-header">
            <h2> Profile </h2>
            <button onClick={onClose}>close</button>
        </div>
        <div className="profile-info">
            <img src={image} alt="" />
            {isEditing ? (<input type="file" onChange={handleImageChange} />) : null}
            {isEditing ? (<input type="text" value={name} onChange={(e) => setName(e.target.value)} />) : (
                <p>{name}</p>
            )}
            {isEditing ? (<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />) : (
                <p>{email}</p>
            )}
        </div>
        <div className="profile-actions">
            {isEditing ? (<button className="save-button" onClick={handleSave}>Save</button>) : (<button onClick={() => setIsEditing(true)}>Edit</button>)}
        </div>
      </div>
    </>
  )
}

export default ProfilePopup
