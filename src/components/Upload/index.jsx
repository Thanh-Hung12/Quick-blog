import { useState } from "react";
export default function Upload({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onUpload(file); // gửi file lên page
  };

  return (
    <label>
      <input type="file" className="" onChange={handleUpload} />
      {preview && <img src={preview} />}
    </label>
  );
}
