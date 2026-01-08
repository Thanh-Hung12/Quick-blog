import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Upload from "@/components/Upload";
import { createPost } from "@/services/api/blog";

export default function CreateBlog() {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");

  const addTag = () => {
    if (tag.trim() !== "") {
      setTags([...tags, tag.trim()]);
      setTag("");
    }
  };

  const handleUploadFile = (file) => {
    setFile(file);
  };

  const handleCreateBlog = async () => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await res.json();
    console.log(result.secure_url); // ==> URL ảnh
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Tags:", tags);
    // Gọi API tạo blog
    const createResponse = await createPost({
      title,
      content,
      tags,
      image: result.secure_url,
    });
    console.log(createResponse);
    //chuyển về trang home
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen w-full  flex flex-col items-center">
      {/* HEADER TITLE */}
      <h1 className="text-4xl font-bold text-indigo-600 mt-16 flex items-center gap-2">
        📝 Create a New Blog
      </h1>

      <Card className="w-[75%] mt-10 p-6 shadow-sm border rounded-xl">
        <CardContent className="space-y-6">
          {/* Upload Image */}
          <div>
            <label className="font-medium">Blog Image</label>
            <Upload onUpload={handleUploadFile} />
          </div>

          {/* Blog Title */}
          <div>
            <label className="font-medium">Blog Title</label>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Enter blog title"
              className="mt-2"
            />
          </div>

          {/* TinyMCE Editor */}
          <div>
            <label className="font-medium">Blog Content</label>

            <Editor
              onEditorChange={(newValue, editor) => setContent(newValue)}
              value={content}
              apiKey="lmxn7e8ttadccqyglpjdlf7vmfj63qosop55zztlit9p65wy"
              init={{
                plugins: [
                  // Core editing features
                  "anchor",
                  "autolink",
                  "charmap",
                  "codesample",
                  "emoticons",
                  "link",
                  "lists",
                  "media",
                  "searchreplace",
                  "table",
                  "visualblocks",
                  "wordcount",
                  // Your account includes a free trial of TinyMCE premium features
                  // Try the most popular premium features until Dec 4, 2025:
                  "checklist",
                  "mediaembed",
                  "casechange",
                  "formatpainter",
                  "pageembed",
                  "a11ychecker",
                  "tinymcespellchecker",
                  "permanentpen",
                  "powerpaste",
                  "advtable",
                  "advcode",
                  "advtemplate",
                  "ai",
                  "uploadcare",
                  "mentions",
                  "tinycomments",
                  "tableofcontents",
                  "footnotes",
                  "mergetags",
                  "autocorrect",
                  "typography",
                  "inlinecss",
                  "markdown",
                  "importword",
                  "exportword",
                  "exportpdf",
                ],
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant")
                  ),
                uploadcare_public_key: "e47b4b0b081649281419",
              }}
              initialValue="Enter your content..."
            />
          </div>

          {/* Blog Tag */}
          <div>
            <label className="font-medium">Blog Tag</label>
            <div className="flex items-center gap-3 mt-2">
              <Input
                type="text"
                placeholder="Enter blog tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <Button onClick={addTag}>Add Tag</Button>
            </div>

            {/* Show Added Tags */}
            <div className="flex gap-2 flex-wrap mt-3">
              {tags.map((t, i) => (
                <div className="flex gap-2 bg-indigo-100 rounded-full text-sm items-center px-3 py-1  text-indigo-700">
                  <span key={i} className=" ">
                    {t}{" "}
                  </span>
                  <svg
                    onClick={() => {
                      const newTags = tags.filter((_, index) => index !== i);
                      setTags(newTags);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-x cursor-pointer w-3 h-3"
                  >
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Create Blog Button */}
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleCreateBlog}
              className="px-6 bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Create Blog
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* FOOTER */}
      <footer className="w-full mt-16 bg-[#f7f6ff] py-12">
        <div className="max-w-6xl mx-auto flex justify-between px-6">
          <div className="w-1/4">
            <img src="/logo.png" className="h-12 mb-3" alt="Logo" />
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="text-sm space-y-2">
            <h3 className="font-bold mb-2">Quick Links</h3>
            <p>Home</p>
            <p>Best Sellers</p>
            <p>Offers & Deals</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </div>

          <div className="text-sm space-y-2">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p>Delivery Info</p>
            <p>Refund Policy</p>
            <p>Payment Methods</p>
            <p>Track Order</p>
            <p>Support</p>
          </div>

          <div className="text-sm space-y-2">
            <h3 className="font-bold mb-2">Follow Us</h3>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>YouTube</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
